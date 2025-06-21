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

// Register new user
function registerUser(username, email, password) {
  const users = loadUsers();

  // Check if username already exists (case-insensitive)
  if (
    users.find((user) => user.username.toLowerCase() === username.toLowerCase())
  ) {
    return { success: false, message: getTranslatedMessage("usernameExists") };
  }

  // Check if email already exists (case-insensitive)
  if (users.find((user) => user.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, message: getTranslatedMessage("emailRegistered") };
  }

  // Create new user
  const newUser = {
    id: Date.now().toString(),
    username: username,
    email: email,
    password: hashPassword(password),
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);

  // Save to localStorage
  const saved = saveUsers(users);
  if (saved) {
    return {
      success: true,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
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
    showMessage(getTranslatedMessage("loginSuccess"), true);
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
  loginButtons.forEach((button) => {
    if (currentUser) {
      button.textContent = currentUser.username;
    } else {
      button.textContent = "Log In";
    }
  });
}

// Show message to user
function showMessage(message, isSuccess = true) {
  const messageDiv = document.createElement("div");
  messageDiv.style.cssText = `
    position: fixed;
    top: 61px;
    right: 15px;
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
    max-width: 300px;
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
  ".header-language-wrapper-mobile .user-profile"
);
const loginPopup = document.getElementById("login-popup");
const loginCloseBtn = document.getElementById("login-close-btn");

// Popup functions
function openLoginPopup() {
  console.log("Opening login popup");
  loginPopup.classList.add("active");
  // Check login status to show appropriate content
  checkLoginStatus();
}

function closeLoginPopup() {
  console.log("Closing login popup");
  loginPopup.classList.remove("active");
}

// Event listeners for popup
loginBtnDesktop.addEventListener("click", function (e) {
  console.log("Desktop login button clicked");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    openLoginPopup();
  }
  // If user is logged in, dropdown will be handled by setupDropdownHandlers
});

loginBtnMobile.addEventListener("click", function (e) {
  console.log("Mobile login button clicked");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    openLoginPopup();
  }
  // If user is logged in, dropdown will be handled by setupDropdownHandlers
});

loginCloseBtn.addEventListener("click", closeLoginPopup);

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
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = this.username.value.trim();
  const password = this.password.value;

  if (!username || !password) {
    showMessage(getTranslatedMessage("fillAllFields"), false);
    return;
  }

  // Check for Cyrillic characters in username
  if (/[а-шА-Ш]/.test(username)) {
    showMessage(getCyrillicErrorMessage(), false);
    return;
  }

  // Check for Cyrillic characters in password
  if (/[а-шА-Ш]/.test(password)) {
    showMessage(getCyrillicErrorMessage(), false);
    return;
  }

  // Find user by username (case-insensitive)
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
    // Use translated message
    if (window.showTranslatedMessage) {
      window.showTranslatedMessage("loginSuccess");
    } else {
      showMessage(getTranslatedMessage("loginSuccess"), true);
    }
  } else {
    showMessage(getTranslatedMessage("invalidCredentials"), false);
  }
});

// Register form submission
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = this.username.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    // Validate input
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
      // Log in the user immediately after registration
      localStorage.setItem("currentUser", JSON.stringify(result.user));
      closeLoginPopup();
      checkLoginStatus();
      showMessage(getTranslatedMessage("registrationSuccess"), true);
    } else {
      showMessage(result.message, false);
    }
  });

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Check if user is already logged in
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateLoginButton();
  }

  // Check if user is logged in on page load
  checkLoginStatus();
  setupDropdownHandlers();
});

function setupDropdownHandlers() {
  const userProfiles = document.querySelectorAll(".user-profile");
  const userDropdown = document.getElementById("user-dropdown");
  const yourAccountBtn = document.getElementById("your-account-btn");
  const headerLogoutBtn = document.getElementById("header-logout-btn");

  // Toggle dropdown when clicking on user profile
  userProfiles.forEach((userProfile) => {
    userProfile.addEventListener("click", function (e) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        e.preventDefault();
        e.stopPropagation();
        userDropdown.style.display =
          userDropdown.style.display === "none" ? "block" : "none";
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    const clickedOnProfile = Array.from(userProfiles).some((profile) =>
      profile.contains(e.target)
    );
    if (!clickedOnProfile) {
      userDropdown.style.display = "none";
    }
  });

  // Your Account button - opens the login popup with profile
  yourAccountBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    userDropdown.style.display = "none";
    openLoginPopup();
  });

  // Header Logout button
  headerLogoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    userDropdown.style.display = "none";
    logout();
  });
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
    loginButtons.forEach((btn) => {
      btn.textContent = "Log In";
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
  document.getElementById("profile-email").textContent = user.email;
  document.getElementById("profile-date").textContent = new Date(
    user.createdAt
  ).toLocaleDateString();
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

    const email = this.email.value.trim();
    const currentPassword = this.currentPassword.value;
    const newPassword = this.password.value;
    const confirmPassword = this.confirmPassword.value;

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
      // Check for Cyrillic characters in email
      if (/[а-шА-Ш]/.test(email)) {
        showMessage(getTranslatedMessage("emailCyrillic"), false);
        return;
      }
    }

    // Check if user wants to change password
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

      // Check for Cyrillic characters in current password
      if (/[а-шА-Ш]/.test(currentPassword)) {
        showMessage(
          "Current password cannot contain Cyrillic characters. Please use Latin letters only.",
          false
        );
        return;
      }

      // Check for Cyrillic characters in new password
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
    }

    // Update user account
    const result = updateUserAccount(emailToUse, currentPassword, newPassword);

    if (result.success) {
      showMessage(getTranslatedMessage("accountUpdated"), true);
      showUserProfile(result.user);
    } else {
      showMessage(result.message, false);
    }
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

function updateUserAccount(email, currentPassword, newPassword) {
  const users = loadUsers();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  console.log("Current user:", currentUser);
  console.log("All users:", users);

  if (!currentUser) {
    return { success: false, message: getTranslatedMessage("noUserLoggedIn") };
  }

  // Find current user in users array
  const userIndex = users.findIndex((user) => {
    console.log(
      "Comparing user.id:",
      user.id,
      "with currentUser.id:",
      currentUser.id
    );
    console.log(
      "Types - user.id:",
      typeof user.id,
      "currentUser.id:",
      typeof currentUser.id
    );
    return user.id === currentUser.id;
  });

  console.log("User index found:", userIndex);

  if (userIndex === -1) {
    return { success: false, message: getTranslatedMessage("userNotFound") };
  }

  // Check if email is already taken by another user (case-insensitive)
  const emailExists = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.id !== currentUser.id
  );

  if (emailExists) {
    return {
      success: false,
      message: getTranslatedMessage("emailAlreadyRegistered"),
    };
  }

  // If changing password, verify current password
  if (currentPassword && newPassword) {
    const hashedCurrentPassword = hashPassword(currentPassword);
    if (users[userIndex].password !== hashedCurrentPassword) {
      return {
        success: false,
        message: getTranslatedMessage("currentPasswordIncorrect"),
      };
    }
  }

  // Update user data
  users[userIndex].email = email;

  if (newPassword) {
    users[userIndex].password = hashPassword(newPassword);
  }

  // Save updated users
  const saved = saveUsers(users);
  if (!saved) {
    return {
      success: false,
      message: getTranslatedMessage("errorSavingChanges"),
    };
  }

  // Update current user in localStorage
  const updatedUser = {
    ...currentUser,
    email: email,
  };

  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  return { success: true, user: updatedUser };
}

function logout() {
  // Clear current user from localStorage
  localStorage.removeItem("currentUser");

  // Close popup
  closeLoginPopup();

  // Update UI
  checkLoginStatus();

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
    },
  };
  return messages[currentLang][key] || messages.en[key] || key;
}
