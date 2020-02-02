const form = document.getElementById('feedback');
const name = document.getElementById('feedbackname');
const mail = document.getElementById('feedbackmail');
const text = document.getElementById('feedbacktext');
const fields = Array.from([name, mail, text]);

const emptyCheck = (item) => {
    wrapper = item.closest('.feedback__inputWrapper');
    if(!item.value){
        if(!wrapper.classList.contains('feedback__inputWrapper--error')){
            wrapper.classList.add('feedback__inputWrapper--error');
            return false;
        }
    } else{
        wrapper.classList.remove('feedback__inputWrapper--error');
        return true;
    }
}

const focus = (item) => {
    wrapper = item.closest('.feedback__inputWrapper');
    if(wrapper.classList.contains('feedback__inputWrapper--error')){
        wrapper.classList.remove('feedback__inputWrapper--error');
    }
    wrapper.classList.add('feedback__inputWrapper--focus');
}

const blur = (item) => {
    wrapper = item.closest('.feedback__inputWrapper');
    wrapper.classList.remove('feedback__inputWrapper--focus');
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let isFull = true;
    fields.forEach(item => {
        isFull = emptyCheck(item) && isFull;
    });

    if(isFull){
        const xhr = new XMLHttpRequest();
        xhr.open('POST', './data/feedback.json');
        xhr.send([
            {
                'name' : name.value,
                'email' : mail.value,
                'text' : text.value
            }
        ]);
    }
})

fields.forEach(item => {
    item.addEventListener('focus', function(){
        focus(item);
    })
});

fields.forEach(item => {
    item.addEventListener('blur', function(){
        blur(item);
    })
});





