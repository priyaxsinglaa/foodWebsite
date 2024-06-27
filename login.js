
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

// Get the value of the email input
var email = document.getElementById('email_id').value;

// Validate email format
if (!isValidEmail(email)) {
  alert('Please enter a valid email address.');
  return;
}

// Redirect to the main page passing the email as a query parameter
window.location.href = 'front.html?email=' + encodeURIComponent(email);
});

// Function to validate email format
function isValidEmail(email) {
// This is a simple email validation regex, you can use more complex ones if needed
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}
