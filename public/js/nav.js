
const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                <img src="img/user.png" id="user-img" alt="">
                <div class="login-logout-popup hide">
                    <p class="account-info">Log in as, name</p>
                    <button class="reg_btn" id="user-btn" >Register</button>
                    <button class="btn" id="user-btn">Log In</button>
                </div>
                </a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">clothing</a></li>
        <li class="link-item"><a href="#" class="link">pets</a></li>
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

userImageButton.addEventListener('click', () => {
    userPop.classList.toggle('hide')
})

registerBtn.addEventListener('click', () => {
    window.location.href = 'signup.html';
})

loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
})