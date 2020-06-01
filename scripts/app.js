let userRole = {
    // newUser: '',
    allNew: isItNew()
    // isLogged: ''
};

const fontHeader = document.querySelector('.form-heading');
const confirmPassword = document.querySelector('.password-confirm');
const formConfirmBtn = document.querySelector('.form-confirm');
let users = [];

function showFormInfo() {
    formConfirmBtn.addEventListener('click', showInfo);

    function showInfo(event) {
        event.preventDefault(); // prevent autosubmitting

        let userData = {
            login: document.querySelector('.user-login').value,
            password: document.querySelector('.user-password').value,
            id: Date.now()
        }
        users.push(userData);
        document.querySelector('form').reset();
        console.log(users);
    }
}
showFormInfo();

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

