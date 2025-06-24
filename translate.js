// Test if script is loading
console.log("translate.js file loaded successfully");

// Translation JSONs
const mainTranslations = {
  en: {
    header: {
      home: "Home",
      mission: "Mission & Vision",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
<<<<<<< Updated upstream
=======
      loginBtn: "Log In",
>>>>>>> Stashed changes
    },
    login: {
      login: "Login",
      username: "Username",
      password: "Password",
      loginBtn: "Log In",
      noAccount: "Don't have an account?",
      createAccount: "Click here to Register",
      create: "Create Account",
      email: "Email",
      confirmPassword: "Confirm Password",
      registerBtn: "Register",
      alreadyAccount: "Already have an account?",
      showLogin: "Click here to Log In",
      welcome: "Welcome!",
      memberSince: "Member since:",
      editAccount: "Edit Account",
      editAccountTitle: "Edit Account",
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmNewPassword: "Confirm New Password",
      saveChanges: "Save Changes",
      yourAccount: "Your Account",
      logout: "Logout",
      cyrillicError:
        "Username cannot contain Cyrillic characters. Please use Latin letters only.",
<<<<<<< Updated upstream
=======
      forgotPassword: "Forgot password?",
>>>>>>> Stashed changes
    },
    home: {
      title: "Empowering <br />Communities Through <br />Local Action",
      desc: "We bring people together to create sustainable development and positive change in communities across the region.",
      join: "Join Our Cause",
      learn: "Learn More",
    },
    mission: {
      section: "Mission & Vision",
      ourMission: "Our Mission",
      missionP1:
        "LOCAL ACT is dedicated to fostering sustainable local development through community-driven initiatives, collaborative partnerships, and innovative solutions that address the unique challenges faced by communities.",
      missionP2:
        "We believe in empowering individuals and organizations to take an active role in shaping their communities, creating inclusive spaces where everyone can thrive and contribute to positive change.",
      ourVision: "Our Vision",
      visionP1:
        "We envision vibrant, resilient communities where local resources are leveraged effectively, social cohesion is strengthened, and sustainable development practices are embedded in everyday life.",
      visionP2:
        "By 2030, we aim to have supported over 100 communities in developing self-sustaining initiatives that improve quality of life, preserve cultural heritage, and protect the environment for future generations.",
    },
    projects: {
      title: "Our Projects",
      description:
        "Explore our diverse projects and filter by category, status, and date range.",
      filters: "Filters",
      category: "Category",
      allCategories: "All Categories",
      environment: "Environment",
      education: "Education",
      healthcare: "Healthcare",
      infrastructure: "Infrastructure",
      cultural: "Cultural",
      status: "Status",
      ongoing: "Ongoing",
      completed: "Completed",
      upcoming: "Upcoming",
      dateRange: "Date Range",
      from: "From",
      to: "To",
      applyFilters: "Apply Filters",
    },
    supporters: {
      heading: "Our Supporters",
      desc: "We're grateful to these organizations for making our work possible",
    },
    gallery: {
      title: "Photo Gallery",
      subtitle:
        "Explore visual highlights from our projects and community events",
      all: "All Photos",
      projects: "Projects",
      events: "Events",
      volunteers: "Volunteers",
      loadMore: "Load More",
    },
    faq: {
      title: "(FAQ) Frequently Asked Questions",
<<<<<<< Updated upstream
      q1: "What is your return policy?",
      a1: "We offer returns within 14 days if the product is unused and in its original packaging.",
      q2: "How long does delivery take?",
      a2: "Delivery usually takes 3–5 business days within the country.",
      q3: "Do you ship internationally?",
      a3: "Yes, we ship internationally with additional shipping charges depending on the destination.",
=======
      q1: "What are the main sources of funding?",
      a1: "Donations from individuals and local businesses who support our mission.",
      q2: "What does it take to become a member?",
      a2: "Attend an introductory meeting to understand our values and ongoing projects.",
      q3: "What are the key areas of operation?",
      a3: "Youth engagement and education – supporting youth initiatives, training, and cultural exchanges.",
>>>>>>> Stashed changes
    },
    contact: {
      title: "Let's Keep In Touch",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
    },
    footer: {
      desc: "Empowering communities through collaborative action and sustainable development since 2018.",
      quickLinks: "Quick Links",
      home: "Home",
      mission: "Mission & Vision",
      projects: "Projects",
      gallery: "Gallery",
      volunteer: "Volunteer",
      donate: "Donate",
      contact: "Contact Us",
      location: "Makedonski Brod",
      workingHours: "Mon–Fri: 9AM–5PM",
      ourJourney: "Our Journey",
      journey: [
        "2018 – Local Act was founded with a vision for sustainable community action.",
        "2019 – Launched our first youth-led project in Makedonski Brod.",
        "2021 – Expanded impact to 6 rural communities across Macedonia.",
        "2023 – Built strategic partnerships with schools and NGOs.",
        "2024 – Recognized nationally for civic innovation and youth engagement.",
      ],
      copyright: "© 2025 LOCAL ACT. All rights reserved.",
    },
  },
  mk: {
    header: {
      home: "Дома",
      mission: "Мисија и Визија",
      projects: "Проекти",
      gallery: "Галерија",
      contact: "Контакт",
<<<<<<< Updated upstream
=======
      loginBtn: "Најави се",
>>>>>>> Stashed changes
    },
    login: {
      login: "Најава",
      username: "Корисничко име",
      password: "Лозинка",
      loginBtn: "Најави се",
      noAccount: "Немате корисничка сметка?",
      createAccount: "Кликнете тука за регистрација",
      create: "Креирај сметка",
      email: "Е-пошта",
      confirmPassword: "Потврди лозинка",
      registerBtn: "Регистрирај се",
      alreadyAccount: "Веќе имате сметка?",
      showLogin: "Кликнете тука за најава",
      welcome: "Добредојде!",
      memberSince: "Член од:",
      editAccount: "Уреди сметка",
      editAccountTitle: "Уреди сметка",
      changePassword: "Промени лозинка",
      currentPassword: "Тековна лозинка",
      newPassword: "Нова лозинка",
      confirmNewPassword: "Потврди нова лозинка",
      saveChanges: "Зачувај промени",
      yourAccount: "Вашата сметка",
      logout: "Одјави се",
      loginSuccess: "Успешно се најавивте!",
      logoutSuccess: "Успешно се одјавивте!",
      registrationSuccess: "Сметката е успешно креирана!",
      passwordChanged: "Лозинката е успешно променета!",
      accountUpdated: "Сметката е успешно ажурирана!",
      cyrillicError:
        "Корисничкото име не може да содржи кирилични карактери. Ве молиме користете само латинични букви.",
<<<<<<< Updated upstream
=======
      forgotPassword: "Ја заборавивте лозинката?",
>>>>>>> Stashed changes
    },
    home: {
      title: "Овозможуваме <br />заедници преку <br />локална акција",
      desc: "Ги обединуваеме луѓето за да создадеме одржлив развој и позитивни промени во заедниците низ регионот.",
      join: "Придружи се",
      learn: "Дознај повеќе",
    },
    mission: {
      section: "Мисија и Визија",
      ourMission: "Нашата Мисија",
      missionP1:
        "LOCAL ACT е посветен на поттикнување одржлив локален развој преку иницијативи водени од заедницата, соработка и иновативни решенија кои ги адресираат уникатните предизвици на заедниците.",
      missionP2:
        "Веруваме во овозможување на поединци и организации да имаат активна улога во обликувањето на своите заедници, создавајќи инклузивни простори каде секој може да напредува и да придонесе за позитивни промени.",
      ourVision: "Нашата Визија",
      visionP1:
        "Замислуваме живи, отпорни заедници каде локалните ресурси се користат ефикасно, социјалната кохезија е зајакната, а одржливите практики се дел од секојдневниот живот.",
      visionP2:
        "До 2030 година, целиме да поддржиме над 100 заедници во развој на самоодржливи иницијативи кои го подобруваат квалитетот на живот, ја зачувуваат културната традиција и ја штитат животната средина за идните генерации.",
    },
    projects: {
      title: "Нашите Проекти",
      description:
        "Истражете ги нашите разновидни проекти и филтрирајте по категорија, статус и временски период.",
      filters: "Филтри",
      category: "Категорија",
      allCategories: "Сите Категории",
      environment: "Животна Средина",
      education: "Образование",
      healthcare: "Здравство",
      infrastructure: "Инфраструктура",
      cultural: "Култура",
      status: "Статус",
      ongoing: "Во тек",
      completed: "Завршено",
      upcoming: "Најавено",
      dateRange: "Временски Период",
      from: "Од",
      to: "До",
      applyFilters: "Примени Филтри",
    },
    supporters: {
      heading: "Наши Поддржувачи",
      desc: "Им благодариме на овие организации што ја овозможуваат нашата работа",
    },
    gallery: {
      title: "Фото Галерија",
      subtitle:
        "Погледнете ги визуелните моменти од нашите проекти и настани во заедницата",
      all: "Сите фотографии",
      projects: "Проекти",
      events: "Настани",
      volunteers: "Волонтери",
      loadMore: "Вчитај повеќе",
    },
    faq: {
<<<<<<< Updated upstream
      title: "(ЧПП) Најчесто поставувани прашања",
      q1: "Која е вашата политика за враќање?",
      a1: "Нудиме враќање во рок од 14 дена доколку производот не е користен и е во оригинално пакување.",
      q2: "Колку време трае испораката?",
      a2: "Испораката обично трае 3–5 работни дена во земјата.",
      q3: "Дали испорачувате интернационално?",
      a3: "Да, испорачуваме интернационално со дополнителни трошоци за испорака во зависност од дестинацијата.",
=======
      title: "Најчесто поставувани прашања",
      q1: "Кои се главните извори на финансирање?",
      a1: "Донации од поединци и локални бизниси кои ја поддржуваат нашата мисија.",
      q2: "Што е потребно за да се стане член?",
      a2: "Присуство на воведен состанок со цел запознавање со нашите вредности и тековни проекти.",
      q3: "Кои се клучните области на делување?",
      a3: "Вклучување и едукација на млади – поддршка на младински иницијативи, обуки и културни размени.",
>>>>>>> Stashed changes
    },
    contact: {
      title: "Останете во контакт",
      name: "Име и презиме",
      phone: "Телефонски број",
      email: "Е-пошта",
      subject: "Наслов",
      message: "Порака",
      send: "Испрати порака",
    },
    footer: {
      desc: "Овозможуваме заедници преку заедничка акција и одржлив развој од 2018 година.",
      quickLinks: "Брзи Линкови",
      home: "Дома",
      mission: "Мисија и Визија",
      projects: "Проекти",
      gallery: "Галерија",
      volunteer: "Волонтер",
      donate: "Донација",
      contact: "Контакт",
      location: "Македонски Брод",
      workingHours: "Пон-Пет: 9:00-17:00",
      ourJourney: "Нашиот Пат",
      journey: [
        "2018 – Local Act е основан со визија за одржлива заедничка акција.",
        "2019 – Започнат првиот младински проект во Македонски Брод.",
        "2021 – Проширување на влијанието во 6 рурални заедници низ Македонија.",
        "2023 – Изградени стратешки партнерства со училишта и невладини организации.",
        "2024 – Национално признание за граѓански иновации и младинска вклученост.",
      ],
      copyright: "© 2025 LOCAL ACT. Сите права се задржани.",
    },
  },
};

