const open = document.getElementById('headermenu-open');
const close = document.getElementById('headermenu-close');
const menu = document.getElementById('sidemenu');

open.onclick = function() {
    if(menu.classList.contains('sidemenu--open')){
        menu.classList.remove('sidemenu--open');
    } else {
        menu.classList.add('sidemenu--open');
    }
}

close.onclick = function() {
    menu.classList.remove('sidemenu--open');
}

window.addEventListener('scroll', function() {
    if(menu.classList.contains('sidemenu--open')){
        menu.classList.remove('sidemenu--open');
    }
})