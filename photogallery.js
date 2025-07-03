const allImages = [
  "./photogaleryImages/slika2.jpg",
  "./photogaleryImages/slika3.jpg",
  "./photogaleryImages/slika4.jpg",
  "./photogaleryImages/slika5.jpg",
  "./photogaleryImages/slika6.jpg",
  "./photogaleryImages/slika7.jpg",
  "./photogaleryImages/slika8.jpg",
  "./photogaleryImages/slika9.jpg",
  "./photogaleryImages/slika10.jpg",
  "./photogaleryImages/slika11.jpg",
  "./photogaleryImages/slika12.jpg",
  "./photogaleryImages/slika13.jpg",
  "./photogaleryImages/slika14.jpg",
  "./photogaleryImages/slika15.jpg",
  "./photogaleryImages/slika16.jpg",
  "./photogaleryImages/slika17.jpg",
  "./photogaleryImages/slika18.jpg",
  "./photogaleryImages/slika19.jpg",
];

const container = document.querySelector(".gallery-section__card-container");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let currentTab = "all";
let displayedImages = [];
const IMAGES_PER_LOAD = 6;

// Touch/swipe variables for mobile
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;

function fadeOutIn(callback) {
  container.style.opacity = 0;
  setTimeout(() => {
    callback();
    container.style.opacity = 1;
  }, 300);
}

function showInitialImages(tab) {
  fadeOutIn(() => {
    container.innerHTML = "";
    displayedImages = getImagesByTab(tab, IMAGES_PER_LOAD);
    renderImages(displayedImages);
    updateLoadMoreVisibility();
  });
}

loadMoreBtn.addEventListener("click", () => {
  fadeOutIn(() => {
    const nextImages = getImagesByTab(
      currentTab,
      IMAGES_PER_LOAD,
      displayedImages
    );
    displayedImages = [...displayedImages, ...nextImages];
    renderImages(displayedImages);
    updateLoadMoreVisibility();
  });
});

function updateLoadMoreVisibility() {
  if (displayedImages.length >= allImages.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

function getImagesByTab(tab, count = IMAGES_PER_LOAD, exclude = []) {
  let available = [...allImages];

  if (exclude.length > 0) {
    available = available.filter((img) => !exclude.includes(img));
  }

  const shuffled = available
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);

  return shuffled.slice(0, count);
}

function renderImages(images) {
  container.innerHTML = "";
  images.forEach((src) => {
    const card = document.createElement("div");
    card.classList.add("gallery-card");
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("gallery-card__image");
    card.appendChild(img);
    container.appendChild(card);
  });
}

document.querySelectorAll(".gallery-tabs__button").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    if (target === currentTab) return;

    document
      .querySelector(".gallery-tabs__button--active")
      .classList.remove("gallery-tabs__button--active");
    button.classList.add("gallery-tabs__button--active");

    currentTab = target;
    showInitialImages(currentTab);
  });
});

showInitialImages(currentTab);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxClose = document.querySelector(".lightbox__close");
const arrowLeft = document.querySelector(".lightbox__arrow--left");
const arrowRight = document.querySelector(".lightbox__arrow--right");

let allCurrentImages = [];
let currentImageIndex = 0;

container.addEventListener("click", (e) => {
  const clickedImage = e.target.closest(".gallery-card__image");
  if (clickedImage) {
    const allImgs = [...container.querySelectorAll(".gallery-card__image")];
    allCurrentImages = allImgs.map((img) => img.src);
    currentImageIndex = allCurrentImages.indexOf(clickedImage.src);

    lightboxImage.src = clickedImage.src;
    lightbox.style.display = "flex";
    document.body.classList.add("no-scroll");

    // Add mobile-specific classes for full-screen experience
    if (window.innerWidth <= 768) {
      lightbox.classList.add("mobile-lightbox");
    }
  }
});

function closeLightbox() {
  lightbox.style.display = "none";
  document.body.classList.remove("no-scroll");
  lightbox.classList.remove("mobile-lightbox");
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNextImage();
  if (e.key === "ArrowLeft") showPrevImage();
});

function showNextImage() {
  if (allCurrentImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % allCurrentImages.length;
  lightboxImage.src = allCurrentImages[currentImageIndex];
}

function showPrevImage() {
  if (allCurrentImages.length === 0) return;
  currentImageIndex =
    (currentImageIndex - 1 + allCurrentImages.length) % allCurrentImages.length;
  lightboxImage.src = allCurrentImages[currentImageIndex];
}

arrowRight.addEventListener("click", showNextImage);
arrowLeft.addEventListener("click", showPrevImage);

// Touch/swipe functionality for mobile
lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
  isSwiping = false;
});

lightbox.addEventListener("touchmove", (e) => {
  if (Math.abs(e.changedTouches[0].screenX - touchStartX) > 10) {
    isSwiping = true;
  }
});

lightbox.addEventListener("touchend", (e) => {
  if (!isSwiping) return;

  touchEndX = e.changedTouches[0].screenX;
  const swipeThreshold = 50;
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      // Swipe right - show previous image
      showPrevImage();
    } else {
      // Swipe left - show next image
      showNextImage();
    }
  }

  isSwiping = false;
});

// Prevent default touch behaviors on lightbox
lightbox.addEventListener(
  "touchmove",
  (e) => {
    if (isSwiping) {
      e.preventDefault();
    }
  },
  { passive: false }
);
