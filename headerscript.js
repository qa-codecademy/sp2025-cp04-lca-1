document.getElementById("menu-icon").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");

  const bars = document.querySelectorAll("#menu-icon .bar");
  bars.forEach((bar, index) => {
    bar.classList.toggle(`bar-${index + 1}-active`);
  });
});

const menuLinks = document.querySelectorAll(
  ".header-nav-item a, .header-language img"
);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    const bars = document.querySelectorAll("#menu-icon .bar");

    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      bars.forEach((bar, index) => {
        bar.classList.remove(`bar-${index + 1}-active`);
      });
    }
  });
});

// Scroll indicator functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollIndicator = document.querySelector(".scroll-indicator");

  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      const missionSection = document.getElementById("missionvision-connect");
      if (missionSection) {
        missionSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
});
