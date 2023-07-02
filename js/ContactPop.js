// Burger In File ContactPop 
let PopContact           =  document.querySelector(".ContactPop");
let ClosePopContact      = document.querySelector('.ContactPop__closePop');
let CloseSpacePopContact = document.querySelector('.ContactPop__closeSpace');
const BtnOpenContactPop    = document.querySelectorAll("#ContactPopBtn");

PopContact.style.display="none";
BtnOpenContactPop.forEach (ButtonOffset => {  
    ButtonOffset.addEventListener('click', (event) => {
        document.querySelector('.ContactPop').style.display="flex";
    });
});

ClosePopContact.addEventListener('click', () => {
    document.querySelector('.ContactPop').style.display="none";
});

CloseSpacePopContact.addEventListener('click', () => {
    document.querySelector('.ContactPop').style.display="none";
});