const button = document.getElementById('startscroll');
const view = document.getElementById('about');

button.onclick = function(e) {
    e.preventDefault();
    view.scrollIntoView({
        behavior: `smooth`,
        block: `center`
    })
}