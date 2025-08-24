// script.js
// Demonstrates scope, parameters, return values, and animation triggers

// Global scope variable
const box = document.getElementById("box");
const button = document.getElementById("animateBtn");

// Function with parameter and return value
function createMessage(name) {
  // Local scope variable
  let msg = "Hello, " + name + "! Animation started.";
  return msg; // returning value
}

// Function to trigger animation
function triggerAnimation() {
  // Add animation class
  box.classList.add("animate");

  // Call function with argument
  let message = createMessage("Student");

  // Log returned message to console
  console.log(message);

  // Remove class after animation so it can be reused
  setTimeout(() => {
    box.classList.remove("animate");
  }, 2000);
}

// Attach event listener to button
button.addEventListener("click", triggerAnimation);
