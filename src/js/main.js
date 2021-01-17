const form = document.querySelector('.authorization-form');
const signIn = document.querySelector('.nav-list__link--signin');
const btnCloseForm = document.querySelector('.authorization-form__closebtn');

signIn.addEventListener('click', () => {
    form.style.display = 'block';
})

btnCloseForm.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.style.display = 'none';
})