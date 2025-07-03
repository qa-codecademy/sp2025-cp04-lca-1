// User authentication system
let currentUser = null;

// Load existing users from localStorage
function loadUsers() {
  try {
    const usersData = localStorage.getItem("users");
    return usersData ? JSON.parse(usersData) : [];
  } catch (error) {
    console.error("Error loading users:", error);
    return [];
  }
}

// Save users to localStorage
function saveUsers(users) {
  try {
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  } catch (error) {
    console.error("Error saving users:", error);
    return false;
  }
}

// Simple password hashing (in production, use bcrypt or similar)
function hashPassword(password) {
  return btoa(password); // Base64 encoding for demo purposes
}

// Validate registration data
function validateRegistration(username, email, password, confirmPassword) {
  if (!username || username.length < 3) {
    return {
      valid: false,
      message: getTranslatedMessage("usernameTooShort"),
    };
  }

  // Check for Cyrillic characters in username
  if (/[а-шА-Ш]/.test(username)) {
    return {
      valid: false,
      message: getCyrillicErrorMessage(),
    };
  }

  if (!email || !email.includes("@")) {
    return { valid: false, message: getTranslatedMessage("validEmail") };
  }

  // Check for Cyrillic characters in email
  if (/[а-шА-Ш]/.test(email)) {
    return {
      valid: false,
      message: getTranslatedMessage("emailCyrillic"),
    };
  }

  if (!password || password.length < 6) {
    return {
      valid: false,
      message: getTranslatedMessage("passwordLength"),
    };
  }

  // Check for Cyrillic characters in password
  if (/[а-шА-Ш]/.test(password)) {
    return {
      valid: false,
      message: getTranslatedMessage("passwordCyrillic"),
    };
  }

  if (password !== confirmPassword) {
    return {
      valid: false,
      message: getTranslatedMessage("passwordsDoNotMatch"),
    };
  }

  return { valid: true };
}

// Add default admin account if not present
function ensureAdminAccount() {
  const users = loadUsers();
  let changed = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === "localact" &&
      users[i].email === "localactmbrod@gmail.com"
    ) {
      if (users[i].role !== "Administrator") {
        users[i].role = "Administrator";
        changed = true;
      }
    } else if (users[i].role === "Administrator") {
      users[i].role = "Member";
      changed = true;
    }
  }
  // If the admin account doesn't exist, add it
  const adminExists = users.some(
    (u) => u.username === "localact" && u.email === "localactmbrod@gmail.com"
  );
  if (!adminExists) {
    users.push({
      id: Date.now().toString() + "_admin",
      username: "localact",
      email: "localactmbrod@gmail.com",
      password: hashPassword("qinshift123"),
      role: "Administrator",
      createdAt: new Date().toISOString(),
    });
    changed = true;
  }
  if (changed) saveUsers(users);
}

// Call this on page load
ensureAdminAccount();

// Update currentUser in localStorage if it's the admin account
(function updateCurrentUserRoleIfAdmin() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (
    currentUser &&
    currentUser.username === "localact" &&
    currentUser.email === "localactmbrod@gmail.com" &&
    currentUser.role !== "Administrator"
  ) {
    currentUser.role = "Administrator";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }
})();

// Register new user
function registerUser(username, email, password) {
  const users = loadUsers();
  if (
    users.find((user) => user.username.toLowerCase() === username.toLowerCase())
  ) {
    return { success: false, message: getTranslatedMessage("usernameExists") };
  }
  if (users.find((user) => user.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, message: getTranslatedMessage("emailRegistered") };
  }
  const newUser = {
    id: Date.now().toString(),
    username: username,
    email: email,
    password: hashPassword(password),
    role: "Member", // Always member, only ensureAdminAccount can set admin
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  const saved = saveUsers(users);
  if (saved) {
    return {
      success: true,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        createdAt: newUser.createdAt,
      },
    };
  } else {
    return { success: false, message: getTranslatedMessage("errorSaving") };
  }
}

