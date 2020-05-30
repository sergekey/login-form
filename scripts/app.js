let userRole = {
                newUser: '',
                allNew: isItNew(),
                isLogged: ''
            };

const fontHeader = document.querySelector('.form-heading');

const confirmPassword = document.querySelector('.password-confirm');

function isItNew() {
    let isNew = document.querySelector("input[name=userLog]");

    isNew.addEventListener('change', newUserCheck);

    function newUserCheck() {
        if (this.checked) {
            userRole.newUser = false;
            fontHeader.innerText = 'Log in!';
            confirmPassword.style.display = 'none';
        } else {
            userRole.newUser = true;
            fontHeader.innerText = 'Sign up!';
            confirmPassword.style.display = 'block';
        }
    };
}



