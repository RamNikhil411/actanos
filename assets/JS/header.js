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
    const sectionTop = section.offsetTop - 100;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(`.navlinks a[href*="#${id}"]`);
    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("text-[#D8D8D8]");
    } else {
      currentNavLink.classList.remove("text-[#D8D8D8]");
    }
  });
}

window.addEventListener("scroll", scrollTracker);