// Login user
function loginUser(username, password) {
  const users = loadUsers();
  const hashedPassword = hashPassword(password);

  const user = users.find(
    (u) => u.username === username && u.password === hashedPassword
  );

  if (user) {
    currentUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    closeLoginPopup();
    checkLoginStatus();
    if (window.showTranslatedMessage) {
      showMessage(getTranslatedMessage("loginSuccess"), true);
    } else {
      showMessage(getTranslatedMessage("loginSuccess"), true);
    }
  } else {
    showMessage(getTranslatedMessage("invalidCredentials"), false);
  }
}

// Logout user
function logoutUser() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  updateLoginButton();
}

// Update login button text based on login status
function updateLoginButton() {
  const loginButtons = document.querySelectorAll(".user-profile-inner p");
  // Always use preferredLanguage from localStorage, fallback to 'en'
  let lang = (localStorage.getItem("preferredLanguage") || "en").toLowerCase();
  let loginText =
    window.translations &&
    window.translations[lang] &&
    window.translations[lang].header &&
    window.translations[lang].header.loginBtn
      ? window.translations[lang].header.loginBtn
      : lang === "mk"
      ? "Најави се"
      : "Log In";
  // Always get current user from localStorage to avoid stale global variable
  const savedUser = localStorage.getItem("currentUser");
  const user = savedUser ? JSON.parse(savedUser) : null;
  console.log(
    "[updateLoginButton] lang:",
    lang,
    "loginText:",
    loginText,
    "user:",
    user
  );
  loginButtons.forEach((button) => {
    if (user) {
      button.textContent = user.username;
    } else {
      button.textContent = loginText;
    }
  });
}

// Show message to user
function showMessage(message, isSuccess = true) {
  const messageDiv = document.createElement("div");

  // Check if mobile device
  const isMobile = window.innerWidth <= 768;

  messageDiv.style.cssText = `
    position: fixed;
    top: ${isMobile ? "75px" : "61px"};
    right: ${isMobile ? "10px" : "15px"};
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    z-index: 9999;
    background-color: ${isSuccess ? "#28a745" : "#dc3545"};
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: ${isMobile ? "280px" : "300px"};
    word-wrap: break-word;
  `;
  messageDiv.textContent = message;

  document.body.appendChild(messageDiv);

  // Animate in
  setTimeout(() => {
    messageDiv.style.transform = "translateX(0)";
  }, 100);

  // Auto remove after 3 seconds
  setTimeout(() => {
    messageDiv.style.transform = "translateX(100%)";
    setTimeout(() => {
      messageDiv.remove();
    }, 300);
  }, 3000);
}

// DOM elements
const loginBtnDesktop = document.querySelector(
  ".header-language-wrapper-desktop .user-profile"
);
const loginBtnMobile = document.querySelector(
  ".header-login-mobile.user-profile"
);
const loginPopup = document.getElementById("login-popup");
const loginCloseBtn = document.getElementById("login-close-btn");

// Popup functions
function openLoginPopup() {
  console.log("Opening login popup");
  loginPopup.classList.add("active");
  // Always show only login form and hide others
  document.getElementById("login-container").style.display = "block";
  document.getElementById("register-container").style.display = "none";
  document.getElementById("forgot-password-container").style.display = "none";
  const userProfile = document.getElementById("user-profile-container");
  if (userProfile) userProfile.style.display = "none";
  const editAccount = document.getElementById("edit-account-container");
  if (editAccount) editAccount.style.display = "none";
  // Reset all forms and messages
  const loginForm = document.getElementById("login-form");
  if (loginForm) loginForm.reset();
  const registerForm = document.getElementById("register-form");
  if (registerForm) registerForm.reset();
  const forgotForm = document.getElementById("forgot-password-form");
  if (forgotForm) forgotForm.reset();
  const forgotMsg = document.getElementById("forgot-password-message");
  if (forgotMsg) forgotMsg.textContent = "";
}

function closeLoginPopup() {
  console.log("Closing login popup");
  loginPopup.classList.remove("active");
}