// Make translations globally available
window.translations = mainTranslations;
window.currentLanguage = "en"; // Default language

// Utility: map selectors to translation keys
const translationMap = [
  // Header
  {
    selector: ".header-nav-item:nth-child(1) a",
    key: "header.home",
  },
  {
    selector: ".header-nav-item:nth-child(2) a",
    key: "header.mission",
  },
  {
    selector: ".header-nav-item:nth-child(3) a",
    key: "header.projects",
  },
  {
    selector: ".header-nav-item:nth-child(4) a",
    key: "header.gallery",
  },
  {
    selector: ".header-nav-item:nth-child(5) a",
    key: "header.contact",
  },
<<<<<<< Updated upstream

  // Header Login Button
  {
    selector: ".header-language-wrapper-desktop .user-profile p",
    key: "login.loginBtn",
  },
  {
    selector: ".header-language-wrapper-mobile .user-profile p",
    key: "login.loginBtn",
  },
=======
  // Header Login Button (desktop and mobile)
  { selector: ".user-profile-inner p", key: "header.loginBtn" },
>>>>>>> Stashed changes

  // Login Popup
  { selector: "#login-container h2", key: "login.login" },
  {
    selector: '#login-form label[for="login-username"]',
    key: "login.username",
  },
  {
    selector: '#login-form label[for="login-password"]',
    key: "login.password",
  },
  { selector: '#login-form button[type="submit"]', key: "login.loginBtn" },
  { selector: "#create-account-link", key: "login.createAccount" },
  { selector: "#register-container h2", key: "login.create" },
  {
    selector: '#register-form label[for="register-username"]',
    key: "login.username",
  },
  {
    selector: '#register-form label[for="register-email"]',
    key: "login.email",
  },
  {
    selector: '#register-form label[for="register-password"]',
    key: "login.password",
  },
  {
    selector: '#register-form label[for="register-confirm-password"]',
    key: "login.confirmPassword",
  },
  {
    selector: '#register-form button[type="submit"]',
    key: "login.registerBtn",
  },
  { selector: "#back-to-login-link", key: "login.showLogin" },

  // User Profile Section
  { selector: "#user-profile-container h2", key: "login.welcome" },
  { selector: ".member-since", key: "login.memberSince" },
  { selector: "#back-btn", key: "login.editAccount" },

  // Edit Account Section
  { selector: "#edit-account-container h2", key: "login.editAccountTitle" },
  {
    selector: '#edit-account-form label[for="edit-email"]',
    key: "login.email",
  },
  { selector: ".password-section h3", key: "login.changePassword" },
  {
    selector: '#edit-account-form label[for="current-password"]',
    key: "login.currentPassword",
  },
  {
    selector: '#edit-account-form label[for="edit-password"]',
    key: "login.newPassword",
  },
  {
    selector: '#edit-account-form label[for="edit-confirm-password"]',
    key: "login.confirmNewPassword",
  },
  { selector: "#edit-account-form .save-button", key: "login.saveChanges" },

  // User Dropdown Menu
  { selector: "#your-account-btn", key: "login.yourAccount" },
  { selector: "#header-logout-btn", key: "login.logout" },

  // Projects Section
  {
    selector: '[data-translate="title"]',
    key: "projects.title",
  },
  {
    selector: '[data-translate="description"]',
    key: "projects.description",
  },
  {
    selector: '[data-translate="filters"]',
    key: "projects.filters",
  },
  {
    selector: '[data-translate="category"]',
    key: "projects.category",
  },
  {
    selector: '[data-translate="allCategories"]',
    key: "projects.allCategories",
  },
  {
    selector: '[data-translate="environment"]',
    key: "projects.environment",
  },
  {
    selector: '[data-translate="education"]',
    key: "projects.education",
  },
  {
    selector: '[data-translate="healthcare"]',
    key: "projects.healthcare",
  },
  {
    selector: '[data-translate="infrastructure"]',
    key: "projects.infrastructure",
  },
  {
    selector: '[data-translate="cultural"]',
    key: "projects.cultural",
  },
  {
    selector: '[data-translate="status"]',
    key: "projects.status",
  },
  {
    selector: '[data-translate="ongoing"]',
    key: "projects.ongoing",
  },
  {
    selector: '[data-translate="completed"]',
    key: "projects.completed",
  },
  {
    selector: '[data-translate="upcoming"]',
    key: "projects.upcoming",
  },
  {
    selector: '[data-translate="dateRange"]',
    key: "projects.dateRange",
  },
  {
    selector: '[data-translate="from"]',
    key: "projects.from",
  },
  {
    selector: '[data-translate="to"]',
    key: "projects.to",
  },
  {
    selector: '[data-translate="applyFilters"]',
    key: "projects.applyFilters",
  },

  // Home
  { selector: ".main-section .div-content h1", key: "home.title", html: true },
  { selector: ".main-section .div-content p", key: "home.desc" },
  { selector: ".cta-group .cta-button", key: "home.join" },
  { selector: ".cta-group .cta-secondary", key: "home.learn" },

  // Mission & Vision
  { selector: "#missionvision-connect .section-title", key: "mission.section" },
  {
    selector: "#missionvision-connect .card:nth-child(1) h3",
    key: "mission.ourMission",
  },
  {
    selector: "#missionvision-connect .card:nth-child(1) p:nth-of-type(1)",
    key: "mission.missionP1",
  },
  {
    selector: "#missionvision-connect .card:nth-child(1) p:nth-of-type(2)",
    key: "mission.missionP2",
  },
  {
    selector: "#missionvision-connect .card:nth-child(2) h3",
    key: "mission.ourVision",
  },
  {
    selector: "#missionvision-connect .card:nth-child(2) p:nth-of-type(1)",
    key: "mission.visionP1",
  },
  {
    selector: "#missionvision-connect .card:nth-child(2) p:nth-of-type(2)",
    key: "mission.visionP2",
  },

  // Supporters
  { selector: "#supporter-color", key: "supporters.heading" },
  { selector: "#supporters-background p", key: "supporters.desc" },

  // Gallery
  { selector: ".gallery-header__title", key: "gallery.title" },
  { selector: ".gallery-header__subtitle", key: "gallery.subtitle" },
  { selector: '.gallery-tabs__button[data-target="all"]', key: "gallery.all" },
  {
    selector: '.gallery-tabs__button[data-target="projects"]',
    key: "gallery.projects",
  },
  {
    selector: '.gallery-tabs__button[data-target="events"]',
    key: "gallery.events",
  },
  {
    selector: '.gallery-tabs__button[data-target="volunteers"]',
    key: "gallery.volunteers",
  },
  { selector: "#loadMoreBtn", key: "gallery.loadMore" },

  // FAQ
  { selector: ".faq-title", key: "faq.title" },
  {
    selector: ".faq-section .faq-item:nth-child(1) .faq-question span",
    key: "faq.q1",
  },
  {
    selector: ".faq-section .faq-item:nth-child(1) .faq-answer p",
    key: "faq.a1",
  },
  {
    selector: ".faq-section .faq-item:nth-child(2) .faq-question span",
    key: "faq.q2",
  },
  {
    selector: ".faq-section .faq-item:nth-child(2) .faq-answer p",
    key: "faq.a2",
  },
  {
    selector: ".faq-section .faq-item:nth-child(3) .faq-question span",
    key: "faq.q3",
  },
  {
    selector: ".faq-section .faq-item:nth-child(3) .faq-answer p",
    key: "faq.a3",
  },

  // Contact
  { selector: ".contact-section h2", key: "contact.title" },
  {
    selector: '.contact-container input[name="name"]',
    key: "contact.name",
    attr: "placeholder",
  },
  {
    selector: '.contact-container input[name="phone"]',
    key: "contact.phone",
    attr: "placeholder",
  },
  {
    selector: '.contact-container input[name="email"]',
    key: "contact.email",
    attr: "placeholder",
  },
  {
    selector: '.contact-container input[name="subject"]',
    key: "contact.subject",
    attr: "placeholder",
  },
  {
    selector: '.contact-container textarea[name="message"]',
    key: "contact.message",
    attr: "placeholder",
  },
  { selector: '.contact-container button[type="submit"]', key: "contact.send" },

  // Footer
  { selector: ".footer-description", key: "footer.desc" },
  { selector: ".footer-title", key: "footer.quickLinks" },
  { selector: ".footer-link-list li:nth-child(1) a", key: "footer.home" },
  { selector: ".footer-link-list li:nth-child(2) a", key: "footer.mission" },
  { selector: ".footer-link-list li:nth-child(3) a", key: "footer.projects" },
  { selector: ".footer-link-list li:nth-child(4) a", key: "footer.gallery" },
  { selector: ".footer-link-list li:nth-child(5) a", key: "footer.volunteer" },
  { selector: ".footer-link-list li:nth-child(6) a", key: "footer.donate" },
  { selector: ".contact-info .footer-title", key: "footer.contact" },
  { selector: ".contact-link", key: "footer.location" },
  {
    selector: ".contact-item:last-child .contact-text",
    key: "footer.workingHours",
  },
  { selector: ".footer-journey .footer-title", key: "footer.ourJourney" },
  { selector: ".footer-bottom", key: "footer.copyright" },
];

