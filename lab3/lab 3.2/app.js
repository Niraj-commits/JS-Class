const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const feedback1 = document.querySelector('.feedback1');

form.addEventListener('submit',e => {
    e.preventDefault();

    const username = form.username.value;
    const number = form.number.value;
    const usernamePattern = /^[a-z A-Z]{6,12}$/;
    const numberPattern = /^[0-9]{10}$/;


    if(usernamePattern.test(username)){
        feedback.textContent ='this username is valid';
    }
        else{

            feedback.textContent ='this username is not valid';
        }
   if(numberPattern.test(number)){
        feedback1.textContent ='this number is valid';
    }
        else{

            feedback1.textContent ='this number is not valid';
        }

});