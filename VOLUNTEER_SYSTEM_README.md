# Volunteer Registration System

## Overview

The "Join Our Cause" button now includes a complete volunteer registration system that allows logged-in users to register as volunteers.

## Features

### 🔐 Authentication Required

- Users must be logged in to register as volunteers
- If not logged in, shows a message: "You must be logged in to register as a volunteer. Please log in first."
- Uses the existing login system from `login.js`

### 📝 Registration Form

The volunteer registration form includes:

- **User Info Display**: Shows the logged-in user's username and email
- **Phone Number**: Required field for contact information
- **Age**: Required field (minimum 16 years old)
- **City**: Required field for location
- **Areas of Interest**: Checkbox selection for:
  - Environment
  - Education
  - Healthcare
  - Infrastructure
  - Cultural
- **Availability**: Dropdown selection for:
  - Weekdays
  - Weekends
  - Both
  - Flexible
- **Motivation**: Optional textarea for explaining why they want to volunteer

### 🌐 Multilingual Support

- Supports both English and Macedonian languages
- Automatically detects the current language setting
- All form labels, buttons, and messages are translated

### 💾 Data Storage

- Volunteer data is stored in browser's localStorage
- Prevents duplicate registrations (one volunteer per user account)
- Data structure includes:
  - User ID and basic info
  - Contact details (phone, age, city)
  - Interests and availability
  - Motivation text
  - Registration date and status

### ✅ Validation

- Age validation (minimum 16 years)
- Required field validation
- At least one area of interest must be selected
- Prevents duplicate registrations

### 🎨 User Interface

- Modern modal design with smooth animations
- Responsive design for mobile and desktop
- Success/error messages with auto-dismiss
- Clean, professional styling

## Files Created/Modified

### New Files:

- `volunteer.js` - Main volunteer registration functionality
- `volunteer.css` - Styling for the volunteer modal and form
- `VOLUNTEER_SYSTEM_README.md` - This documentation

### Modified Files:

- `index.html` - Added CSS/JS includes and changed button to use ID

## Usage

1. **User clicks "Join Our Cause" button**
2. **System checks if user is logged in**
   - If not logged in: Shows error message
   - If logged in: Opens registration form
3. **User fills out the form**
4. **System validates the data**
5. **On successful submission:**
   - Saves volunteer data to localStorage
   - Shows success message
   - Closes the modal

## Technical Details

### Dependencies:

- Uses existing login system (`login.js`)
- Uses existing translation system
- No external dependencies

### Browser Support:

- Modern browsers with localStorage support
- Responsive design for mobile devices

### Data Structure:

```javascript
{
  id: "timestamp",
  userId: "user_id",
  username: "username",
  email: "email@example.com",
  phone: "phone_number",
  age: 25,
  city: "City Name",
  interests: ["Environment", "Education"],
  availability: "Weekends",
  motivation: "Optional motivation text",
  registrationDate: "2024-01-01T00:00:00.000Z",
  status: "Pending"
}
```

## Future Enhancements

- Admin panel to view registered volunteers
- Email notifications
- Volunteer status management
- Integration with backend database
- Export volunteer data functionality