function getValueByKey(obj, key) {
  return key.split(".").reduce((o, i) => (o ? o[i] : undefined), obj);
}

// Make getValueByKey globally available
window.getValueByKey = getValueByKey;

function applyTranslations(lang) {
  console.log(`Applying translations for language: ${lang}`);

  // Update current language globally
  window.currentLanguage = lang;

  // Apply translations to elements
  translationMap.forEach(({ selector, key, attr, html }) => {
    const value = getValueByKey(mainTranslations[lang], key);
    if (typeof value === "undefined") {
      console.log(`Translation key not found: ${key}`);
      return;
    }

    const el = document.querySelector(selector);
    if (!el) {
      console.log(`Element not found for selector: ${selector}`);
      return;
    }

    console.log(`Translating ${selector} with key ${key} to: ${value}`);

    if (attr) {
      el.setAttribute(attr, value);
    } else if (html) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Special handling for login translations
  applyLoginTranslations(lang);

  // Special handling for FAQ translations
  applyFAQTranslations(lang);

  // Special handling for success messages
  applySuccessMessageTranslations(lang);

  // Restore .timeline-year color after translation
  document.querySelectorAll(".journey-timeline.simple li").forEach((li) => {
    const yearMatch = li.innerHTML.match(/^(\d{4})/);
    if (yearMatch) {
      li.innerHTML = li.innerHTML.replace(
        /^(\d{4})/,
        '<span class="timeline-year">$1</span>'
      );
    }
  });

<<<<<<< Updated upstream
=======
  // Update login button immediately after translation
  if (typeof window.updateLoginButton === "function") {
    window.updateLoginButton();
  }

  // Apply journey translation
  applyJourneyTranslation(lang);

>>>>>>> Stashed changes
  console.log(`Translation completed for language: ${lang}`);
}

// Special function to handle login translations
function applyLoginTranslations(lang) {
  console.log(`Applying login translations for language: ${lang}`);

  // Login container translations
  const loginContainer = document.querySelector("#login-container");
  if (loginContainer) {
    const loginTitle = loginContainer.querySelector("h2");
    if (loginTitle) {
      loginTitle.textContent = mainTranslations[lang].login.login;
    }

    const usernameLabel = loginContainer.querySelector(
      'label[for="login-username"]'
    );
    if (usernameLabel) {
      usernameLabel.textContent = mainTranslations[lang].login.username;
    }

    const passwordLabel = loginContainer.querySelector(
      'label[for="login-password"]'
    );
    if (passwordLabel) {
      passwordLabel.textContent = mainTranslations[lang].login.password;
    }

    const loginButton = loginContainer.querySelector('button[type="submit"]');
    if (loginButton) {
      loginButton.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${mainTranslations[lang].login.loginBtn}`;
    }

    const createAccountLink = loginContainer.querySelector(
      "#create-account-link"
    );
    if (createAccountLink) {
      createAccountLink.innerHTML = `<i class="fas fa-user-plus"></i> ${mainTranslations[lang].login.createAccount}`;
    }
<<<<<<< Updated upstream
=======
    const forgotPasswordLink = loginContainer.querySelector(
      "#forgot-password-link"
    );
    if (forgotPasswordLink) {
      forgotPasswordLink.innerHTML = `<i class="fas fa-unlock-alt"></i> ${mainTranslations[lang].login.forgotPassword}`;
    }
>>>>>>> Stashed changes
  }

  // Register container translations
  const registerContainer = document.querySelector("#register-container");
  if (registerContainer) {
    const registerTitle = registerContainer.querySelector("h2");
    if (registerTitle) {
      registerTitle.textContent = mainTranslations[lang].login.create;
    }

    const regUsernameLabel = registerContainer.querySelector(
      'label[for="register-username"]'
    );
    if (regUsernameLabel) {
      regUsernameLabel.textContent = mainTranslations[lang].login.username;
    }

    const emailLabel = registerContainer.querySelector(
      'label[for="register-email"]'
    );
    if (emailLabel) {
      emailLabel.textContent = mainTranslations[lang].login.email;
    }

    const regPasswordLabel = registerContainer.querySelector(
      'label[for="register-password"]'
    );
    if (regPasswordLabel) {
      regPasswordLabel.textContent = mainTranslations[lang].login.password;
    }

    const confirmPasswordLabel = registerContainer.querySelector(
      'label[for="register-confirm-password"]'
    );
    if (confirmPasswordLabel) {
      confirmPasswordLabel.textContent =
        mainTranslations[lang].login.confirmPassword;
    }

    const registerButton = registerContainer.querySelector(
      'button[type="submit"]'
    );
    if (registerButton) {
      registerButton.innerHTML = `<i class="fas fa-user-plus"></i> ${mainTranslations[lang].login.registerBtn}`;
    }

    const backToLoginLink = registerContainer.querySelector(
      "#back-to-login-link"
    );
    if (backToLoginLink) {
      backToLoginLink.innerHTML = `<i class="fas fa-sign-in-alt"></i> ${mainTranslations[lang].login.showLogin}`;
    }
  }

  // User Profile Section
  const userProfileContainer = document.querySelector(
    "#user-profile-container"
  );
  if (userProfileContainer) {
    const welcomeText = userProfileContainer.querySelector("h2");
    if (welcomeText) {
      welcomeText.textContent = mainTranslations[lang].login.welcome;
    }
    const memberSinceText = userProfileContainer.querySelector(".member-since");
    if (memberSinceText) {
      const yearSpan = memberSinceText.querySelector("span");
      const year = yearSpan ? yearSpan.textContent : "2024";
      memberSinceText.innerHTML = `${mainTranslations[lang].login.memberSince} <span id="profile-date">${year}</span>`;
    }
    const editAccountBtn = userProfileContainer.querySelector("#back-btn");
    if (editAccountBtn) {
      editAccountBtn.innerHTML = `<i class="fas fa-edit"></i> ${mainTranslations[lang].login.editAccount}`;
    }
  }

  // Edit Account Section
  const editAccountContainer = document.querySelector(
    "#edit-account-container"
  );
  if (editAccountContainer) {
    const editAccountTitle = editAccountContainer.querySelector("h2");
    if (editAccountTitle) {
      editAccountTitle.textContent =
        mainTranslations[lang].login.editAccountTitle;
    }
    const emailLabel = editAccountContainer.querySelector(
      'label[for="edit-email"]'
    );
    if (emailLabel) {
      emailLabel.textContent = mainTranslations[lang].login.email;
    }
    const changePasswordText = editAccountContainer.querySelector(
      ".password-section h3"
    );
    if (changePasswordText) {
      changePasswordText.textContent =
        mainTranslations[lang].login.changePassword;
    }
    const currentPasswordLabel = editAccountContainer.querySelector(
      'label[for="current-password"]'
    );
    if (currentPasswordLabel) {
      currentPasswordLabel.textContent =
        mainTranslations[lang].login.currentPassword;
    }
  }
}

// Special function to handle FAQ translations
function applyFAQTranslations(lang) {
  console.log(`Applying FAQ translations for language: ${lang}`);

  const faqTitle = document.querySelector(".faq-title");
  if (faqTitle) {
    faqTitle.textContent = mainTranslations[lang].faq.title;
  }

  const faqItems = document.querySelectorAll(".faq-section .faq-item");
  faqItems.forEach((item, index) => {
    const questionSpan = item.querySelector(".faq-question span");
    const answerP = item.querySelector(".faq-answer p");

    if (questionSpan && answerP) {
      const questionKey = `faq.q${index + 1}`;
      const answerKey = `faq.a${index + 1}`;

      const questionValue = getValueByKey(mainTranslations[lang], questionKey);
      const answerValue = getValueByKey(mainTranslations[lang], answerKey);

      if (questionValue) {
        questionSpan.textContent = questionValue;
      }
      if (answerValue) {
        answerP.textContent = answerValue;
      }
    }
  });

  console.log("FAQ translations completed");
}

// Special function to handle success message translations
function applySuccessMessageTranslations(lang) {
  console.log(`Applying success message translations for language: ${lang}`);

  // Login success message
  const loginSuccessMessage = document.querySelector(".login-success-message");
  if (loginSuccessMessage) {
    loginSuccessMessage.textContent = mainTranslations[lang].login.loginSuccess;
  }

  // Logout success message
  const logoutSuccessMessage = document.querySelector(
    ".logout-success-message"
  );
  if (logoutSuccessMessage) {
    logoutSuccessMessage.textContent =
      mainTranslations[lang].login.logoutSuccess;
  }

  // Registration success message
  const registrationSuccessMessage = document.querySelector(
    ".registration-success-message"
  );
  if (registrationSuccessMessage) {
    registrationSuccessMessage.textContent =
      mainTranslations[lang].login.registrationSuccess;
  }

  // Password changed message
  const passwordChangedMessage = document.querySelector(
    ".password-changed-message"
  );
  if (passwordChangedMessage) {
    passwordChangedMessage.textContent =
      mainTranslations[lang].login.passwordChanged;
  }

  // Account updated message
  const accountUpdatedMessage = document.querySelector(
    ".account-updated-message"
  );
  if (accountUpdatedMessage) {
    accountUpdatedMessage.textContent =
      mainTranslations[lang].login.accountUpdated;
  }

  console.log("Success message translations completed");
}

// Global function to show translated success messages
function showTranslatedMessage(messageType, lang = null) {
  if (!lang) {
    lang = localStorage.getItem("preferredLanguage") || "en";
  }

  const messages = {
    loginSuccess: mainTranslations[lang].login.loginSuccess,
    logoutSuccess: mainTranslations[lang].login.logoutSuccess,
    registrationSuccess: mainTranslations[lang].login.registrationSuccess,
    passwordChanged: mainTranslations[lang].login.passwordChanged,
    accountUpdated: mainTranslations[lang].login.accountUpdated,
  };

  const message = messages[messageType];
  if (message) {
    // Create or update message element
    let messageElement = document.querySelector(".translated-message");
    if (!messageElement) {
      messageElement = document.createElement("div");
      messageElement.className = "translated-message";
      messageElement.style.cssText = `
<<<<<<< Updated upstream
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
=======
        position: relative;
        margin: 12px auto 0 auto;
        background: #4CAF50;
        color: white;
        padding: 15px 32px;
        border-radius: 8px;
>>>>>>> Stashed changes
        z-index: 10000;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
<<<<<<< Updated upstream
      `;
      document.body.appendChild(messageElement);
=======
        text-align: center;
        max-width: 400px;
        font-size: 18px;
        top: 0;
      `;
      // Insert after the header login button (desktop or mobile)
      let loginBtn = document.querySelector(
        ".header-language-wrapper-desktop .user-profile"
      );
      if (!loginBtn || getComputedStyle(loginBtn).display === "none") {
        // If desktop not visible, try mobile
        loginBtn = document.querySelector(
          ".header-language-wrapper-mobile .user-profile"
        );
      }
      if (loginBtn && loginBtn.parentNode) {
        loginBtn.parentNode.insertBefore(messageElement, loginBtn.nextSibling);
      } else {
        // fallback: after header
        const header = document.querySelector("header.header-main");
        if (header && header.parentNode) {
          header.parentNode.insertBefore(messageElement, header.nextSibling);
        } else {
          document.body.insertBefore(messageElement, document.body.firstChild);
        }
      }
>>>>>>> Stashed changes
    }

    messageElement.textContent = message;
    messageElement.style.display = "block";

    // Hide message after 3 seconds
    setTimeout(() => {
      messageElement.style.display = "none";
    }, 3000);
  }
}

// Function to show language change message
function showLanguageChangeMessage(lang) {
  const messages = {
    en: "Language changed to English",
    mk: "Јазикот е променет на македонски",
  };

  const message = messages[lang];
  if (message) {
    // Remove existing message if any
    const existingMessage = document.querySelector(".language-change-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create new message element
    const messageElement = document.createElement("div");
    messageElement.className = "language-change-message";
    messageElement.style.cssText = `
      position: fixed;
      top: 61px;
      right: 15px;
      background: #2196F3;
      color: white;
      padding: 12px 20px;
      border-radius: 5px;
      z-index: 10000;
      font-weight: bold;
      font-size: 14px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: all 0.3s ease;
      transform: translateX(100%);
      opacity: 0;
    `;

    messageElement.textContent = message;
    document.body.appendChild(messageElement);

    // Animate in
    setTimeout(() => {
      messageElement.style.transform = "translateX(0)";
      messageElement.style.opacity = "1";
    }, 100);

    // Hide message after 5 seconds
    setTimeout(() => {
      messageElement.style.transform = "translateX(100%)";
      messageElement.style.opacity = "0";
      setTimeout(() => {
        if (messageElement.parentNode) {
          messageElement.remove();
        }
      }, 300);
    }, 5000);
  }
}

// Function to update flag order based on selected language
function updateFlagOrder(lang) {
  // Desktop flags
  const desktopWrapper = document.querySelector(
    ".header-language-wrapper-desktop"
  );
  if (desktopWrapper) {
    const mkFlag = desktopWrapper.querySelector(
      ".header-language img[data-lang='mk']"
    ).parentElement;
    const enFlag = desktopWrapper.querySelector(
      ".header-language img[data-lang='en']"
    ).parentElement;

    if (mkFlag && enFlag) {
      if (lang === "mk") {
        // Macedonian first
        desktopWrapper.insertBefore(mkFlag, enFlag);
      } else {
        // English first
        desktopWrapper.insertBefore(enFlag, mkFlag);
      }
    }
  }

  // Mobile flags
  const mobileWrapper = document.querySelector(
    ".header-language-wrapper-mobile"
  );
  if (mobileWrapper) {
    const mkFlag = mobileWrapper.querySelector(
      ".header-language img[data-lang='mk']"
    ).parentElement;
    const enFlag = mobileWrapper.querySelector(
      ".header-language img[data-lang='en']"
    ).parentElement;

    if (mkFlag && enFlag) {
      if (lang === "mk") {
        // Macedonian first
        mobileWrapper.insertBefore(mkFlag, enFlag);
      } else {
        // English first
        mobileWrapper.insertBefore(enFlag, mkFlag);
      }
    }
  }
}

// Function to update flag visual state
function updateFlagVisualState(lang) {
  // Remove active class from all flags and set them as clickable
  document
    .querySelectorAll(".header-language img[data-lang]")
    .forEach((flag) => {
      flag.classList.remove("active-flag");
      flag.style.opacity = "1";
      flag.style.cursor = "pointer";
    });

  // Add active class to current language flag and make it non-clickable
  const activeFlags = document.querySelectorAll(
    `.header-language img[data-lang='${lang}']`
  );
  activeFlags.forEach((flag) => {
    flag.classList.add("active-flag");
    flag.style.opacity = "0.8";
    flag.style.cursor = "default";
  });
}

// Make the function globally available
window.showTranslatedMessage = showTranslatedMessage;

// Flag click event listeners
function setupLanguageSwitch() {
  console.log("Setting up language switch...");

  // Desktop flags - use data-lang attribute to identify flags
  const mkFlagDesktop = document.querySelector(
    ".header-language-wrapper-desktop .header-language img[data-lang='mk']"
  );
  const enFlagDesktop = document.querySelector(
    ".header-language-wrapper-desktop .header-language img[data-lang='en']"
  );

  // Mobile flags - use data-lang attribute to identify flags
  const mkFlagMobile = document.querySelector(
    ".header-language-wrapper-mobile .header-language img[data-lang='mk']"
  );
  const enFlagMobile = document.querySelector(
    ".header-language-wrapper-mobile .header-language img[data-lang='en']"
  );

  console.log("Found flag elements:", {
    mkFlagDesktop: !!mkFlagDesktop,
    enFlagDesktop: !!enFlagDesktop,
    mkFlagMobile: !!mkFlagMobile,
    enFlagMobile: !!enFlagMobile,
  });

  // Add click event listeners for desktop flags
  if (mkFlagDesktop) {
    console.log("Adding click listener to MK desktop flag");
    mkFlagDesktop.addEventListener("click", () => {
<<<<<<< Updated upstream
      // Don't do anything if Macedonian is already selected
=======
>>>>>>> Stashed changes
      if (window.currentLanguage === "mk") {
        return;
      }
      console.log("MK desktop flag clicked");
<<<<<<< Updated upstream
      applyTranslations("mk");
      // Store language preference
      localStorage.setItem("preferredLanguage", "mk");
=======
      localStorage.setItem("preferredLanguage", "mk");
      applyTranslations("mk");
      window.dispatchEvent(new Event("languageChanged"));
>>>>>>> Stashed changes
      // Show language change message
      showLanguageChangeMessage("mk");
      // Update flag order
      updateFlagOrder("mk");
      // Update flag visual state
      updateFlagVisualState("mk");
    });
  }

  if (enFlagDesktop) {
    console.log("Adding click listener to EN desktop flag");
    enFlagDesktop.addEventListener("click", () => {
<<<<<<< Updated upstream
      // Don't do anything if English is already selected
=======
>>>>>>> Stashed changes
      if (window.currentLanguage === "en") {
        return;
      }
      console.log("EN desktop flag clicked");
<<<<<<< Updated upstream
      applyTranslations("en");
      // Store language preference
      localStorage.setItem("preferredLanguage", "en");
=======
      localStorage.setItem("preferredLanguage", "en");
      applyTranslations("en");
      window.dispatchEvent(new Event("languageChanged"));
>>>>>>> Stashed changes
      // Show language change message
      showLanguageChangeMessage("en");
      // Update flag order
      updateFlagOrder("en");
      // Update flag visual state
      updateFlagVisualState("en");
    });
  }

  // Add click event listeners for mobile flags
  if (mkFlagMobile) {
    console.log("Adding click listener to MK mobile flag");
    mkFlagMobile.addEventListener("click", () => {
<<<<<<< Updated upstream
      // Don't do anything if Macedonian is already selected
=======
>>>>>>> Stashed changes
      if (window.currentLanguage === "mk") {
        return;
      }
      console.log("MK mobile flag clicked");
<<<<<<< Updated upstream
      applyTranslations("mk");
      // Store language preference
      localStorage.setItem("preferredLanguage", "mk");
=======
      localStorage.setItem("preferredLanguage", "mk");
      applyTranslations("mk");
      window.dispatchEvent(new Event("languageChanged"));
>>>>>>> Stashed changes
      // Show language change message
      showLanguageChangeMessage("mk");
      // Update flag order
      updateFlagOrder("mk");
      // Update flag visual state
      updateFlagVisualState("mk");
    });
  }

  if (enFlagMobile) {
    console.log("Adding click listener to EN mobile flag");
    enFlagMobile.addEventListener("click", () => {
<<<<<<< Updated upstream
      // Don't do anything if English is already selected
=======
>>>>>>> Stashed changes
      if (window.currentLanguage === "en") {
        return;
      }
      console.log("EN mobile flag clicked");
<<<<<<< Updated upstream
      applyTranslations("en");
      // Store language preference
      localStorage.setItem("preferredLanguage", "en");
=======
      localStorage.setItem("preferredLanguage", "en");
      applyTranslations("en");
      window.dispatchEvent(new Event("languageChanged"));
>>>>>>> Stashed changes
      // Show language change message
      showLanguageChangeMessage("en");
      // Update flag order
      updateFlagOrder("en");
      // Update flag visual state
      updateFlagVisualState("en");
    });
  }

  console.log("Language switch setup completed");
}

<<<<<<< Updated upstream
=======
function applyJourneyTranslation(lang) {
  const journeyList = document.querySelector(".journey-timeline");
  if (!journeyList) return;
  // Clear existing items
  journeyList.innerHTML = "";
  // Get journey array from translations
  const journeyArr = mainTranslations[lang]?.footer?.journey;
  if (!Array.isArray(journeyArr)) return;
  journeyArr.forEach((item) => {
    // Highlight the year if present at the start
    const yearMatch = item.match(/^(\d{4})/);
    let li = document.createElement("li");
    if (yearMatch) {
      li.innerHTML = item.replace(
        /^(\d{4})/,
        '<span class="timeline-year">$1</span>'
      );
    } else {
      li.textContent = item;
    }
    journeyList.appendChild(li);
  });
}

>>>>>>> Stashed changes
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded - translate.js script loaded");

  // Scroll to top when page loads - multiple methods to ensure it works
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Remove hash from URL and force scroll to top after all scripts
  setTimeout(() => {
    if (window.location.hash) {
      history.replaceState(
        null,
        document.title,
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, 400);

  // Test if header elements are found
  const headerElements = document.querySelectorAll(".header-nav-item a");
  console.log("Found header elements:", headerElements.length);
  headerElements.forEach((el, index) => {
    console.log(`Header element ${index + 1}:`, el.textContent);
  });

  // Test if login elements are found
  const loginContainer = document.querySelector("#login-container");
  const loginForm = document.querySelector("#login-form");
  const registerContainer = document.querySelector("#register-container");
  const userProfileContainer = document.querySelector(
    "#user-profile-container"
  );
  const editAccountContainer = document.querySelector(
    "#edit-account-container"
  );
  const yourAccountBtn = document.querySelector("#your-account-btn");
  const logoutBtn = document.querySelector("#header-logout-btn");

  console.log("Login elements found:", {
    loginContainer: !!loginContainer,
    loginForm: !!loginForm,
    registerContainer: !!registerContainer,
    userProfileContainer: !!userProfileContainer,
    editAccountContainer: !!editAccountContainer,
    yourAccountBtn: !!yourAccountBtn,
    logoutBtn: !!logoutBtn,
  });

  if (loginContainer) {
    const loginLabels = loginContainer.querySelectorAll("label");
    console.log("Login labels found:", loginLabels.length);
    loginLabels.forEach((label, index) => {
      console.log(`Login label ${index + 1}:`, label.textContent);
    });
  }

  if (userProfileContainer) {
    const profileElements = userProfileContainer.querySelectorAll(
      "h2, .member-since, #back-btn"
    );
    console.log("User profile elements found:", profileElements.length);
    profileElements.forEach((el, index) => {
      console.log(`Profile element ${index + 1}:`, el.textContent);
    });
  }

  if (editAccountContainer) {
    const editElements = editAccountContainer.querySelectorAll(
      "h2, h3, label, .save-button"
    );
    console.log("Edit account elements found:", editElements.length);
    editElements.forEach((el, index) => {
      console.log(`Edit element ${index + 1}:`, el.textContent);
    });
  }

  // Test if FAQ elements are found
  const faqSection = document.querySelector(".faq-section");
  const faqItems = document.querySelectorAll(".faq-section .faq-item");
  console.log("FAQ elements found:", {
    faqSection: !!faqSection,
    faqItems: faqItems.length,
  });

  if (faqItems.length > 0) {
    faqItems.forEach((item, index) => {
      const question = item.querySelector(".faq-question span");
      const answer = item.querySelector(".faq-answer p");
      console.log(`FAQ item ${index + 1}:`, {
        question: question ? question.textContent : "Not found",
        answer: answer ? answer.textContent : "Not found",
      });
    });
  }

  setupLanguageSwitch();

  // Check for stored language preference
  const storedLanguage = localStorage.getItem("preferredLanguage");
  console.log("Stored language preference:", storedLanguage);

  if (storedLanguage) {
    console.log(`Applying stored language: ${storedLanguage}`);
    applyTranslations(storedLanguage);
<<<<<<< Updated upstream
=======
    window.dispatchEvent(new Event("languageChanged"));
>>>>>>> Stashed changes
    // Update flag order based on stored language
    updateFlagOrder(storedLanguage);
    // Update flag visual state based on stored language
    updateFlagVisualState(storedLanguage);
  } else {
    // Default to English if no preference is stored
    console.log("No stored language preference, defaulting to English");
    applyTranslations("en");
<<<<<<< Updated upstream
=======
    window.dispatchEvent(new Event("languageChanged"));
>>>>>>> Stashed changes
    // Update flag order for default language
    updateFlagOrder("en");
    // Update flag visual state for default language
    updateFlagVisualState("en");
  }
});
