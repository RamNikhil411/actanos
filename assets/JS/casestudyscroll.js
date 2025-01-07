const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  
  // Sync Lenis with ScrollTrigger
  lenis.on("scroll", ScrollTrigger.update);
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  const section_1 = document.getElementById("vertical");
  const col_left = document.querySelector(".col_left");
  const col_right = document.querySelector(".col_right");
  
  if (screen.width >= 1024) {
    const scroll_1 = ScrollTrigger.create({
      trigger: section_1,
      pin: col_right,
      start: "top 13%", // Adjusted
      end: "bottom 110%", // Adjusted
      scrub: true,
      
    });
  
    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }
  