// Event listeners for popup
if (loginBtnDesktop) {
  loginBtnDesktop.addEventListener("click", function (e) {
    console.log("Desktop login button clicked");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      openLoginPopup();
    }
    // If user is logged in, dropdown will be handled by setupDropdownHandlers
  });
}
if (loginBtnMobile) {
  loginBtnMobile.addEventListener("click", function (e) {
    console.log("Mobile login button clicked");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      openLoginPopup();
    }
    // If user is logged in, dropdown will be handled by setupDropdownHandlers
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const loginCloseBtn = document.getElementById("login-close-btn");
  if (loginCloseBtn) {
    loginCloseBtn.addEventListener("click", closeLoginPopup);
  }
});

loginPopup.addEventListener("click", (e) => {
  if (e.target === loginPopup) {
    closeLoginPopup();
  }
});

// Form switching
const createAccountLink = document.getElementById("create-account-link");
const backToLoginLink = document.getElementById("back-to-login-link");

createAccountLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Create account link clicked");
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "block";
});

backToLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Back to login link clicked");
  document.getElementById("register-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
});

// Login form submission
document.addEventListener("DOMContentLoaded", function () {
  // Register form
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = this.username.value.trim();
      const email = this.email.value.trim();
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;
      const validation = validateRegistration(
        username,
        email,
        password,
        confirmPassword
      );
      if (!validation.valid) {
        showMessage(validation.message, false);
        return;
      }
      const result = registerUser(username, email, password);
      if (result.success) {
        localStorage.setItem("currentUser", JSON.stringify(result.user));
        closeLoginPopup();
        checkLoginStatus();
        showMessage(getTranslatedMessage("registrationSuccess"), true);
      } else {
        showMessage(result.message, false);
      }
    });
  }

  // Login form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = this.username.value.trim();
      const password = this.password.value;
      if (!username || !password) {
        showMessage(getTranslatedMessage("fillAllFields"), false);
        return;
      }
      if (/[а-шА-Ш]/.test(username) || /[а-шА-Ш]/.test(password)) {
        showMessage(getCyrillicErrorMessage(), false);
        return;
      }
      const users = loadUsers();
      const hashedPassword = hashPassword(password);
      const user = users.find(
        (u) =>
          u.username.toLowerCase() === username.toLowerCase() &&
          u.password === hashedPassword
      );
      if (user) {
        currentUser = {
          id: user.id,
          username: user.username,
          email: user.email,
          createdAt: user.createdAt,
        };
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        closeLoginPopup();
        checkLoginStatus();
        showMessage(getTranslatedMessage("loginSuccess"), true);
      } else {
        showMessage(getTranslatedMessage("invalidCredentials"), false);
      }
    });
  }

  // Forgot Password: Show form
  const forgotPasswordLink = document.getElementById("forgot-password-link");
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("login-container").style.display = "none";
      document.getElementById("register-container").style.display = "none";
      document.getElementById("forgot-password-container").style.display =
        "block";
      document.getElementById("forgot-password-form").reset();
      document.getElementById("forgot-password-message").textContent = "";
      applyForgotPasswordTranslations(); // update translations when showing
    });
  }
  // Forgot Password: Back to login
  const backToLoginForgot = document.getElementById(
    "back-to-login-link-forgot"
  );
  if (backToLoginForgot) {
    backToLoginForgot.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("forgot-password-container").style.display =
        "none";
      document.getElementById("login-container").style.display = "block";
    });
  }
  // Forgot Password: Form submit
  const forgotPasswordForm = document.getElementById("forgot-password-form");
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.email.value.trim();
      const messageDiv = document.getElementById("forgot-password-message");
      messageDiv.textContent = "";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        messageDiv.textContent =
          getTranslatedMessage("validEmail") ||
          "Please enter a valid email address.";
        messageDiv.style.color = "#dc3545";
        return;
      }
      const users = loadUsers();
      const user = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (!user) {
        messageDiv.textContent = getTranslatedMessage("userNotFound");
        messageDiv.style.color = "#dc3545";
        return;
      }
      localStorage.setItem("resetPasswordEmail", email);
      messageDiv.textContent = getTranslatedMessage("resetLinkSent");
      messageDiv.style.color = "#28a745";
    });
  }

  // Reset Password: Form submit
  const resetPasswordForm = document.getElementById("reset-password-form");
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.email.value.trim();
      const password = this.password.value;
      const confirmPassword = this.confirmPassword.value;
      const messageDiv = document.getElementById("reset-password-message");
      messageDiv.textContent = "";

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        messageDiv.textContent =
          getTranslatedMessage("validEmail") ||
          "Please enter a valid email address.";
        messageDiv.style.color = "#dc3545";
        return;
      }
      // Validate password
      if (password.length < 6) {
        messageDiv.textContent =
          getTranslatedMessage("passwordLength") ||
          "Password must be at least 6 characters long.";
        messageDiv.style.color = "#dc3545";
        return;
      }
      if (password !== confirmPassword) {
        messageDiv.textContent =
          getTranslatedMessage("passwordsDoNotMatch") ||
          "Passwords do not match.";
        messageDiv.style.color = "#dc3545";
        return;
      }
      // Check if email matches the one from forgot password
      const resetEmail = localStorage.getItem("resetPasswordEmail");
      if (!resetEmail || resetEmail.toLowerCase() !== email.toLowerCase()) {
        messageDiv.textContent = getTranslatedMessage("invalidResetLink");
        messageDiv.style.color = "#dc3545";
        return;
      }
      // Update password in localStorage
      const users = loadUsers();
      const userIndex = users.findIndex(
        (u) => u.email.toLowerCase() === email.toLowerCase()
      );
      if (userIndex === -1) {
        messageDiv.textContent =
          getTranslatedMessage("userNotFound") ||
          "No user found with that email.";
        messageDiv.style.color = "#dc3545";
        return;
      }
      users[userIndex].password = hashPassword(password); // Use hashPassword
      saveUsers(users);
      localStorage.removeItem("resetPasswordEmail");
      messageDiv.textContent = getTranslatedMessage("accountUpdated");
      messageDiv.style.color = "#28a745";
      setTimeout(() => {
        // Optionally close popup or switch to login form
        if (typeof closeLoginPopup === "function") closeLoginPopup();
        // Optionally show login form again
        if (typeof showLoginForm === "function") showLoginForm();
      }, 1500);
    });
  }

  // Add other event listeners (edit account, etc.) here as needed, always inside this DOMContentLoaded block.
});

