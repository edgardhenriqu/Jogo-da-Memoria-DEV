const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
     
        button.setAttribute('disabled', '');
    

}


input.addEventListener('input', validateInput);