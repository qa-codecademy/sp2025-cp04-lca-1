// Volunteer registration system
let volunteers = [];

// Get current language
function getCurrentLanguage() {
  return (localStorage.getItem("preferredLanguage") || "en").toLowerCase();
}

// Get translated message
function getVolunteerMessage(key) {
  const lang = getCurrentLanguage();
  const messages = {
    en: {
      notLoggedIn:
        "You must be logged in to register as a volunteer. Please log in first.",
      title: "Join Our Cause - Volunteer Registration",
      registeringAs: "Registered as:",
      phoneNumber: "Phone Number:",
      age: "Age:",
      city: "City:",
      areasOfInterest: "Areas of Interest:",
      availability: "Availability:",
      selectAvailability: "Select availability",
      selectInterest: "Select area of interest",
      weekdays: "Weekdays",
      weekends: "Weekends",
      both: "Both",
      flexible: "Flexible",
      motivation: "Why do you want to volunteer? (Optional)",
      motivationPlaceholder:
        "Tell us about your motivation to join our cause...",
      registerButton: "Register as Volunteer",
      cancelButton: "Cancel",
      ageError: "You must be at least 16 years old to volunteer.",
      phoneError: "Please enter a valid phone number (minimum 8 digits).",
      phoneCyrillicError: "Cannot use Cyrillic characters.",
      cityError: "Please enter a valid city name (minimum 2 characters).",
      cityCyrillicError: "Cannot use Cyrillic characters.",
      motivationCyrillicError: "Cannot use Cyrillic characters.",
      interestsError: "Please select an area of interest.",
      alreadyRegistered: "You are already registered as a volunteer!",
      successMessage:
        "Thank you for registering as a volunteer! We will contact you soon.",
      errorMessage: "Error saving registration. Please try again.",
      environment: "Environment",
      education: "Education",
      healthcare: "Healthcare",
      infrastructure: "Infrastructure",
      cultural: "Cultural",
    },
    mk: {
      notLoggedIn:
        "Мора да сте најавени за да се регистрирате како волонтер. Ве молиме прво се најавете.",
      title: "Придружи се - Регистрација за волонтер",
      registeringAs: "Регистриран како:",
      phoneNumber: "Телефонски број:",
      age: "Возраст:",
      city: "Град:",
      areasOfInterest: "Области на интерес:",
      availability: "Достапност:",
      selectAvailability: "Изберете достапност",
      selectInterest: "Изберете област на интерес",
      weekdays: "Работни денови",
      weekends: "Викенди",
      both: "И двете",
      flexible: "Флексибилно",
      motivation: "Зошто сакате да волонтирате? (Опционално)",
      motivationPlaceholder:
        "Кажете ни за вашата мотивација зошто мислите дека треба да се пријавите како волонтер?",
      registerButton: "Регистрирај се како волонтер",
      cancelButton: "Откажи",
      ageError: "Мора да имате најмалку 16 години за да волонтирате.",
      phoneError:
        "Ве молиме внесете валиден телефонски број (најмалку 8 цифри).",
      phoneCyrillicError: "Не може да се користи кирилица.",
      cityError:
        "Ве молиме внесете валидно име на град (најмалку 2 карактери).",
      cityCyrillicError: "Не може да се користи кирилица.",
      motivationCyrillicError: "Не може да се користи кирилица.",
      interestsError: "Ве молиме изберете област на интерес.",
      alreadyRegistered: "Веќе сте регистрирани како волонтер!",
      successMessage:
        "Ви благодариме што се регистриравте како волонтер! Ќе ве контактираме наскоро.",
      errorMessage:
        "Грешка при зачувување на регистрацијата. Обидете се повторно.",
      environment: "Животна средина",
      education: "Образование",
      healthcare: "Здравство",
      infrastructure: "Инфраструктура",
      cultural: "Култура",
    },
  };

  return messages[lang]?.[key] || messages.en[key] || key;
}

// Load existing volunteers from localStorage
function loadVolunteers() {
  try {
    const volunteersData = localStorage.getItem("volunteers");
    return volunteersData ? JSON.parse(volunteersData) : [];
  } catch (error) {
    console.error("Error loading volunteers:", error);
    return [];
  }
}

