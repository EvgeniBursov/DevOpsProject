
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="../img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn" id="search-btn">search</button>
                </div>
                <a>
                <img src="../img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Log in as, name</p>
                    <button class="reg_btn" id="user-btn" >Register</button>
                    <button class="btn" id="user-btn">Log In</button>
                </div>
                </a>

                <a>
                <img src="../img/cart.png" id="cart-img" alt="">
<<<<<<< HEAD
                <span>0</span>
                <div class="cart-popup hide">
                    <p class="account-info">Your Order</p>
                    <ul class="cart-items-list"></ul>
                    <p class="total">Total: $</p>
=======
                <span id="cart-count">0</span>
                <div class="cart-popup hide">
                    <p class="account-info"><h1>Your Order</h1></p>
                    <ul class="cart-items-list"></ul>
                    <p class="total">Total: $<span id="total">0.00</span></p>
>>>>>>> feature_version_3
                    <button class="buy_btn" id="buy-btn" >Buy</button>
                </div>
                </a>


                </div>            
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href='../pages/index.html' class="link">home</a></li>
        <li class="link-item"><a href="#" class="link" id="pets-link">pets</a></li>
        <li class="link-item"><a href="#" class="link">clothing</a></li>
        <li class="link-item"><a href="#" class="link">electronics</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
    `;
}

createNav();

const userImageButton = document.querySelector('#user-img');
const userPop = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const registerBtn = document.querySelector('.reg_btn');
const loginBtn = document.querySelector('.btn');
const actionBtn = document.querySelector('#user-btn');
const searchBtn = document.querySelector('.search-btn')
const cartPop = document.querySelector('.cart-popup');
const cartImg = document.querySelector('#cart-img')

<<<<<<< HEAD
=======



>>>>>>> feature_version_3
cartImg.addEventListener('click', () => {
    cartPop.classList.toggle('hide')
})

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide')
})

registerBtn.addEventListener('click', () => {
    window.location.href = '../pages/signup.html';
})

loginBtn.addEventListener('click', () => {
    window.location.href = '../pages/login.html';
})

searchBtn.addEventListener('click', () => {
    window.location.href = '../pages/search.html'
})


<<<<<<< HEAD
=======

>>>>>>> feature_version_3
window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null)

    if(user != null){
        popuptext.innerHTML = `log in as, ${user.name}`
        actionBtn.innerHTML = 'log-out'
        loginBtn.style.display = 'none'
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear()
            location.reload()
        })
    } else {
        popuptext.innerHTML = 'Hello guest '
    }
} 


window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null)

    if(user != null){
<<<<<<< HEAD
        popuptext.innerHTML = `log in as, ${user.name}`
=======
        popuptext.innerHTML = `<h4>log in as, ${user.name}</h4>`
>>>>>>> feature_version_3
        actionBtn.innerHTML = 'log-out'
        loginBtn.style.display = 'none'
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear()
            location.reload()
        })
    } else {
<<<<<<< HEAD
        popuptext.innerHTML = 'Hello guest '
=======
        popuptext.innerHTML = '<h4>Hello guest</h4>'
>>>>>>> feature_version_3
    }
} 

/*
                <a href="../pages/shoppingCart.html"><img src="../img/cart.png" id="cart-btn" alt=""></a>
                <span>0</span>
*/ 