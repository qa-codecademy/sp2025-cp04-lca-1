document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const phone = this.phone.value.trim();
  const subject = this.subject.value.trim();
  const message = this.message.value.trim();
  const response = document.getElementById("formResponse");

  // Clear previous message
  response.textContent = "";
  response.style.color = "red";

  // Name: at least 2 characters
  if (name.length < 2) {
    response.textContent =
      "Please enter your full name (at least 2 characters).";
    return;
  }

  // Email: format and at least 5 characters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    response.textContent =
      "Please enter a valid email address (e.g. user@example.com).";
    return;
  }

  // Phone: at least 6 characters and only valid characters
  const phoneRegex = /^[0-9+\-\s()]{6,}$/;
  if (!phoneRegex.test(phone)) {
    response.textContent =
      "Please enter a valid phone number (at least 6 digits).";
    return;
  }

  // Subject: at least 3 characters
  if (subject.length < 3) {
    response.textContent = "Please enter a subject (at least 3 characters).";
    return;
  }

  // Message: at least 10 characters
  if (message.length < 10) {
    response.textContent =
      "Please enter a longer message (at least 10 characters).";
    return;
  }

  // Everything is valid – build mailto link
  const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
  const mailtoLink = `mailto:filiptrifunovski88@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  try {
    window.location.href = mailtoLink;
    response.textContent = "Your message has been sent successfully.";
    response.style.color = "green";
  } catch (err) {
    response.textContent =
      "An error occurred while trying to open your email client.";
    response.style.color = "red";
  }
});
