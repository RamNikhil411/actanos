

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({
  lerp:0.05
});
gsap.registerPlugin(ScrollTrigger);

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});


gsap.fromTo(".fade-in-element", {
  x: -100, // Start 100 pixels offscreen to the left
  opacity: 0
}, {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".fade-in-element",
    start: "top 90%",
    end: "bottom 20%",
    scrub: true
  }
});

gsap.fromTo(".fade-out-element", {
  x: 100, // Start 100 pixels offscreen to the right
  opacity: 0
}, {
  x: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".fade-out-element",
    start: "top 90%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none"
  }
});

gsap.fromTo(".fade-up", {
  y: 100, // 
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".fade-up",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
});

gsap.fromTo(".latest", {
  x:-100,
  opacity: 0
}, {
  x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".latest",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".latest-become", {
  x:100,
  opacity: 0
}, {
  x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".latest-become",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".stats", {
  y: 100, // 
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".stats",
    start: "top 90%",
    end: "bottom 30%",
    scrub: true,
    toggleActions:"play complete restart none"
  }
});

gsap.fromTo(".innovate",{
  scale:0,
  opacity:0
},{
  scale:1,
  opacity:1,
  scrollTrigger: {
    trigger: ".innovate",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".drive-become", {
  x:100,
  opacity: 0
}, {
  x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".drive-become",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".drive", {
  x:-100,
  opacity: 0
}, {
  x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".drive",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});



gsap.fromTo(".drive-content", {
  
  opacity: 0,
  y:100
}, {
   y:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".drive-content",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".test", {
  x:-100,
  opacity: 0
}, {
  x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".test",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".test-content", {
  
  opacity: 0,
  y:100
}, {
   y:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".test-content",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".bring-become", {
  
  opacity: 0,
  y:100
}, {
   y:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bring",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".bring", {
  
  opacity: 0,
  x:-100
}, {
   x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bring",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".bring-content", {
  
  opacity: 0,
  x:100
}, {
   x:0,
  opacity: 1,
  scrollTrigger: {
    trigger: ".bring",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    toggleActions:"play complete restart none",
  }
});

gsap.fromTo(".image-2",{
  scale:0,
  opacity:0
},{
  scale:1,
  opacity:1,
  scrollTrigger: {
    trigger: ".image-2",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".image-2-content",{

  y:-100,
  opacity:0
},{
  y:0,
  opacity:1,
  scrollTrigger: {
    trigger: ".image-2-content",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".rocket",{

  y:100,
  opacity:0
},{
  y:0,
  opacity:1,
  scrollTrigger: {
    trigger: ".image-2-content",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".test-content",{

  
  opacity:0
},{

  opacity:1,
  scrollTrigger: {
    trigger: ".test-content",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".testimonals",{

  
  opacity:0
},{

  opacity:1,
  scrollTrigger: {
    trigger: ".testimonals",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".test-author",{

  
  opacity:0
},{

  opacity:1,
  scrollTrigger: {
    trigger: ".test-author",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".test-prev",{

  x:-100,
  opacity:0
},{
  x:0,
  opacity:0.5,
  scrollTrigger: {
    trigger: ".testimonals",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".test-next",{

  x:100,
  opacity:0
},{
   x:0,
  opacity:1,
  scrollTrigger: {
    trigger: ".testimonals",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".case-head",{

  y:100,
  opacity:0
},{
   y:0,
  opacity:1,
  duration:2,
  scrollTrigger: {
    trigger: ".latest",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".case-content",{

  y:100,
  opacity:0
},{
   y:0,
  opacity:1,
  duration:2,
  scrollTrigger: {
    trigger: ".latest",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".case-img",{

  
  scale:0
},{
   y:0,
  scale:1,
  scrollTrigger: {
    trigger: ".latest",
    start: "top 90%",
    end: "bottom center",
    scrub: true,
    toggleActions:"play complete restart none"
  }
})

gsap.fromTo(".card",{

  y:100
},{
  y:0,
duration:2
}
)



 












