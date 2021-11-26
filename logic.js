const navslide = () =>{
    const burger = document.querySelector(".open-menu");
    const nav = document.querySelector(".nav-links");
    burger.addEventListener('click' , () =>{
        nav.classList.toggle('nav-active');
    }) 
}
const navclose = () =>{
    const close = document.querySelector(".close-menu");
    const nav1 = document.querySelector(".nav-active");
     close.addEventListener('click' , () =>{
        //  nav1.classList.remove('nav-active');
        nav1.classList.toggle('nav-close');
    })
}
navslide();