const buttonPortinho = document.querySelector('.button-portinho');
const buttonFund1= document.querySelector('.button-fund1');
const buttonFund2 = document.querySelector('.button-fund2');
const buttonEM = document.querySelector('.button-em');

const textoPortinho = document.querySelectorAll('.texto-portinho');
const textoFund1 = document.querySelectorAll('.texto-fund1');
const textoFund2 = document.querySelectorAll('.texto-fund2');
const textoEM = document.querySelectorAll('.texto-em');




buttonPortinho.addEventListener('click', function() {
    buttonPortinho.classList.add('active');
    buttonFund1.classList.remove('active');
    buttonFund2.classList.remove('active');
    buttonEM.classList.remove('active');

    textoPortinho[0].classList.add('active');
    textoPortinho[1].classList.add('active');
    textoFund1[0].classList.remove('active');
    textoFund1[1].classList.remove('active');
    textoFund2[0].classList.remove('active');
    textoFund2[1].classList.remove('active');
    textoEM[0].classList.remove('active');
    textoEM[1].classList.remove('active');
})

buttonFund1.addEventListener('click', function() {
    buttonPortinho.classList.remove('active');
    buttonFund1.classList.add('active');
    buttonFund2.classList.remove('active');
    buttonEM.classList.remove('active');

    textoPortinho[0].classList.remove('active');
    textoPortinho[1].classList.remove('active');
    textoFund1[0].classList.add('active');
    textoFund1[1].classList.add('active');
    textoFund2[0].classList.remove('active');
    textoFund2[1].classList.remove('active');
    textoEM[0].classList.remove('active');
    textoEM[1].classList.remove('active');
})

buttonFund2.addEventListener('click', function() {
    buttonPortinho.classList.remove('active');
    buttonFund1.classList.remove('active');
    buttonFund2.classList.add('active');
    buttonEM.classList.remove('active');

    textoPortinho[0].classList.remove('active');
    textoPortinho[1].classList.remove('active');
    textoFund1[0].classList.remove('active');
    textoFund1[1].classList.remove('active');
    textoFund2[0].classList.add('active');
    textoFund2[1].classList.add('active');
    textoEM[0].classList.remove('active');
    textoEM[1].classList.remove('active');
})

buttonEM.addEventListener('click', function() {
    buttonPortinho.classList.remove('active');
    buttonFund1.classList.remove('active');
    buttonFund2.classList.remove('active');
    buttonEM.classList.add('active');

    textoPortinho[0].classList.remove('active');
    textoPortinho[1].classList.remove('active');
    textoFund1[0].classList.remove('active');
    textoFund1[1].classList.remove('active');
    textoFund2[0].classList.remove('active');
    textoFund2[1].classList.remove('active');
    textoEM[0].classList.add('active');
    textoEM[1].classList.add('active');
})


const menuHamburger = document.getElementById('menu-hamburger');
const closeMenu = document.getElementById('close-menu');
const menuMobile = document.getElementById('menu-mob');

menuHamburger.addEventListener('click', function() {
    menuMobile.classList.add('active-menu');
    console.log('ahaha')
});

closeMenu.addEventListener('click', function() {
    menuMobile.classList.remove('active-menu')
    console.log('oi')
})

