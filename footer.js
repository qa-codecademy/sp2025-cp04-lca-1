// Иницијализирај EmailJS со твојот public key
emailjs.init("YOUR_PUBLIC_KEY"); // 🔁 Замени со твојот EmailJS Public Key

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageEl = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    messageEl.style.display = "block";
    messageEl.textContent = "Sending...";
    messageEl.style.color = "#facc15";

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(() => {
        messageEl.textContent = "Message sent successfully!";
        messageEl.style.color = "#22c55e";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        messageEl.textContent = "Oops! Something went wrong.";
        messageEl.style.color = "#ef4444";
      });
  });
});
