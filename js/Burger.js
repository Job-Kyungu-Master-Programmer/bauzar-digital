// Burger MENU 

const icons = document.querySelectorAll('.nav-icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



// CLOSE and OPEN the pop Contact Us !!! FOR ALL PAGES

let ButtonOffset = document.querySelector("#ButtonOff");
let Offset       = document.querySelector(".pop");
let Offline      = document.querySelector(".pop__container");
let Clsepop      = document.querySelector(".pop__close");

ButtonOffset.addEventListener('click', () => {
    document.querySelector('.pop').style.display="flex";
});
Offline.addEventListener('click' , () => {
  document.querySelector('.pop').style.display="none";
});
Clsepop.addEventListener('click' , () => {
  document.querySelector('.pop').style.display="none";
})



// OPEN AND CLOSE The POP-JOB in File => About.html
let openPopJob       = document.querySelector(".teams__JobOffer__btnOffer")
let popJob           = document.querySelector(".teams__pop");
let closePopJob      = document.querySelector(".teams__pop__times");
let closeSpacePopJob = document.querySelector(".closeSpacePopJob");

openPopJob.addEventListener('click' , () => {
     document.querySelector(".teams__pop").style.display="flex";
});

closePopJob.addEventListener('click' , () => {
  document.querySelector(".teams__pop").style.display="none";
});

closeSpacePopJob.addEventListener('click' , () => {
  document.querySelector(".teams__pop").style.display="none";
});