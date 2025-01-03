const text = new SplitType('.text-split',{
   types: "words , chars",
        tagName: "span"

})
const design = document.querySelector('.text-split')
design.classList.remove('invisible')

gsap.from(text.chars, {
    opacity: 0,
    
    duration: 1,
    ease:"power1.out",
    stagger: { amount: 0.5,from:"random" },
  })

  if(screen.width < 1024){
    const words = ["Design", "Transform", "Accelerate"];
    
const spinElement = document.getElementById("spin");
let index = 0;

// Function to rotate words
function rotateText() {
  spinElement.textContent = words[index];
  
  index = (index + 1) % words.length; // Loop to the start after the last word
}

// Rotate every 2 seconds
setInterval(rotateText, 1000);
  }
