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

  document.querySelectorAll('.moregallery img').forEach(image => {
    image.addEventListener('click', () => {
      const slideIndex = image.dataset.slideIndex;
  
      // Show the Swiper slider
      document.querySelector('.gallery-section').classList.remove('hidden');
  
      // Set the initial slide
      gallery_main.slideTo(slideIndex - 1);
    });
  });
   let gallery = document.querySelector('.gallery-section')
  let close_btn=document.querySelector('.close-btn')

  close_btn.addEventListener("click",()=>{
     gallery.classList.add('hidden')
     document.body.style.overflow="none"
 
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
      swiper: landcare_thumbs,
    },
    pagination:{
      el:".index",
      type:"fraction"

    },
  });

  document.querySelectorAll('.landgallery img').forEach(image => {
    image.addEventListener('click', () => {
      const slideIndex = image.dataset.slideIndex;
  
      // Show the Swiper slider
      document.querySelector('.gallery-section').classList.remove('hidden');
  
      // Set the initial slide
      landcare_main.slideTo(slideIndex - 1);
    });
  });

