# Workout Tracker
Group Project #1

## Links
[Link to Deployed Application](URL)

[GitHub Repository](https://github.com/PaulRusz/Group-Project1)

## User Story
```
AS A dedicated fitness enthusiast,
I WANT an effective workout planning and progress tracking tool,
SO THAT I can maintain a well-organized, daily-tailored fitness schedule, closely monitor my progress, and stay motivated to consistently prioritize my health.
```

## Acceptance Criteria
```
GIVEN a Workout Tracker website,
WHEN the user visits the website for the first time,
THEN a web page appears that allows them to input their first name to continue.
WHEN the user submits their first name,
THEN the H1 "Workout Tracker" will also display their name at the top of the page.
THEN a random quote will be displayed using Quotable API.
THEN the Exercise Form and Calendar will be displayed.
THEN today's date and time will be displayed below the header using Day.js.

WHEN the user returns to the web page,
THEN they will be brought directly to their Workout Tracker.

WHEN the user clicks on the "<" (Previous) Button in the Calendar,
THEN the calendar will display the previous month, its dates, and the corresponding year.
WHEN the user clicks on the ">" (Next) Button in the Calendar,
THEN the calendar will display the next month, its dates, and the corresponding year.
WHEN the user hovers over a past date in the Calendar,
THEN that date will display in the color red.
WHEN the user hovers over today's date in the Calendar,
THEN that date will display in the color green.
WHEN the user hovers over a future date in the Calendar,
THEN that date will display in the color gray.
WHEN the user clicks on a date in the Calendar,
THEN a popover will appear with the exercises the user chose for that day and the status of those exercises.
WHEN the user clicks on the "Today" button in the Calendar,
THEN the Calendar will navigate to the current month.

WHEN the user clicks on "Choose an Exercise Type",
THEN a list of workout categories is displayed.
WHEN the user clicks on "Exercises:" after selecting a workout category,
THEN they will return to the list of workout categories and can select a different category.

WHEN the user selects a workout category of their choosing,
THEN a list of exercises that correlate to their selected workout category will display.
WHEN the user clicks the checkbox next to an exercise,
THEN that exercise is stored and listed in their Workout Planner.
WHEN the user clicks the "Begin Workout" button,
THEN the page content is replaced with their Workout Planner.

WHEN the user has selected a workout category,
THEN the user will see a message pertaining to their selected workout category within the Workout Planner.
WHEN an exercise is added to the Workout Planner,
THEN it contains an option for the user to input a quantity that relates to the exercise's designated amount of time or reps.
THEN it contains a checkbox to indicate whether or not the exercise has been completed yet.
WHEN the user hovers over an exercise name within the Workout Planner,
THEN a popover appears that displays a picture of the exercise and information about the exercise.
WHEN the user clicks on the "Return Home" button,
THEN the user will return to their Workout Tracker.
```

# Workout Tracker

## Description
The Workout Tracker is a web-based application designed to help users plan, track, and manage their workout routines effectively. Whether you're a fitness enthusiast or just starting on your fitness journey, this application provides a user-friendly interface to streamline your workout planning process.


## Features

. User Authentication: Secure login system to ensure only authorized users can access their workout data.
. Workout Selection: Choose from a variety of workout types, including arms, legs, upper body, back, shoulders, abs, cardio, and rest day.
. Workout Planner: Dynamically generates personalized workout plans based on user preferences and fitness goals.
. Calendar Integration: Schedule workouts conveniently using the built-in calendar view and track progress over time.
. Responsive Design: Optimized for various devices, ensuring seamless user experience across desktop, tablet, and mobile platforms.
. Timer Functionality: Track workout duration with an integrated timer to optimize training sessions.
. Customizable: Easily customize workout plans and exercises to fit individual needs and preferences.


## Technologies Used
. HTML, CSS: Frontend development for creating a visually appealing and responsive user interface.
. JavaScript (jQuery): Backend functionality and dynamic content generation.
. Bootstrap: Frontend framework for styling and layout components.
. Day.js: Lightweight JavaScript date library for handling date and time calculations.


## Usage
1. Sign Up/Login: Create an account or log in with your credentials to access the workout tracker.
2. Select Workout: Choose the type of workout you want to do from the available options.
3. Plan Workout: Customize your workout plan based on your preferences and goals.
4. Schedule Workouts: Use the calendar to schedule your workouts and stay on track with your fitness routine.
5. Track Progress: Monitor your progress over time and adjust your workouts accordingly to achieve your fitness goals effectively.


## Visuals
This is the landing page for users when they visit the website for the first time:
![Landing Page For First Time Visitors](assets/images/First-Visit-Name-Input.png)

This is the landing page for users who have visited before and have submitted their first name:
![Landing Page For Returning Visitors](file-path-name)



## Authors and Acknowledgement
**Main Contributors:** [Emily Simone](https://github.com/emsim11), [Paul Ruszkay](https://github.com/PaulRusz), and [Tania Bezerra](https://github.com/nybrasil)

## License
This application is licensed under the MIT License - see the LICENSE file for details.










