// script.js
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

gsap.fromTo(".design", { opacity: 0,y:100 }, { opacity: 1, y:0,stagger:0.1 });
gsap.fromTo(".requestbtn",{opacity:0,X:"-100%"},{opacity:1,x:0,duration:1})