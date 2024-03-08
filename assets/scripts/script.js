// Display User's Name in Heading 1

// Variables
var header = document.querySelector('h1');
var userInput = document.getElementById('userInput');
var workoutPage = document.getElementById('Workout-Page');
var welcomeMessage = document.getElementById('Welcome');

var previousArrow = document.getElementById ("cal-prev");
var nextArrow = document.getElementById("cal-next")

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
var options = {method: 'GET', headers: {Accept: 'application/json'}};

// Fetch Quote Function
// Fetch Quote
$(document).ready(function() {
    $.ajax({
        url: 'https://api.quotable.io/random',
        dataType: 'json',
        success: function(data) {
            var quote = data.content;
            $('#Quote').text('"' + quote + '"');
        },
        error: function() {
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

// Initialize the current month variable to the current month 
let currentMonth = new Date().getMonth();

// Function to show the previous month
function showPreviousMonth() {
    // Calculate the previous month and handle wrapping around to the previous year
    currentMonth = (currentMonth - 1 + 12) % 12; 
    updateMonthUI(currentMonth);
    console.log('Showing previous month:', currentMonth);
}

// Function to show the next month
function showNextMonth() {

    // Calculate the next month and handle wrapping around to the next year
    currentMonth = (currentMonth + 1) % 12; 
    updateMonthUI(currentMonth);
    console.log('Showing next month:', currentMonth);
}
// Function to update the UI with the month name
function updateMonthUI(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[month];
    
    // Update the UI element with the month name
    document.getElementById('monthDisplay').textContent = monthName + ' ' + 2024;
}

previousArrow.addEventListener("click", showPreviousMonth );
nextArrow.addEventListener("click", showNextMonth);

//function updateYearUI(year) {
    //const year = ['2024', '2025', '2026', '2027']
//}
