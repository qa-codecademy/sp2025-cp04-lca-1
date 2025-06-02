document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    const messageEl = document.getElementById("form-message");
    messageEl.style.display = "block";
    messageEl.textContent = "Sending...";
    messageEl.style.color = "#facc15";
  });

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const messageEl = document.getElementById("form-message");

  if (params.has("success")) {
    messageEl.style.display = "block";
    messageEl.style.color = "#22c55e";
    messageEl.textContent = "Message sent successfully!";
  }

  if (params.has("error")) {
    messageEl.style.display = "block";
    messageEl.style.color = "#ef4444";
    messageEl.textContent = "Oops! Something went wrong.";
  }
});
