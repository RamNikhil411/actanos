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


const colLeftHeight = col_left.offsetHeight;
const colRightHeight= col_right.offsetHeight;


if(screen.width >= 1024){

const scroll_1 = ScrollTrigger.create({
    trigger: section_1,
    pin: col_right,
    start: 'top 10%', 
    end: "bottom 110%", 
    
   
    scrub: true, 
    
});




}
