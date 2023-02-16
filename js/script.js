const navbarFixed = document.querySelector('.navbar-fixed')
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

const hum = document.querySelector('#humberger')
const navMenu = document.querySelector('#nav-menu')

hum.addEventListener('click', function() {
    hum.classList.toggle('humberger-active')
    navMenu.classList.toggle('hidden')

})