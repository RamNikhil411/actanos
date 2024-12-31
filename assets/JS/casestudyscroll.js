const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const col_right = document.querySelector(".col_right");

// Get the height of the left column
const colLeftHeight = col_left.offsetHeight;
const colRightHeight= col_right.offsetHeight;
const diff = col_left.offsetHeight-col_right.offsetHeight;

if(screen.width >= 1024){

// Pin the right column while the left column scrolls
const scroll_1 = ScrollTrigger.create({
    trigger: section_1,
    start: 'top 10%', // Start when the section 1 hits the top
    end: `+=${diff}`, // Pin the right column while the left column scrolls
    pin: col_right, // Pin the right column during scroll
    pinSpacing: false, // Don't add any extra space after the pin
    scrub: true, // Ensure smooth scrubbing
    
});

// When the left column finishes scrolling, both columns should scroll together
const scroll_2 = ScrollTrigger.create({
    trigger: section_1,
    start: `top+=${colLeftHeight} top`, // After the left column finishes scrolling
    end: 'bottom bottom', // Scroll until the bottom of the section
    onEnter: () => {
        // Both columns move together once the left column finishes its scroll
        gsap.to(col_right, {
            y: diff, // Move both columns down together
            duration: 1,
            ease: 'none',
           
        });
    },
    scrub: true,
    
});

}
