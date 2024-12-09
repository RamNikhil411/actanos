gsap.from(".card", {
    x: 0,
    y: 0,
    duration:1.5,
   
  });
  gsap.to(".card", {
    onHover: () => {
      gsap.to(event.target, {
        y: "-=10%",
        duration: 0.3, 
        ease: "power2.inOut" 
      });
    }
  });