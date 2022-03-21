console.log('Welcome')

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit',e => {
    e.preventDefault();

    const username = form.username.value;
    const usernamePattern = /^[a-z A-Z]{6,12}$/;

    if(usernamePattern.test(username)){
        feedback.textContent ='this username is valid';
    }
        else{

            feedback.textContent ='this username is not valid';
        }

});