

  if(screen.width < 1024){
    var typed = new Typed(".typed-words",{
      strings:["Design","Transform","Accelerate"],
      typeSpeed: 50,
      loop: true,
      backDelay: 900,
      backSpeed: 30,
      loop:true,
      showCursor:true,
      cursorChar: "_",
      attr:null,
    })
  }


const heroes = document.querySelectorAll(".hero");

const { animate, scroll, inView,stagger } = Motion
heroes.forEach((hero,index) => {
  inView(hero, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1], // Fade in
        
      },
      {
        duration: 1.2, // Animation duration
        easing: "ease-out", // Smooth easing
        delay:index * 0.3
        
      }
    );
    
  });
});

const cards = document.querySelectorAll(".card")

  inView(cards,({target}) => {
    animate(
      cards,
      {
        opacity: [0, 1],
        transform:["translateY(50%)","translate(0%)"],
        
      },
      {
      duration : 0.3,
      easing:"ease-out",
      delay:stagger(0.3)
      }

    )
    

  })

  const text = new SplitType('.about-content',{
    types:'words , chars , lines',
    tagName:"span"
  })


  const lines = document.querySelectorAll(" .about-content .line")
  lines.forEach((line,index)=>{
    inView(line,({target})=> {
      animate(
        target,
        { 
          opacity:[0,1],
          transform:["translateY(100%)","translate(0%)"],
        },
        {
          
            duration : 0.6,
            easing:"ease-out",
            delay:index*0.3
            
        }
      )

      return ()=> animate(target, { opacity: 0, transform:"translateY(100%)" })
    
    })

  })


 const rocket = document.querySelector(".rocket")
 inView(rocket,({target})=>{
  animate(
    target,
    {
      opacity:[0,1],
      transform:["translateY(100%)","translate(0%)"]
    },
    {
      duration:1.2,
      easing:"ease-out",
      delay:0.3
    }
    

  )
  return ()=> animate(target, { opacity: 0, transform:"translateY(100%)" })
 })


 const process =document.querySelector(".process")
 inView(process,({target})=>{
  animate(
    target,
    {
      transform:["scale(0)","scale(1)"]
    },
    {
      duration:1.2,
      easing:"ease-out",
      delay:0.3,
    }
  )
  return () => animate(target,{transform:"scale(0)"})
 })

 const services= document.querySelectorAll(".services")
 
  inView(services,({target})=>{
    animate(
      target,
      {
        opacity:[0,1],
        transform:["translatex(-100%)","translatex(0%)"]
       
      },

      {
        duration:0.6,
        easing:"ease-out",
       
      }
    )

    return ()=> animate(target, { opacity: 0, transform:"translatex(-100%)" })
  })

  const service_content = document.querySelectorAll(".services-content")

  
    inView(service_content,({target})=>{
      animate(
        target,
        {
          opacity:[0,1],
          transform:["translateX(100%)","translateX(0%)"]
      
        },
        {
          duration:1.2,
          easing:"ease-out",
          delay:0.2

        }
        
      )
      return ()=> animate(target,{opacity:0, transform:"translateX(0%)"})
    })
  

  const slide_up = document.querySelectorAll(".slide-up")
slide_up.forEach((slide,index)=>{
  inView(slide,({target})=>{
    animate(
      target,
      {
        opacity:[0,1],
        transform:["translateY(100%)","translateY(0%)"]
      },
      {
        duration:0.1,
        easing:"ease-out",
        delay:index*0.05
      }
    )
    return ()=> animate(target,{opacity:0})
  })
})

const stats = document.querySelectorAll(".stats")

stats.forEach((stat,index)=>{
  inView(stat,({target})=>{
    animate(
      target,
      {
        opacity:[0,1],
        transform:["translateY(100%)","translateY(0%)"]
      },
      {
        duration:0.3,
        easing:"ease-out",
        delay:index*0.3
      }
    )
    return ()=> animate(target,{opacity:0,transform:"translateY(100%)"})
  })
})

const drive_content = document.querySelectorAll(".drive-content")

  
inView(drive_content,({target})=>{
  animate(
    target,
    {
      opacity:[0,1],
      transform:["translateX(-100%)","translateX(0%)"]
  
    },
    {
      duration:1.2,
      easing:"ease-out",
      delay:0.2

    }
    
  )
  return ()=> animate(target,{opacity:0, transform:"translateX(-100%)"})
})

const brings =  document.querySelectorAll(".bring")

brings.forEach((bring,index)=>{
  inView(bring,({target})=>{
    animate(
      target,
      {
        opacity:[0,1],
        transform:["translateY(100%)","translateY(0%)"]
      },
      {
        duration:0.3,
        easing:"ease-out",
        delay:index*0.3
      }
    )
    return ()=> animate(target,{opacity:0,transform:"translateY(100%)"})
  })
})