// Save volunteers to localStorage
function saveVolunteers(volunteers) {
  try {
    localStorage.setItem("volunteers", JSON.stringify(volunteers));
    return true;
  } catch (error) {
    console.error("Error saving volunteers:", error);
    return false;
  }
}

// Check if user is logged in
function isUserLoggedIn() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser !== null;
}

// Get current user info
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// Show volunteer registration form
function showVolunteerForm() {
  if (!isUserLoggedIn()) {
    showVolunteerMessage(getVolunteerMessage("notLoggedIn"), false);
    return;
  }

  const currentUser = getCurrentUser();

  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "volunteer-modal-overlay";
  modalOverlay.id = "volunteer-modal-overlay";

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "volunteer-modal-content";

  modalContent.innerHTML = `
    <div class="volunteer-modal-header">
      <h2>${getVolunteerMessage("title")}</h2>
      <button class="volunteer-close-btn" id="volunteer-close-btn">&times;</button>
    </div>
    
    <div class="volunteer-modal-body">
      <div class="user-info-display">
        <div class="user-avatar">
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-details">
          <p><strong>${getVolunteerMessage("registeringAs")}</strong> ${
    currentUser.username
  }</p>
          <p><strong>Email:</strong> ${currentUser.email}</p>
        </div>
      </div>
      
      <form id="volunteer-registration-form">
        <div class="form-group">
          <label for="volunteer-phone">${getVolunteerMessage(
            "phoneNumber"
          )}</label>
          <input type="tel" id="volunteer-phone" name="phone" required>
        </div>
        
        <div class="form-group">
          <label for="volunteer-age">${getVolunteerMessage("age")}</label>
          <input type="number" id="volunteer-age" name="age" min="16" max="100" required>
        </div>
        
        <div class="form-group">
          <label for="volunteer-city">${getVolunteerMessage("city")}</label>
          <input type="text" id="volunteer-city" name="city" required>
        </div>
        
        <div class="form-group">
          <label for="volunteer-interests">${getVolunteerMessage(
            "areasOfInterest"
          )}</label>
          <select id="volunteer-interests" name="interests" required>
            <option value="Environment">${getVolunteerMessage(
              "environment"
            )}</option>
            <option value="Education">${getVolunteerMessage(
              "education"
            )}</option>
            <option value="Healthcare">${getVolunteerMessage(
              "healthcare"
            )}</option>
            <option value="Infrastructure">${getVolunteerMessage(
              "infrastructure"
            )}</option>
            <option value="Cultural">${getVolunteerMessage("cultural")}</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="volunteer-availability">${getVolunteerMessage(
            "availability"
          )}</label>
          <select id="volunteer-availability" name="availability" required>
            <option value="Weekdays">${getVolunteerMessage("weekdays")}</option>
            <option value="Weekends">${getVolunteerMessage("weekends")}</option>
            <option value="Both">${getVolunteerMessage("both")}</option>
            <option value="Flexible">${getVolunteerMessage("flexible")}</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="volunteer-motivation">${getVolunteerMessage(
            "motivation"
          )}</label>
          <textarea id="volunteer-motivation" name="motivation" rows="4" placeholder="${getVolunteerMessage(
            "motivationPlaceholder"
          )}"></textarea>
        </div>
        
        <div class="form-actions">
          <button type="submit" class="volunteer-submit-btn">${getVolunteerMessage(
            "registerButton"
          )}</button>
        </div>
      </form>
    </div>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Add event listeners
  document
    .getElementById("volunteer-close-btn")
    .addEventListener("click", closeVolunteerForm);
  document
    .getElementById("volunteer-registration-form")
    .addEventListener("submit", handleVolunteerRegistration);

  // Close modal when clicking outside
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeVolunteerForm();
    }
  });
}

// Close volunteer registration form
function closeVolunteerForm() {
  const modalOverlay = document.getElementById("volunteer-modal-overlay");
  if (modalOverlay) {
    modalOverlay.remove();
  }
}

// Handle volunteer registration form submission
function handleVolunteerRegistration(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const currentUser = getCurrentUser();

  // Get selected interest
  const interest = formData.get("interests");
  const phone = formData.get("phone");
  const city = formData.get("city");
  const motivation = formData.get("motivation") || "";

  const volunteerData = {
    id: Date.now().toString(),
    userId: currentUser.id,
    username: currentUser.username,
    email: currentUser.email,
    phone: phone,
    age: parseInt(formData.get("age")),
    city: city,
    interests: [interest],
    availability: formData.get("availability"),
    motivation: motivation,
    registrationDate: new Date().toISOString(),
    status: "Pending",
  };

  // Validate data
  if (volunteerData.age < 16) {
    showVolunteerMessage(getVolunteerMessage("ageError"), false);
    return;
  }

  // Check for Cyrillic characters in phone number
  if (/[а-шА-Ш]/.test(phone)) {
    showVolunteerMessage(getVolunteerMessage("phoneCyrillicError"), false);
    return;
  }

  // Validate phone number (minimum 8 digits, can contain spaces, dashes, parentheses)
  const phoneRegex = /^[\d\s\-\(\)]{8,}$/;
  if (!phoneRegex.test(phone)) {
    showVolunteerMessage(getVolunteerMessage("phoneError"), false);
    return;
  }

  // Check for Cyrillic characters in city name
  if (/[а-шА-Ш]/.test(city)) {
    showVolunteerMessage(getVolunteerMessage("cityCyrillicError"), false);
    return;
  }

  // Validate city (minimum 2 characters, letters and spaces only)
  const cityRegex = /^[a-zA-Z\s]{2,}$/;
  if (!cityRegex.test(city)) {
    showVolunteerMessage(getVolunteerMessage("cityError"), false);
    return;
  }

  // Check for Cyrillic characters in motivation (if provided)
  if (motivation && /[а-шА-Ш]/.test(motivation)) {
    showVolunteerMessage(getVolunteerMessage("motivationCyrillicError"), false);
    return;
  }

  // Check if user is already registered as volunteer
  const existingVolunteers = loadVolunteers();
  const alreadyRegistered = existingVolunteers.find(
    (v) => v.userId === currentUser.id
  );

  if (alreadyRegistered) {
    showVolunteerMessage(getVolunteerMessage("alreadyRegistered"), false);
    closeVolunteerForm();
    return;
  }

  // Save volunteer data
  existingVolunteers.push(volunteerData);
  const saved = saveVolunteers(existingVolunteers);

  if (saved) {
    showVolunteerMessage(getVolunteerMessage("successMessage"), true);
    closeVolunteerForm();
  } else {
    showVolunteerMessage(getVolunteerMessage("errorMessage"), false);
  }
}

// Show volunteer message
function showVolunteerMessage(message, isSuccess = true) {
  // Check if a message is already displayed
  const existingMessage = document.querySelector(".volunteer-message");
  if (existingMessage) {
    return; // Don't show new message if one is already displayed
  }

  // Create message element
  const messageDiv = document.createElement("div");
  messageDiv.className = `volunteer-message ${isSuccess ? "success" : "error"}`;
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  // Remove message after 10 seconds
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.parentNode.removeChild(messageDiv);
    }
  }, 10000);
}

// Initialize volunteer system
function initVolunteerSystem() {
  // Load existing volunteers
  volunteers = loadVolunteers();

  // Add click event to "Join Our Cause" button
  const joinButton = document.getElementById("join-cause-btn");
  if (joinButton) {
    joinButton.addEventListener("click", function (e) {
      e.preventDefault();
      showVolunteerForm();
    });
  }

  // Add click event to "Learn More" button
  const learnMoreButton = document.getElementById("learn-more-btn");
  if (learnMoreButton) {
    learnMoreButton.addEventListener("click", function (e) {
      e.preventDefault();
      showVolunteerInfo();
    });
  }
}

// Show volunteer information modal
function showVolunteerInfo() {
  const lang = getCurrentLanguage();

  // Get translations from the main translation system
  const translations = {
    en: {
      title: "Volunteer Opportunities",
      subtitle: "Make a difference in your community",
      description:
        "Join our volunteer program and become part of a team dedicated to creating positive change in local communities.",
      whatYouWillDo: "What You Will Do:",
      activities: [
        "Participate in community development projects",
        "Support environmental conservation initiatives",
        "Assist in educational programs and workshops",
        "Help with healthcare awareness campaigns",
        "Contribute to cultural preservation activities",
        "Engage in infrastructure improvement projects",
      ],
      benefits: "Benefits of Volunteering:",
      benefitsList: [
        "Gain valuable experience and skills",
        "Meet like-minded people and build networks",
        "Make a positive impact in your community",
        "Learn about sustainable development",
        "Receive training and professional development",
        "Earn certificates and recognition",
      ],
      requirements: "Requirements:",
      requirementsList: [
        "Minimum age: 16 years old",
        "Commitment to community service",
        "Willingness to learn and collaborate",
        "Flexible availability (weekdays/weekends)",
        "Positive attitude and teamwork skills",
      ],
      close: "Close",
    },
    mk: {
      title: "Волонтерски Можности",
      subtitle: "Направете разлика во вашата заедница",
      description:
        "Придружете се на нашиот волонтерски програм и станете дел од тим посветен на создавање позитивни промени во локалните заедници.",
      whatYouWillDo: "Што ќе правите:",
      activities: [
        "Учествување во проекти за заедничка развојна акција",
        "Поддршка на иницијативи за заштита на животната средина",
        "Помош при програми за образование и работилиски",
        "Помош при кампании за заедничко знаење за здравство",
        "Придонеси кон активности за зачување на културната традиција",
        "Учествување во проекти за подобрување на инфраструктурата",
      ],
      benefits: "Победите од Волонтерството:",
      benefitsList: [
        "Зачувајте вредна искуства и вештини",
        "Среќате се со слични луѓе и создавате мрежи",
        "Направете позитивен утицај во вашата заедница",
        "Научете за одржлив развој",
        "Получувате обука и професионално развој",
        "Заработувате сертификати и препознавање",
      ],
      requirements: "Услови:",
      requirementsList: [
        "Минимален возраст: 16 години",
        "Комитот за заедничка услуга",
        "Желба за учење и соработка",
        "Флексибилна достапност (работни денови/викенди)",
        "Позитивна нагласа и вештини за работа во тим",
      ],
      close: "Затвори",
    },
  };

  const t = translations[lang] || translations.en;

  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "volunteer-modal-overlay";
  modalOverlay.id = "volunteer-info-modal-overlay";

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.className = "volunteer-modal-content";
  modalContent.innerHTML = `
    <div class="volunteer-modal-header">
      <h2>${t.title}</h2>
      <button id="volunteer-info-close-btn" class="volunteer-close-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>
    
    <div class="volunteer-info-content">
      <h3>${t.subtitle}</h3>
      <p class="volunteer-info-description">${t.description}</p>
      
      <div class="volunteer-info-section">
        <h4>${t.whatYouWillDo}</h4>
        <ul class="volunteer-info-list">
          ${t.activities.map((activity) => `<li>${activity}</li>`).join("")}
        </ul>
      </div>
      
      <div class="volunteer-info-section">
        <h4>${t.benefits}</h4>
        <ul class="volunteer-info-list">
          ${t.benefitsList.map((benefit) => `<li>${benefit}</li>`).join("")}
        </ul>
      </div>
      
      <div class="volunteer-info-section">
        <h4>${t.requirements}</h4>
        <ul class="volunteer-info-list">
          ${t.requirementsList
            .map((requirement) => `<li>${requirement}</li>`)
            .join("")}
        </ul>
      </div>
      
      <div class="volunteer-info-actions">
        <button class="volunteer-info-close-button">${t.close}</button>
      </div>
    </div>
  `;

  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Add event listeners
  document
    .getElementById("volunteer-info-close-btn")
    .addEventListener("click", closeVolunteerInfo);

  document
    .querySelector(".volunteer-info-close-button")
    .addEventListener("click", closeVolunteerInfo);

  // Close modal when clicking outside
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      closeVolunteerInfo();
    }
  });
}

// Close volunteer information modal
function closeVolunteerInfo() {
  const modalOverlay = document.getElementById("volunteer-info-modal-overlay");
  if (modalOverlay) {
    modalOverlay.remove();
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initVolunteerSystem);