// Initialize on page load
// Instead of running checkLoginStatus() immediately, wait for languageChanged event

document.addEventListener("DOMContentLoaded", () => {
  // Check if user is already logged in
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
  // Wait for languageChanged event before updating UI
  function onLangReady() {
    checkLoginStatus();
    setupDropdownHandlers();
    window.removeEventListener("languageChanged", onLangReady);
  }
  window.addEventListener("languageChanged", onLangReady);
});

function setupDropdownHandlers() {
  // Desktop elements
  const userProfileDesktop = document.querySelector(
    ".header-language-wrapper-desktop .user-profile"
  );
  const userDropdownDesktop = document.getElementById("user-dropdown");
  const yourAccountBtnDesktop = document.getElementById("your-account-btn");
  const headerLogoutBtnDesktop = document.getElementById("header-logout-btn");

  // Mobile elements
  const userProfileMobile = document.querySelector(
    ".header-login-mobile.user-profile"
  );
  const userDropdownMobile = document.getElementById("user-dropdown-mobile");
  const yourAccountBtnMobile = document.getElementById(
    "your-account-btn-mobile"
  );
  const headerLogoutBtnMobile = document.getElementById(
    "header-logout-btn-mobile"
  );

  // Helper to check if mobile
  function isMobile() {
    return window.innerWidth <= 768;
  }

  // --- DESKTOP ---
  if (userProfileDesktop && userDropdownDesktop) {
    userProfileDesktop.addEventListener("click", function (e) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser && !isMobile()) {
        e.preventDefault();
        e.stopPropagation();
        userDropdownDesktop.style.display =
          userDropdownDesktop.style.display === "none" ? "block" : "none";
      }
    });
    // Close dropdown when clicking outside (desktop)
    document.addEventListener("click", function (e) {
      if (!userProfileDesktop.contains(e.target)) {
        userDropdownDesktop.style.display = "none";
      }
    });
    // Your Account (desktop)
    if (yourAccountBtnDesktop) {
      yourAccountBtnDesktop.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        userDropdownDesktop.style.display = "none";
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
          document.getElementById("login-container").style.display = "none";
          document.getElementById("register-container").style.display = "none";
          document.getElementById("forgot-password-container").style.display =
            "none";
          document.getElementById("edit-account-container").style.display =
            "none";
          document.getElementById("user-profile-container").style.display =
            "block";
          showUserProfile(currentUser);
          loginPopup.classList.add("active");
        } else {
          openLoginPopup();
        }
      });
    }
    // Logout (desktop)
    if (headerLogoutBtnDesktop) {
      headerLogoutBtnDesktop.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        userDropdownDesktop.style.display = "none";
        logout();
      });
    }
  }

  // --- MOBILE ---
  if (userProfileMobile && userDropdownMobile) {
    userProfileMobile.addEventListener("click", function (e) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser && isMobile()) {
        e.preventDefault();
        e.stopPropagation();
        userDropdownMobile.style.display =
          userDropdownMobile.style.display === "none" ? "block" : "none";
      }
    });
    // Close dropdown when clicking outside (mobile)
    document.addEventListener("click", function (e) {
      if (!userProfileMobile.contains(e.target)) {
        userDropdownMobile.style.display = "none";
      }
    });
    // Your Account (mobile)
    if (yourAccountBtnMobile) {
      yourAccountBtnMobile.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        userDropdownMobile.style.display = "none";
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
          document.getElementById("login-container").style.display = "none";
          document.getElementById("register-container").style.display = "none";
          document.getElementById("forgot-password-container").style.display =
            "none";
          document.getElementById("edit-account-container").style.display =
            "none";
          document.getElementById("user-profile-container").style.display =
            "block";
          showUserProfile(currentUser);
          loginPopup.classList.add("active");
        } else {
          openLoginPopup();
        }
      });
    }
    // Logout (mobile)
    if (headerLogoutBtnMobile) {
      headerLogoutBtnMobile.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        userDropdownMobile.style.display = "none";
        logout();
      });
    }
  }
}

