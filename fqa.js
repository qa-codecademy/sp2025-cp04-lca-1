const questions = document.querySelectorAll(".faq-question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".arrow-icon");

    btn.classList.toggle("open");
    if (btn.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    } else {
      answer.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    }
  });
});
