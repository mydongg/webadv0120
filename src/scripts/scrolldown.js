// переход по кнопке Скролл

const button = document.getElementById('startscroll');
const view = document.getElementById('section-1');

button.onclick = function(e) {
    e.preventDefault();
    view.scrollIntoView({
        behavior: `smooth`,
        block: `center`
    })
}

// Переход по ссылкам nav

const links = document.getElementsByClassName('nav__link');

for(i = 0; i < links.length; i++){
    current = links[i];
    current.addEventListener('click', e =>{
        e.preventDefault();
        sectionId = e.target.getAttribute('href');
        scrollToSection(sectionId);
    })
}

function scrollToSection(sectionId) {
    section = document.getElementById(`section-${sectionId}`);
    section.scrollIntoView({
        behavior: `smooth`,
        block: `center`
    })
}