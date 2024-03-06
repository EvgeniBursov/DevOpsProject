//import User from "../../models/user.js"
const loader = document.querySelector('.loader');
// select inputs 
const submitBtn = document.querySelector('.submit-btn');
const nameUser = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const number = document.querySelector('#number');

 
submitBtn.addEventListener('click', () => {
    if(nameUser.value.length <1){
        showAlert('name must be 3 letters long');
    } else if(!email.value.length){
        showAlert('enter your email');
    } else if(password.value.length < 1){
        showAlert('password should be 8 letters long');
    } else if(!number.value.length){
        showAlert('enter your phone number');
    } else if(!Number(number.value) || number.value.length < 1){
        showAlert('invalid number, please enter valid one');
    } else{
        loader.style.display = 'block'
        sendData('http://localhost:10000/signup', {
            nameUser: nameUser.value,
            email: email.value,
            password: password.value,
            number: number.value,
        })
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

/*const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res) => res.json())
    .then(response => {
        processData(response);
    })
}*/

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
        location.replace('/public/index.html');
    }
}

/*const response = await fetch(url, {
    method: "POST", 
    mode: "cors", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  })*/

