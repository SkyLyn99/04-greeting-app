let userName="SkyLyn";
console.log("Welcome, " + userName + "!");

// Select the button, input field, and paragraph where the message will be displayed
let button = document.getElementById('welcomeButton'); // The button the user clicks
let input = document.getElementById('userName'); // The input field where the user enters their name
let message = document.getElementById('welcomeMessage'); // The paragraph to display the personalized message

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Get the value entered in the input field
  let userName = input.value;

  // Check if the user entered a name
  if (userName) {
    // Display a fun personalized message
    message.textContent = 'Hello, ' + userName + '! 🌟 You’re awesome and ready to conquer the day!';
  } else {
    // If no name is entered, prompt the user to enter one
    message.textContent = 'Oops! Please enter your name to get a fun message!';
  }
});