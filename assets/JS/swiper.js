var test =new Swiper(".mySwiper",{
    navigation:{
        nextEl:".next-button",
        prevEl:".prev-button"
    },
    
})

  var latest_cases = new Swiper(".LatestCases",{
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
  var cards = new Swiper(".myCards", {
    effect: "cards",
    grabCursor: true,
    slideShadows:false,
    
    pagination:{
        el:".card-index",
        clickable:'true'
    }
  });

  
  //gallery
  var gallery_thumbs = new Swiper(".thumbs", {
    spaceBetween: 15,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var gallery_main = new Swiper(".gallery", {
    spaceBetween: 10,
    mousewheel: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination:{
      el:".index",
      type:"fraction"

    },
    thumbs: {
      swiper: gallery_thumbs,
    },
  });

  const image_3 = document.querySelector(".image-3")
image_3.addEventListener("click",()=>{
  gallery_main.slideTO(3)
})

  var landcare_thumbs = new Swiper(".land-thumbs", {
    spaceBetween: 15,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    
  });
  var landcare_main = new Swiper(".land-gallery", {
    spaceBetween: 10,
    mousewheel: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    thumbs: {
      swiper: swiper,
    },
    pagination:{
      el:".index",
      type:"fraction"

    },
  });

