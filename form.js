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

  // Get current language
  const currentLang = localStorage.getItem("preferredLanguage") || "en";

  // Function to get translated message
  function getFormMessage(key) {
    const messages = {
      en: {
        nameError: "Please enter your full name (at least 2 characters).",
        emailError:
          "Please enter a valid email address (e.g. user@example.com).",
        phoneError: "Please enter a valid phone number (at least 6 digits).",
        subjectError: "Please enter a subject (at least 3 characters).",
        messageError: "Please enter a longer message (at least 10 characters).",
        successMessage: "Your message has been sent successfully.",
        errorMessage:
          "An error occurred while trying to open your email client.",
      },
      mk: {
        nameError: "Ве молиме внесете вашето име (барем 2 знаци).",
        emailError:
          "Ве молиме внесете валидна е-пошта (на пример, user@example.com).",
        phoneError:
          "Ве молиме внесете валиден телефонски број (барем 6 цифри).",
        subjectError: "Ве молиме внесете наслов (барем 3 знаци).",
        messageError: "Ве молиме внесете повеќе текст (барем 10 знаци).",
        successMessage: "Вашата порака е успешно испратена!",
        errorMessage:
          "Се појави грешка при обидување да се отвори вашиот е-пошта клиент.",
      },
    };
    return messages[currentLang]?.[key] || messages.en[key] || key;
  }

  // Name: at least 2 characters
  if (name.length < 2) {
    response.textContent = getFormMessage("nameError");
    return;
  }

  // Email: format and at least 5 characters
  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    response.textContent = getFormMessage("emailError");
    return;
  }

  // Phone: at least 6 characters and only valid characters
  const phoneRegex = /^[0-9+\-\s()]{6,}$/;
  if (!phoneRegex.test(phone)) {
    response.textContent = getFormMessage("phoneError");
    return;
  }

  // Subject: at least 3 characters
  if (subject.length < 3) {
    response.textContent = getFormMessage("subjectError");
    return;
  }

  // Message: at least 10 characters
  if (message.length < 10) {
    response.textContent = getFormMessage("messageError");
    return;
  }

  // Everything is valid – build mailto link
  const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;
  const mailtoLink = `mailto:filiptrifunovski88@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  try {
    window.location.href = mailtoLink;
    response.textContent = getFormMessage("successMessage");
    response.style.color = "green";
  } catch (err) {
    response.textContent = getFormMessage("errorMessage");
    response.style.color = "red";
  }
});
