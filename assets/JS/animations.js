const words = ["Design", "Transform", "Accelerate"];
    
const spinElement = document.getElementById("spin");
let index = 0;

// Function to rotate words
function rotateText() {
  spinElement.textContent = words[index];
  index = (index + 1) % words.length; // Loop to the start after the last word
}


setInterval(rotateText, 500);