function checkLoginStatus() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const loginButtons = document.querySelectorAll(".user-profile-inner p");
  const userDropdown = document.getElementById("user-dropdown");

  if (currentUser) {
    // User is logged in - show profile
    showUserProfile(currentUser);
    loginButtons.forEach((btn) => {
      btn.textContent = currentUser.username;
    });
    // Show dropdown functionality
    userDropdown.style.display = "none"; // Hidden by default, shows on click
  } else {
    // User is not logged in - show login form
    showLoginForm();
    // Use translation for login button
    let lang = (
      localStorage.getItem("preferredLanguage") || "en"
    ).toLowerCase();
    let loginText =
      window.translations &&
      window.translations[lang] &&
      window.translations[lang].header &&
      window.translations[lang].header.loginBtn
        ? window.translations[lang].header.loginBtn
        : lang === "mk"
        ? "Најави се"
        : "Log In";
    console.log("[checkLoginStatus] lang:", lang, "loginText:", loginText);
    loginButtons.forEach((btn) => {
      btn.textContent = loginText;
    });
    // Hide dropdown
    userDropdown.style.display = "none";
  }
}

function showUserProfile(user) {
  // Hide login/register forms
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "none";
  document.getElementById("edit-account-container").style.display = "none";

  // Show user profile
  document.getElementById("user-profile-container").style.display = "block";

  // Populate user details
  document.getElementById("profile-username").textContent = user.username;
  const emailElem = document.getElementById("profile-email");
  emailElem.textContent = "Email: " + user.email;
  // Add a horizontal line after the email if not already present
  let hrElem = document.getElementById("profile-email-hr");
  if (!hrElem) {
    hrElem = document.createElement("hr");
    hrElem.id = "profile-email-hr";
    hrElem.style.margin = "8px 0";
    hrElem.style.border = "none";
    hrElem.style.height = "1px";
    hrElem.style.background = "#e0e0e0";
    emailElem.parentNode.insertBefore(hrElem, emailElem.nextSibling);
  }
  document.getElementById("profile-date").textContent = new Date(
    user.createdAt
  ).toLocaleDateString();
  // Show role (add if not present)
  let roleElem = document.getElementById("profile-role");
  const detailsDiv = document.querySelector(
    "#user-profile-container .user-details"
  );
  const memberSinceElem = detailsDiv.querySelector(".member-since");
  if (!roleElem) {
    roleElem = document.createElement("p");
    roleElem.id = "profile-role";
    // Insert above member-since
    detailsDiv.insertBefore(roleElem, memberSinceElem);
  }
  // Always show 'Administrator' for localact admin account
  if (
    user.username === "localact" &&
    user.email === "localactmbrod@gmail.com"
  ) {
    roleElem.textContent = "Role: Administrator";
  } else {
    roleElem.textContent = "Role: " + (user.role || "Member");
  }
}

