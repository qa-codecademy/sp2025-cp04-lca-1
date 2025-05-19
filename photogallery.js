const allImages = [
  "./photogaleryImages/slika2.jpg",
  "./photogaleryImages/slika3.jpg",
  "./photogaleryImages/slika4.jpg",
  "./photogaleryImages/slika5.jpg",
  "./photogaleryImages/slika6.jpg",
  "./photogaleryImages/slika7.jpg",
  "./photogaleryImages/slika8.jpg",
  "./photogaleryImages/slika9.jpg",
];

const container = document.querySelector(".gallery-section__card-container");
const loadMoreBtn = document.getElementById("loadMoreBtn");
let currentTab = "all";
let displayedImages = [];

// Utility za fade transition
function fadeOutIn(callback) {
  container.style.opacity = 0;
  setTimeout(() => {
    callback();
    container.style.opacity = 1;
  }, 300);
}

// Prikazi inicijalni sliki
function showInitialImages(tab) {
  fadeOutIn(() => {
    container.innerHTML = "";
    const initialCount = tab === "all" ? 9 : 3;
    displayedImages = getImagesByTab(tab, initialCount);
    renderImages(displayedImages);
    loadMoreBtn.style.display = "block";
  });
}

// Load More dodava uste 3 sliki
loadMoreBtn.addEventListener("click", () => {
  fadeOutIn(() => {
    const nextImages = getImagesByTab(currentTab, 3, displayedImages);
    displayedImages = [...displayedImages, ...nextImages];
    renderImages(displayedImages);
  });
});

// Dobij random sliki bez duplikati
function getImagesByTab(tab, count = 3, exclude = []) {
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

// Render sliki
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

// Tabs listeners
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

// Pochetno vchituvanje
showInitialImages(currentTab);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxClose = document.querySelector(".lightbox__close");
const arrowLeft = document.querySelector(".lightbox__arrow--left");
const arrowRight = document.querySelector(".lightbox__arrow--right");

let allCurrentImages = []; // patiki do site sliki shto se prikazani
let currentImageIndex = 0;

// Klik na slika => otvori lightbox
container.addEventListener("click", (e) => {
  const clickedImage = e.target.closest(".gallery-card__image");
  if (clickedImage) {
    const allImgs = [...container.querySelectorAll(".gallery-card__image")];
    allCurrentImages = allImgs.map((img) => img.src);
    currentImageIndex = allCurrentImages.indexOf(clickedImage.src);

    lightboxImage.src = clickedImage.src;
    lightbox.style.display = "flex";
    document.body.classList.add("no-scroll");
  }
});

// Zatvori lightbox
function closeLightbox() {
  lightbox.style.display = "none";
  document.body.classList.remove("no-scroll");
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

// Slejna i prethodna slika
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
