
// OPEN AND CLOSE The POP-JOB in File => SERVICES.html, Pour le Devis
let popDevisService       = document.querySelector(".estimate__pop");
let openPopDevisService   = document.querySelector(".estimate__button");
let closePopDevisService  = document.querySelector(".estimate__form__close-pop");
let closeSpacePopDevisService = document.querySelector(".impact-out");

popDevisService.style.display="none";
openPopDevisService.addEventListener('click' , () => {
  document.querySelector(".estimate__pop").style.display="flex";
});

closePopDevisService.addEventListener('click' , () => {
document.querySelector(".estimate__pop").style.display="none";
});

closeSpacePopDevisService.addEventListener('click' , () => {
document.querySelector(".estimate__pop").style.display="none";
});




// POP Error in File => Services.html

let PopError = document.querySelector('.services__hero__right');
let ClosePopError = document.querySelector('.services__hero__right__closeSpace');
let OpenPopError  = document.querySelector('.services__hero__link');

PopError.style.display="none";
OpenPopError.addEventListener('click', () => {
  document.querySelector('.services__hero__right').style.display='flex';
});

ClosePopError.addEventListener('click', () => {
    document.querySelector('.services__hero__right').style.display='none';
});