const text = new SplitType('.text-split')

gsap.from(text.chars, {
    opacity: 0,
    delay:1,
    duration: 1,
    ease:"power1.out",
    stagger: { amount: 0.4,from:"random" },
  })

