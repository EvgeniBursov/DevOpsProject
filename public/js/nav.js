
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
                <a href="../pages/shoppingCart.html"><img src="../img/cart.png" id="cart-btn" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
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


window.onload = () =>{
    let user = JSON.parse(sessionStorage.user || null)
    console.log(JSON.parse(sessionStorage.user))
    console.log(sessionStorage.user)

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