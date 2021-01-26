const form = document.querySelector('.auth-form');
const signIn = document.querySelector('.nav-list__link--signin');
const btnCloseForm = document.querySelector('.auth-form__closebtn');

signIn.addEventListener('click', () => {
    form.style.display = 'block';
})

btnCloseForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.style.display = 'none';
})

const onEscKeyDown = (evt) => {
    if (evt.keyCode === 27) {
        form.style.display = 'none';
    }
    document.removeEventListener('keydown', onEscKeyDown);
}

document.addEventListener('keydown', onEscKeyDown);