function showLoginForm() {
  // Hide other containers
  document.getElementById("login-container").style.display = "block";
  document.getElementById("register-container").style.display = "none";
  document.getElementById("user-profile-container").style.display = "none";
  document.getElementById("edit-account-container").style.display = "none";
}

// Add back button functionality
document.getElementById("back-btn").addEventListener("click", function () {
  showEditAccountForm();
});

// Add cancel edit functionality
document
  .getElementById("cancel-edit-btn")
  .addEventListener("click", function () {
    showUserProfile(JSON.parse(localStorage.getItem("currentUser")));
  });

// Add edit account form submission
document
  .getElementById("edit-account-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Always read fields by ID for robustness
    const email = this.querySelector("#edit-email").value.trim();
    const currentPassword = this.querySelector("#current-password").value;
    const newPassword = this.querySelector("#edit-password").value;
    const confirmPassword = this.querySelector("#edit-confirm-password").value;

    // Get current user data
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      showMessage(getTranslatedMessage("noUserLoggedIn"), false);
      return;
    }

    // Check if form is empty (no changes made)
    const isEmailEmpty = !email || email.trim() === "";
    const isCurrentPasswordEmpty =
      !currentPassword || currentPassword.trim() === "";
    const isNewPasswordEmpty = !newPassword || newPassword.trim() === "";
    const isConfirmPasswordEmpty =
      !confirmPassword || confirmPassword.trim() === "";

    // If all fields are empty, show error message
    if (
      isEmailEmpty &&
      isCurrentPasswordEmpty &&
      isNewPasswordEmpty &&
      isConfirmPasswordEmpty
    ) {
      showMessage(getTranslatedMessage("fillOneField"), false);
      return;
    }

    // If email field is empty, use current email
    const emailToUse = isEmailEmpty ? currentUser.email : email;

    // Validate email if provided
    if (!isEmailEmpty) {
      if (/[а-шА-Ш]/.test(email)) {
        showMessage(getTranslatedMessage("emailCyrillic"), false);
        return;
      }
    }

    // Load users and find current user index
    const users = loadUsers();
    const userIndex = users.findIndex((user) => user.id === currentUser.id);
    if (userIndex === -1) {
      showMessage(getTranslatedMessage("userNotFound"), false);
      return;
    }

    // If changing password, validate all fields and current password
    if (
      !isCurrentPasswordEmpty ||
      !isNewPasswordEmpty ||
      !isConfirmPasswordEmpty
    ) {
      // All password fields must be filled
      if (
        isCurrentPasswordEmpty ||
        isNewPasswordEmpty ||
        isConfirmPasswordEmpty
      ) {
        showMessage(getTranslatedMessage("allPasswordFieldsRequired"), false);
        return;
      }
      if (/[а-шА-Ш]/.test(currentPassword)) {
        showMessage(
          "Current password cannot contain Cyrillic characters. Please use Latin letters only.",
          false
        );
        return;
      }
      if (/[а-шА-Ш]/.test(newPassword)) {
        showMessage(getTranslatedMessage("newPasswordCyrillic"), false);
        return;
      }
      if (newPassword !== confirmPassword) {
        showMessage(getTranslatedMessage("passwordsDontMatch"), false);
        return;
      }
      if (newPassword.length < 6) {
        showMessage(getTranslatedMessage("passwordTooShort"), false);
        return;
      }
      // Check if current password matches
      const hashedCurrentPassword = hashPassword(currentPassword);
      if (users[userIndex].password !== hashedCurrentPassword) {
        showMessage(getTranslatedMessage("currentPasswordIncorrect"), false);
        return;
      }
      // Update password
      users[userIndex].password = hashPassword(newPassword);
    }

    // Check if email is already taken by another user (case-insensitive)
    const emailExists = users.find(
      (user) =>
        user.email.toLowerCase() === emailToUse.toLowerCase() &&
        user.id !== currentUser.id
    );
    if (emailExists) {
      showMessage(getTranslatedMessage("emailAlreadyRegistered"), false);
      return;
    }
    // Update email
    users[userIndex].email = emailToUse;

    // Save updated users
    const saved = saveUsers(users);
    if (!saved) {
      showMessage(getTranslatedMessage("errorSavingChanges"), false);
      return;
    }

    // Update current user in localStorage
    const updatedUser = {
      ...currentUser,
      email: emailToUse,
      ...(newPassword ? { password: hashPassword(newPassword) } : {}),
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));

    showMessage(getTranslatedMessage("accountUpdated"), true);
    showUserProfile(updatedUser);
  });

