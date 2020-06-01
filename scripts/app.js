let userRole = {
    // newUser: '',
    allNew: isItNew()
    // isLogged: ''
};

const fontHeader = document.querySelector('.form-heading');
const confirmPassword = document.querySelector('.password-confirm');
const formConfirmBtn = document.querySelector('.form-confirm');

let userData = {};

function showFormInfo() {
    formConfirmBtn.addEventListener('click', showInfo);

    function showInfo(event) {
        event.preventDefault(); // prevent autosubmitting
        const userLogin = document.querySelector('.user-login').value;
        const userPassword = document.querySelector('.user-password').value;

        userData = {
            login: userLogin,
            password: userPassword
        }

            console.log(userData.login);
            console.log(userData.password);
    }
}
showFormInfo();
console.log(userData);

function isItNew() {
    const checkBox = document.querySelector('.have-acc');
    checkBox.addEventListener('change', newUserCheck);

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