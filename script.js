//your code here
// Get references to the elements
const app = document.getElementById('app');
const swapButton = document.getElementById('swap');

// Function to swap the theme
function swapTheme() {
  // Toggle between day and night classes on the main div
  if (app.classList.contains('day')) {
    app.classList.remove('day');
    app.classList.add('night');

    // Also change the button style to match the night theme
    swapButton.classList.remove('button_day');
    swapButton.classList.add('button_night');
  } else {
    app.classList.remove('night');
    app.classList.add('day');

    // Change the button back to the day theme style
    swapButton.classList.remove('button_night');
    swapButton.classList.add('button_day');
  }
}

// Attach event listener to the button to trigger the theme swap on click
swapButton.addEventListener('click', swapTheme);