function showEditAccountForm() {
  // Hide other containers
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "none";
  document.getElementById("user-profile-container").style.display = "none";

  // Show edit account form
  document.getElementById("edit-account-container").style.display = "block";

  // Populate form with current user data
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    document.getElementById("edit-email").value = currentUser.email;
    document.getElementById("current-password").value = "";
    document.getElementById("edit-password").value = "";
    document.getElementById("edit-confirm-password").value = "";
  }
}

function logout() {
  // Clear current user from localStorage
  localStorage.removeItem("currentUser");

  // Close popup
  closeLoginPopup();

  // Update UI
  checkLoginStatus();
  updateLoginButton();

  // Show success message
  showMessage(getTranslatedMessage("logoutSuccess"), true);
}

// Function to get Cyrillic error message in current language
function getCyrillicErrorMessage() {
  const currentLang = window.currentLanguage || "en";
  if (currentLang === "mk") {
    return "Корисничкото име не може да содржи кирилични карактери. Ве молиме користете само латинични букви.";
  } else {
    return "Username cannot contain Cyrillic characters. Please use Latin letters only.";
  }
}

// Function to get translated messages
function getTranslatedMessage(key) {
  const currentLang = window.currentLanguage || "en";
  const messages = {
    en: {
      fillAllFields: "Please fill in all fields.",
      invalidCredentials: "Invalid username or password.",
      loginSuccess: "Successfully logged in!",
      logoutSuccess: "Successfully logged out!",
      registrationSuccess: "Registration successful! You are now logged in.",
      noUserLoggedIn: "No user logged in.",
      fillOneField: "Please fill in at least one field to make changes.",
      passwordsDontMatch: "New passwords do not match.",
      passwordTooShort: "New password must be at least 6 characters long.",
      accountUpdated: "Account updated successfully!",
      usernameExists: "Username already exists.",
      emailRegistered: "Email already registered.",
      errorSaving: "Error saving user. Please try again.",
      passwordsDoNotMatch: "Passwords do not match.",
      validEmail: "Please enter a valid email address.",
      passwordLength: "Password must be at least 6 characters long.",
      emailCyrillic:
        "Email cannot contain Cyrillic characters. Please use Latin letters only.",
      passwordCyrillic:
        "Password cannot contain Cyrillic characters. Please use Latin letters only.",
      usernameTooShort: "Username must be at least 3 characters long.",
      userNotFound: "User not found.",
      emailAlreadyRegistered: "Email already registered.",
      currentPasswordIncorrect: "Current password is incorrect.",
      errorSavingChanges: "Error saving changes.",
      allPasswordFieldsRequired:
        "All password fields must be filled to change password.",
      newPasswordCyrillic:
        "New password cannot contain Cyrillic characters. Please use Latin letters only.",
      resetLinkSent: "A reset link has been sent to your email.",
      forgotPasswordTitle: "Forgot Password",
      forgotPasswordEmail: "Email",
      forgotPasswordButton: "Send Reset Link",
      forgotPasswordBack: "Back to Log In",
      invalidResetLink: "Invalid or expired reset link.",
      passwordResetSuccess: "Password has been reset successfully!",
    },
    mk: {
      fillAllFields: "Ве молиме пополнете ги сите полиња.",
      invalidCredentials: "Невалидно корисничко име или лозинка.",
      loginSuccess: "Успешно се најавивте!",
      logoutSuccess: "Успешно се одјавивте!",
      registrationSuccess: "Регистрацијата е успешна! Сега сте најавени.",
      noUserLoggedIn: "Нема најавен корисник.",
      fillOneField:
        "Ве молиме пополнете барем едно поле за да направите промени.",
      passwordsDontMatch: "Новите лозинки не се совпаѓаат.",
      passwordTooShort: "Новата лозинка мора да има барем 6 карактери.",
      accountUpdated: "Сметката е успешно ажурирана!",
      usernameExists: "Корисничкото име веќе постои.",
      emailRegistered: "Е-поштата е веќе регистрирана.",
      errorSaving: "Грешка при зачувување на корисникот. Обидете се повторно.",
      passwordsDoNotMatch: "Лозинките не се совпаѓаат.",
      validEmail: "Ве молиме внесете валидна е-пошта.",
      passwordLength: "Лозинката мора да има барем 6 карактери.",
      emailCyrillic:
        "Е-поштата не може да содржи кирилични карактери. Ве молиме користете само латинични букви.",
      passwordCyrillic:
        "Лозинката не може да содржи кирилични карактери. Ве молиме користете само латинични букви.",
      usernameTooShort: "Корисничкото име мора да има барем 3 карактери.",
      userNotFound: "Корисникот не е пронајден.",
      emailAlreadyRegistered: "Е-поштата е веќе регистрирана.",
      currentPasswordIncorrect: "Лозинката не е точна.",
      errorSavingChanges: "Грешка при зачувување на промените.",
      allPasswordFieldsRequired:
        "За да промените лозинката, морате да пополните сите полиња за лозинка.",
      newPasswordCyrillic:
        "Новата лозинка не може да содржи кирилични карактери. Ве молиме користете само латинични букви.",
      resetLinkSent: "Линк за ресетирање е испратен на вашата е-пошта.",
      forgotPasswordTitle: "Заборавена лозинка",
      forgotPasswordEmail: "Е-пошта",
      forgotPasswordButton: "Испрати линк за ресетирање",
      forgotPasswordBack: "Назад на најава",
      invalidResetLink: "Невалиден или извлечен линк за ресетирање.",
      passwordResetSuccess: "Лозинката е успешно ресетирана!",
    },
  };
  return messages[currentLang][key] || messages.en[key] || key;
}

