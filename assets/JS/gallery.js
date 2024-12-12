 let gallery = document.querySelector('.gallery-section')
 let gallery_btn=document.querySelector('.moregallery')

 gallery_btn.addEventListener("click",()=>{
    if(gallery.classList.contains('hidden')){
        gallery.classList.remove('hidden')
        document.body.style.overflow="hidden"
    }
 })

 let close_btn=document.querySelector('.close-btn')

 close_btn.addEventListener("click",()=>{
    gallery.classList.add('hidden')
    document.body.style.overflow="none"

 })