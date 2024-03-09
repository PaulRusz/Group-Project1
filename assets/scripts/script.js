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

// Display Date & Time

// Variables
var currentDate = dayjs().format('dddd, MMMM D, YYYY, h:mm a');
var currentTime = dayjs().hour();

// Sets Date & Time In Dashboard Header Area
console.log(currentTime);
$('#currentDate').html(currentDate);

// WGER API

// JSON Object Containing API Endpoints
var wgerEndpoints = {
    'exercise': 'https://wger.de/api/v2/exercise/?limit=100&language=2',
    'exercisecategory': 'https://wger.de/api/v2/exercisecategory/?',
    'exerciseimage': 'https://wger.de/api/v2/exerciseimage/?',
    'exerciseinfo': 'https://wger.de/api/v2/exerciseinfo/?'
};

// Fetch WGER Data Endpoints
function fetchExercises() {
    return fetchDataFromEndpoint('exercise');
};

// Fetch Data From a Specific Endpoint
function fetchDataFromEndpoint(endpointKey, params) {
    var endpoint = wgerEndpoints[endpointKey];
    if (params) {
        endpoint += "&" + params;
    }
    return fetch(endpoint)
        .then(function (resp) { return resp.json() });
};

// Run Console Log Function to Ensure API Works
fetchExercises().then(function (data) { console.log(data) });
fetch("https://wger.de/api/v2/exercisecategory/")
    .then(function (resp) { return resp.json(); })
    .then(function (data) { console.log(data); });

// Display Workout Choices
var exeButton = $(".exerciseButton").on("click", function () {
    $(".workoutChoices").css("visibility", "visible")
});



// Checkbox Items Appear After a Workout Choice is Made Using WorkoutChoices Menu
document.addEventListener("DOMContentLoaded", function () {
    const exerciseButtons = document.querySelectorAll('.workoutChoices li');
    const selectForm = document.querySelector('.selectForm');
    const checkboxContainer = document.querySelector('.checkboxContainer');
    const exerciseList = document.querySelector("#exercise");
    const exerciseHeadingButton = document.querySelector('.Checkbox-Heading');
    const formInstructions = document.querySelector('.Form-Instructions');
    // Run Console Log Function to Ensure ExerciseHeadingButton is Selected Correctly
    console.log(exerciseHeadingButton);
    exerciseHeadingButton.addEventListener('click', function () {
        console.log("Exercise heading button clicked.");
        // Show the Select Form
        selectForm.style.display = 'block';
        // Hide the Exercise List
        checkboxContainer.style.display = 'none';
    });
    exerciseButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            console.log(event.target.dataset.category);
            // Hide the Workout Types List
            document.querySelector('.workoutChoices').style.visibility = 'hidden';
            // Show the Checkbox Container
            checkboxContainer.style.visibility = 'visible';
            // Hide Select Form
            selectForm.style.display = 'none';
            // Show Checkbox Container
            checkboxContainer.style.display = 'block';
            // Populate Checkbox Container With Relevant Workouts
            fetchDataFromEndpoint("exercise", "category=" + event.target.dataset.category)
                .then(function (response) {
                    var exercises = response.results;
                    console.log(exercises);

                    for (let i = 0; i < exercises.length; i += 1) {
                        var exercise = exercises[i];
                        console.log(exercise);

                        var exerciseListItem = document.createElement("li");
                        var exerciseListItemBox = document.createElement("input");
                        exerciseListItemBox.setAttribute("type", "checkbox"); // Set the type attribute for the checkbox
                        exerciseListItemBox.setAttribute("value", exercise.name); // Set the value attribute for the checkbox
                        exerciseListItem.appendChild(exerciseListItemBox); // Append the checkbox to the list item

                        var exerciseName = document.createTextNode(exercise.name); // Create a text node for the exercise name
                        exerciseListItem.appendChild(exerciseName); // Append the exercise name to the list item

                        exerciseList.appendChild(exerciseListItem); // Append the list item to the exercise list
                    }
                    // Hide Form Instructions Once the Checkbox Items Have Appeared
                    formInstructions.style.display = 'none';
                });
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

// Months Array
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Show Calendar
const calendarFunction = () => {
    // Obtain First Day of the New Month
    var dayOne = new Date(calendarYear, calendarMonth, 1).getDay();
    // Obtain Last Day of the New Month
    var lastDay = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    // Obtain Day Name of the Last Day in the Month
    var lastDayName = new Date(calendarYear, calendarMonth, lastDay).getDay();
    // Obtain Last Date of the Previous Month
    var monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();
    var lit = "";
    // Add Last Dates of the Previous Month
    for (let i = dayOne; i > 0; i--) {
        lit += `<li class="inactive">${monthLastDate - i}</li>`;
    };
    // Add Dates of the Current Month
    for (let i = 1; i <= lastDay; i++) {
        var isToday = i === date.getDate()
            && calendarMonth === new Date().getMonth()
            && calendarYear === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    };
    for (let i = lastDayName; i < 6; i++) {
        lit += `<li class="inactive">${i - lastDayName + 1}</li>`;
    };
    calendarCurrentDate.innerText = `${months[calendarMonth]} ${calendarYear}`;
    calendarDay.innerHTML = lit;
};

// Navigation Buttons Event Listeners
const prevButton = document.getElementById('cal-prev');
const nextButton = document.getElementById('cal-next');
prevButton.addEventListener('click', function () {
    calendarMonth--; // Decrease Month By 1
    if (calendarMonth < 0) {
        calendarMonth = 11; // If the Month Goes Below January, Set it to December
        calendarYear--; // Decrease Year
    };
    calendarFunction(); // Update Calendar Display
});
nextButton.addEventListener('click', function () {
    calendarMonth++; // Increase Month By 1
    if (calendarMonth > 11) {
        calendarMonth = 0; // If the Month Goes Above December, Set it to January
        calendarYear++; // Increase Year
    };
    calendarFunction(); // Update Calendar Display
});
calendarFunction();

// Allows a user to select an exercise and then use the 'Exercise' Button to go
// back to the Exercise Types
const checkboxHeadingButton = document.getElementById('checkbox-heading-button')
const selectForm = document.getElementById('select-form')

checkboxHeadingButton.addEventListener('click', () => {
    selectForm.scrollIntoView({ behavior: 'smooth' })
})

