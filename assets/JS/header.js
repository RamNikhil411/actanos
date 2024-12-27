const menu_svgs=document.querySelectorAll(".menu svg")
const nav_links=document.querySelector(".navlinks")

const menu =document.querySelector(".menu")

menu.addEventListener("click",function(){

    menu_svgs.forEach(svg => {
        if(svg.classList.contains("hidden")){
            svg.classList.remove("hidden")
        }
        else{
            svg.classList.add("hidden")
        }
        
    });
     
    if(nav_links.classList.contains("hidden")){
        nav_links.classList.remove("hidden")
        document.body.classList.add("h-screen","overflow-hidden")
        document.body.setAttribute("data-lenis-prevent","true")
    }
    else{
        nav_links.classList.add("hidden")
        document.body.classList.remove("h-screen","overflow-hidden")
        document.body.removeAttribute("data-lenis-prevent","true")

    }
})

nav_links.addEventListener("click",function(){

    menu_svgs.forEach(svg => {
        if(svg.classList.contains("hidden")){
            svg.classList.remove("hidden")
        }
        else{
            svg.classList.add("hidden")
        }
        
    });

    if(screen.width < 1024){
        nav_links.classList.add("hidden")
        document.body.classList.remove("h-screen","overflow-hidden")

    }
    else{
        nav_links.classList.remove("hidden")

    }
})

const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.navlinks a[href*="#${id}"]`);
    const currentDiv =document.querySelector(`.navlinks a[href*="#${id}"] + div `)
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
       if(screen.width < 1024){
        if(currentNavLink.classList.contains("web-active")){
            currentNavLink.classList.remove("web-active")
            
        }

        
        currentNavLink.classList.add("underline","decoration-blue-900","underline-offset-4")
       }
       else{
        if(currentNavLink.classList.contains("underline","decoration-blue-900","underline-offset-4")){
            currentNavLink.classList.remove("underline","decoration-blue-900","underline-offset-4")

        }
        if(currentDiv.classList.contains("scale-x-0")){
            currentDiv.classList.remove("scale-x-0")
            
        }
        currentNavLink.classList.add("web-active")
        currentDiv.classList.add("scale-x-100")
        
       }
    }
    else {
      if(screen.width < 1024){
        currentNavLink.classList.remove("underline","decoration-blue-900","underline-offset-4")

      }
      else{
        if(currentDiv.classList.contains("scale-x-100")){
            
            currentDiv.classList.add("scale-x-0")
        }
        currentNavLink.classList.remove("web-active");
        currentDiv.classList.remove("scale-x-100")
        
      
      }
      
    }
  });
}

window.addEventListener("scroll", scrollTracker);