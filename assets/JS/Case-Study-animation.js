gsap.registerPlugin(ScrollTrigger);



window.addEventListener("DOMContentLoaded", (event) => {
    let text = new SplitType(".latest , .case-head1 ,.case-head2,.case-head3, .case-content , .challenge", {
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
            start: "top 90%",
            onEnter: () => timeline.play()
            });

            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 70%",
                onEnterBack: () => timeline.restart()
                });

    }

    function createScrollTrigger2(triggerElement, timeline) {
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
            start: "top 83%",
            onEnter: () => timeline.play()
            });

            ScrollTrigger.create({
                trigger: triggerElement,
                start: "top 70%",
                onEnterBack: () => timeline.restart()
                });

    }

    function createScrollTrigger3(triggerElement, timeline) {
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
            start: "top 75%",
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

  $(".case-head1").each(function (index) {
    let tl= gsap.timeline({ paused: true });
    tl.from($(this).find(".char"), {  opacity:0, duration: 0.3,  ease: "power1.out", stagger:{amount:0.7}})
    createScrollTrigger($(this), tl);
    });

    $(".case-head2").each(function (index) {
        let tl= gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {  opacity:0, duration: 0.3, delay:0.5,  ease: "power1.out", stagger:{amount:0.7}})
        createScrollTrigger2($(this), tl);
        });
    $(".case-head3").each(function (index) {
            let tl= gsap.timeline({ paused: true });
            tl.from($(this).find(".char"), {  opacity:0, duration: 0.3, delay:1,  ease: "power1.out", stagger:{amount:0.7}})
            createScrollTrigger3($(this), tl);
            });

    $(".case-content1").each(function (index) {
        let tl= gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), { opacity:0, duration: 0.3, ease: "power1.out", stagger:{amount:0.8}})
        createScrollTrigger($(this), tl);
        });

     $(".case-content2").each(function (index) {
            let tl= gsap.timeline({ paused: true });
            tl.from($(this).find(".char"), { opacity:0, duration: 0.3, delay:0.5, ease: "power1.out", stagger:{amount:0.8}})
            createScrollTrigger2($(this), tl);
            });
     $(".case-content3").each(function (index) {
                let tl= gsap.timeline({ paused: true });
                tl.from($(this).find(".char"), { opacity:0, duration: 0.3, delay:1, ease: "power1.out", stagger:{amount:0.8}})
                createScrollTrigger3($(this), tl);
                });


      



})