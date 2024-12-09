const scrollableSection = document.querySelector('.my-scrollable-section'); // Select the desired section



const lenis = new Lenis({

    root: scrollableSection // Target only this section

});



// Update Lenis on scroll

function scrollAnimation() {

    lenis.raf();

}



requestAnimationFrame(scrollAnimation); 
