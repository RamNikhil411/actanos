const text = new SplitType('.text-split')
const design = document.querySelector('.text-split')
design.classList.remove('invisible')

gsap.from(text.chars, {
    opacity: 0,
    
    duration: 1,
    ease:"power1.out",
    stagger: { amount: 0.4,from:"random" },
  })