// Listen for language change events and update login button accordingly
window.addEventListener("languageChanged", function () {
  // Re-read currentUser from localStorage in case it changed
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  } else {
    currentUser = null;
  }
  checkLoginStatus();
  updateLoginButton(); // Ensure login button is always updated after language change
});

console.log("login.js loaded");

// Add this function to update the forgot password form translations
function applyForgotPasswordTranslations() {
  const container = document.getElementById("forgot-password-container");
  if (!container) return;
  const title = container.querySelector("h2");
  if (title) title.textContent = getTranslatedMessage("forgotPasswordTitle");
  const emailLabel = container.querySelector(
    'label[for="forgot-password-email"]'
  );
  if (emailLabel)
    emailLabel.textContent = getTranslatedMessage("forgotPasswordEmail");
  const button = container.querySelector("button[type='submit']");
  if (button)
    button.innerHTML = `<i class='fas fa-unlock-alt'></i> ${getTranslatedMessage(
      "forgotPasswordButton"
    )}`;
  const backLink = document.getElementById("back-to-login-link-forgot");
  if (backLink)
    backLink.innerHTML = `<i class='fas fa-sign-in-alt'></i> ${getTranslatedMessage(
      "forgotPasswordBack"
    )}`;
}

// Also update on language change
window.addEventListener("languageChanged", function () {
  applyForgotPasswordTranslations();
});
