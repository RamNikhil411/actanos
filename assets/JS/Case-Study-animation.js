gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(".case-img", {


    scale: 0
}, {
    
    scale: 1,
    scrollTrigger: {
        trigger: ".case-img",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
        toggleActions: "play complete restart none"
    }
})

window.addEventListener("DOMContentLoaded", (event) => {
    let text = new SplitType(".latest , .case-head , .case-content , .challenge", {
        types: "words , chars",
        tagName: "span"

    })

    function createScrollTrigger(triggerElement, timeline) {
        // Reset tl when scroll out of view past bottom of screen
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top bottom",
            onLeaveBack: () => {
                timeline.progress(0);
                timeline.pause();
                
            }
        });
        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 70%",
            onEnter: () => timeline.play()
            });

            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 70%",
                onEnterBack: () => timeline.restart()
                });

    }

  $(".latest").each(function(index){
    let tl =gsap.timeline({paused:true})
    tl.from($(this).find(".char"),{yPercent:-120,opacity:0,duration:0.3 ,ease:"power1.out",stagger:{amount:1.0}});
    createScrollTrigger($(this),tl)
  })

  $(".case-head").each(function (index) {
    let tl= gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {  opacity:0, duration: 0.3, ease: "power1.out", stagger:{amount:0.7}})
    createScrollTrigger($(this), tl);
    });

    $(".case-content").each(function (index) {
        let tl= gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), { opacity:0, duration: 0.3, ease: "power1.out", stagger:{amount:0.8}})
        createScrollTrigger($(this), tl);
        });


      



})