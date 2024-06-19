let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {

    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

// let searchForm = document.querySelector('.cart-items-container');

// document.querySelector('#menu-btn').onclick = () => {

//     cartItem.classList.toggle('active');

// }


let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {

    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}




let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {

    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');


}

window.onscroll = () => {

    avbar.classList.toggle('avtive');
    searchForm.classList.toggle('active');
}

