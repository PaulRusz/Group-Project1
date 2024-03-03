// Script to change heading to display the user's name

// Heading 1 Element
var header = document.querySelector('h1');
// User Input Form Element
var userInput = document.getElementById('userInput');
// User-Specific Workout Page Element
var workoutPage = document.getElementById('Workout-Page');
// Check if User Name is Already Stored in Local Storage
var userName = localStorage.getItem('userName');

// Function to Retrieve User Name if it's Been Submitted Before
if (userName) {
    // If User Name is Already Stored, Update Header With the Stored Name
    header.textContent = `${userName}'s Workout Tracker`;
    // Show the Workout Page Divider
    workoutPage.style.display = 'block';
    // Hide the User Name Form
    userInput.style.display = 'none';

// Function to Submit User Name for the First Time
} else {
    // Add Event Listener to Form
    userInput.addEventListener('submit', function(event) {
    // Prevent Form Submission
    event.preventDefault();
    // Retrieve Input Value From Form Field
    var userName = document.getElementById('User-Name').value;
    // Update Text Content of Header with the User's Name
    header.textContent = `${userName}'s Workout Tracker`;
    // Save the User's Name to Local Storage
    localStorage.setItem('userName', userName);
    // Show the Workout Page Divider
    workoutPage.style.display = 'block';
    // Hide User Name Form Once Submitted
    userInput.style.display = 'none';
});
};