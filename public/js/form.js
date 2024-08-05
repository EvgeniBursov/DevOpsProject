const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('.submit-btn');
const nameUser = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const conf_password = document.getElementById('conf_password');
const number = document.querySelector('#number');
const secret = document.getElementById('2fa');


submitBtn.addEventListener('click', () => {
    if (nameUser != null) {
        const namePattern = /^[A-Za-z]+$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{6,})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{9,}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;

        if (nameUser.value.length < 2) {
            showAlert('Name must be at least 2 characters long');
        } else if (!namePattern.test(nameUser.value)) {
            showAlert('Name must contain only digits');
        } else if (!emailPattern.test(email.value)) {
            showAlert('Enter a valid email');
        } else if (!passwordPattern.test(password.value)) {
            showAlert('Password must be at least 6 characters long and include at least one letter, one number, and one special character');
        } else if (conf_password.value != password.value) {
            showAlert('Passwords should match');
        } else if (!phonePattern.test(number.value)) {
            showAlert('Phone number must be exactly 10 digits');
        } else {
            loader.style.display = 'block';
            sendData('/signup', {
                nameUser: nameUser.value,
                email: email.value,
                password: password.value,
                number: number.value,
            });
        }
    } else {
        if(email.value.length < 1|| password.value.length < 1){
            showAlert('fill all the inputs')
        } else {
            loader.style.display = 'block'
            sendData('/login', {
                email: email.value,
                password: password.value,
            })
        }
    }
})

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1500);
}

const sendData = (path, data) => {
    console.log(path, data);  
    fetch(path, {
        method: "POST", 
        mode: "cors", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
    })
    .then((res) => res.json())
    .then(response => {
        processData(response);
    })
    .catch(error => {
        console.error('Error:', error);
        loader.style.display = null;
        showAlert('An error occurred while sending data.');
    });
}

const processData = (data) => {
    loader.style.display = null;
    console.log("Processing data", data);
    
    if (data.alert) {
        showAlert(data.alert);
    } else if (data.name && data.access === false) {
        const twoFaForm = document.getElementById('2fa-form');
        const form = document.getElementById('signup-form');
        const accessBtn = document.getElementById('access-account-btn');
        const loginform = document.getElementById('login-form');

        if (form && twoFaForm || loginform && twoFaForm ) {
            if(form){
                form.style.display = 'none' 
            }else{
                loginform.style.display = 'none';
            }
            twoFaForm.style.display = 'block';
            if (accessBtn) {
                accessBtn.addEventListener('click', async () => {
                    try {
                        sendData('/verify', {
                            verify: secret.value,
                            email: data.email,
                        });
                    } catch (error) {
                        console.error('Error verifying TOTP:', error);
                        showAlert('Error verifying TOTP. Please try again.');
                    }
                });
            } else {
                console.error('Access button not found');
            }
        } else {
            console.error('Form or 2FA form not found');
        }
    } else if (data.name && data.access === true) {
        console.log("I'm here line 153 front");
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    } else {
        console.error('Unexpected data state');
    }
}