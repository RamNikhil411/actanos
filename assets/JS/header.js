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
        document.body.style.overflow="hidden"
    }
    else{
        nav_links.classList.add("hidden")
    }
})