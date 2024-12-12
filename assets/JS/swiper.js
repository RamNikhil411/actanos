var swiper =new Swiper(".mySwiper",{
    navigation:{
        nextEl:".next-button",
        prevEl:".prev-button"
    },
    
})

  var swiper = new Swiper(".LatestCases",{
    slidesPerView: 1,
    spaceBetween: 10,
    
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    navigation:{
        nextEl:".next-button",
        prevEl:".prev-button"
    },
    pagination: {
        el: ".index",
        clickable: true,
       
       

    },
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1280:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
  })
///mobile
  var swiper = new Swiper(".myCards", {
    effect: "cards",
    grabCursor: true,
    slideShadows:false,
    
    pagination:{
        el:".card-index",
        clickable:'true'
    }
  });

  
  //gallery
  var swiper = new Swiper(".thumbs", {
    spaceBetween: 15,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".gallery", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination:{
      el:".index",
      type:"fraction"

    },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper = new Swiper(".land-thumbs", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    
  });
  var swiper2 = new Swiper(".land-gallery", {
    spaceBetween: 10,
    mousewheel:true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });