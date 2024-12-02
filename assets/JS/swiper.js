var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false

    },
    navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
 
  });