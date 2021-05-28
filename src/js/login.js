'use strict';
const inputNameLogin = document.querySelector('#input-name');
const buttonLogin = document.querySelector('#button-login');
//Functions
const validateInput = () => {
    let isValidate = false;
    if (inputNameLogin.value.length === 0) {
        inputNameLogin.classList.add('error');
        setTimeout(() => {
            inputNameLogin.classList.remove('error');
        }, 300);
    } else if (inputNameLogin.value.length > 0) {
        isValidate = true;
    }
    return isValidate;
}

buttonLogin.addEventListener('click', () => {
    let isValidate = false;
    isValidate = validateInput();
    if (isValidate === true) {
        localStorage.clear();
        localStorage.setItem(0, inputNameLogin.value);
        let audio = new Audio('assets/sounds/playbutton.mp3');
        audio.play();
        setTimeout(()=>{
            window.open('pages/championSelect.html', '_self');
        },1000);
        
    }
});