const { animate, scroll, inView,stagger } = Motion
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




