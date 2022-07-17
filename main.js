var  navMenu = document.getElementById('nav-menu')
// Menuyu kapatmak icin buton
var menuClose = document.getElementById('menu-close')
// Menunu kendisi
var menuToggle = document.getElementById('menu-toggle')


// Click oldugu anda 
menuToggle.addEventListener('click', function() {
    // Menuye 'active' class ver ve bu class icin style yaz ccsde
    filter.classList.add('active')
})
menuClose.addEventListener('click', function() {
    // Menuye 'active' class sil
    filter.classList.remove('active')
})