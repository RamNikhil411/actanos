var swiper=new Swiper(".myClient",{
    spaceBetween:30,
    navigation:{
        
    }
})

  var swiper = new Swiper(".LatestCases",{
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false
    },
    navigation:{
        nextEl:".next-button",
        prevE1:".prev-button"
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