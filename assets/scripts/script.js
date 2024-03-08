// Display User's Name in Heading 1

// Variables
var header = document.querySelector('h1');
var userInput = document.getElementById('userInput');
var workoutPage = document.getElementById('Workout-Page');
var welcomeMessage = document.getElementById('Welcome');

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
    // Show the Welcome Message
    welcomeMessage.style.display = 'block';

    // Function to Submit User Name for the First Time
} else {
    // Add Event Listener to Form
    userInput.addEventListener('submit', function (event) {
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
        // Hide the Welcome Message
        welcomeMessage.style.display = 'none';
    });
};

// Quotable API Random Quote

// Variables
var quote = 'https://api.quotable.io/random';
var options = { method: 'GET', headers: { Accept: 'application/json' } };

// Fetch Quote Function
// Fetch Quote
$(document).ready(function () {
    $.ajax({
        url: 'https://api.quotable.io/random',
        dataType: 'json',
        success: function (data) {
            var quote = data.content;
            $('#Quote').text('"' + quote + '"');
        },
        error: function () {
            $('#Quote').text("Your self-worth is determined by you. You don't have to depend on someone telling you who you are.");
        }
    });
});

// Display Date & Time

// Variables
var currentDate = dayjs().format('dddd, MMMM D, YYYY, h:mm a');
var currentTime = dayjs().hour();

// Sets date & time into dashboard header area
console.log(currentTime)
$('#currentDate').html(currentDate)

// Function to have the workout choices appear
var exeButton = $(".exerciseButton").on("click", function () {
    $(".workoutChoices").css("visibility", "visible")
})

// Checkbox items are initially hidden but appear after a workout choice is made 
// using the workoutchoices menu

document.addEventListener("DOMContentLoaded", function () {
    const exerciseButtons = document.querySelectorAll('.workoutChoices li');
    const selectForm = document.querySelector('.selectForm');
    const checkboxContainer = document.querySelector('.checkboxContainer');

    exerciseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Hide the list items
            document.querySelector('.workoutChoices').style.visibility = 'hidden';

            // Show the checkbox container
            checkboxContainer.style.visibility = 'visible';

            // Adjust layout to make checkbox container take the spot of the list items
            selectForm.style.display = 'none'; // Hide the select form
            checkboxContainer.style.display = 'block'; // Show the checkbox container
        });
    });
});

// Display Calendar
// Variables
var date = new Date();
var calendarYear = date.getFullYear();
var calendarMonth = date.getMonth();
var calendarDay = document.querySelector('.cal-dates');
var calendarCurrentDate = document.querySelector('.cal-current-date');
var calendarIcons = document.querySelector('.cal-nav span');

// An array for the months
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Shows calendar
const calendarFunction = () => {
    // Obtains the first day of the new month
    var dayOne = new Date(calendarYear, calendarMonth, 1).getDay();
    // Obtains the last day of the new month
    var lastDay = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    // Obtains the day name of the last day in the month
    var lastDayName = new Date(calendarYear, calendarMonth, lastDay).getDay();
    // Obtains the last date of the previous month
    var monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();
    var lit = "";

    // Add the last dates of the previous month
    for (let i = dayOne; i > 0; i--) {
        lit += `<li class="inactive">${monthLastDate - i}</li>`;
    }

    // Add the dates of the current month
    for (let i = 1; i <= lastDay; i++) {
        var isToday = i === date.getDate()
            && calendarMonth === new Date().getMonth()
            && calendarYear === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayName; i < 6; i++) {
        lit += `<li class="inactive">${i - lastDayName + 1}</li>`;
    }

    calendarCurrentDate.innerText = `${months[calendarMonth]} ${calendarYear}`;
    calendarDay.innerHTML = lit;
}

calendarFunction();