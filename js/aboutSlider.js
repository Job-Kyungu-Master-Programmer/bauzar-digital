



// Transformation des Elements de gauche a droite => about.html ->> aboutSlider 

let blocEducatif       = document.querySelector('.bottomCol-1');
let blocMedecine       = document.querySelector('.bottomCol-2');
let blocEntrperise     = document.querySelector('.bottomCol-3');
let blocParticulier    = document.querySelector('.bottomCol-4');
let ButtonEntreprise   = document.querySelector('.btnEntreprise');
let ButtonParticulier  = document.querySelector('.btnParticulier');
let ButtonEducatif     = document.querySelector('.btnEducatif');
let ButtonMedecine     = document.querySelector('.btnMedecine');

ButtonMedecine.addEventListener('click', () => { //  --> ITEM 1
    document.querySelector('.bottomCol-1').style.transform = 'translateX(-100%)';
    document.querySelector('.bottomCol-2').style.transform = 'translateX(-100%)';
    ButtonMedecine.classList.toggle('colMede');
});

ButtonEducatif.addEventListener('click', () => {//  --> ITEM 2
    document.querySelector('.bottomCol-1').style.transform = 'translateX(0)';
    document.querySelector('.bottomCol-2').style.transform = 'translateX(100%)';
});

ButtonParticulier.addEventListener('click', () => {// --> ITEM 3
    document.querySelector('.bottomCol-3').style.transform = 'translateX(-100%)';
    document.querySelector('.bottomCol-4').style.transform = 'translateX(-100%)';
});


ButtonEntreprise.addEventListener('click', () => {// --> ITEM 4
    document.querySelector('.bottomCol-3').style.transform = 'translateX(0%)';
    document.querySelector('.bottomCol-4').style.transform = 'translateX(100%)';
});
