const openform = document.querySelector("#open-form");
const closeform = document.querySelector("#close-form");

const modal = document.querySelector("#modal");


openform.addEventListener("click",(e)=>{   
    e.preventDefault 
    modal.classList.add('modal--show')
    openform.classList.add('contact--us')
});



closeform.addEventListener("click",(e)=>{   
    e.preventDefault 
    modal.classList.remove('modal--show')
    openform.classList.remove('contact--us')
});