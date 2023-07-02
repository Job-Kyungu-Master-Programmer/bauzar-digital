//OPEN AND CLOSING MENU BAR FOR ALL WEBSITE 
let Menu             = document.querySelector(".header__navbar-list");
let ButtonOpenClosed = document.querySelector("#ButtonBurger");
ButtonOpenClosed.addEventListener('click', () => {
    Menu.classList.toggle("OpenMenuHeader");
});

//Scrolling Mouse ==> L'apparition se fait en 800 px 
let Mouse = document.querySelector('.mouse__mouse');
window.addEventListener("scroll", function(){
    var header = document.querySelector(".mouse");
    header.classList.toggle("MouseScrollMouse", window.scrollY > 800);
});
// Au moindre clique => Cela nous ramene au-dessus
Mouse.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior : "smooth"
    });
});
