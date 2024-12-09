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
  var swiper = new Swiper(".cardMobile", {
    effect: "cards",
    grabCursor: true,
    slideShadows:true,
    pagination:{
        el:".index",
        clickable:'true'
    }
  });