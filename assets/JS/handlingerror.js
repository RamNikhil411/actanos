const errors = document.querySelectorAll('.error')
window.onload = function(){
    errors.forEach(error => {

        error.classList.remove('hidden')
        
    });
}