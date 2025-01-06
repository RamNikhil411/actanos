const lenis = new Lenis({
  lerp:0.05,
  touch:true,
  smoothWheel: true,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);