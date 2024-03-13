const loader = document.querySelector('.loader');
const submitBtn = document.querySelector('.submit-btn');
const nameUser = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');

 
submitBtn.addEventListener('click', () => {
    if(nameUser != null){
        if(nameUser.value.length < 2){
            showAlert('name must be 2 letters long');
        } else if(!email.value.length){
            showAlert('enter your email');
        } else if(password.value.length < 6){
            showAlert('password should be 6 letters long');
        } else if(!number.value.length){
            showAlert('enter your phone number');
        } else if(!Number(number.value) || number.value.length < 1){
            showAlert('invalid number, please enter valid one');
        } else{
            loader.style.display = 'block'
            sendData('/signup', {
                nameUser: nameUser.value,
                email: email.value,
                password: password.value,
                number: number.value,
            })
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
    if(data.alert){
        showAlert(data.alert);
    } else if(data.name){
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}
