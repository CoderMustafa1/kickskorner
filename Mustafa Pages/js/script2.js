
const top_items_count = document.querySelector('.items-count');
const bottom_items_count = document.querySelector('.bottom-items-count');
const exit = document.querySelector('.exit');
const bucket = document.querySelector('.cart').style;
const items = document.querySelectorAll('.items');

let count = 0;
let cloth_cart = [];

function openBucket() {
    bucket.visibility = "visible";
    bucket.opacity = "1";
    bucket.zIndex = "9";
    bucket.transition = "all 0.5s";
}

exit.addEventListener('click', () => {
    bucket.visibility = "hidden";
    bucket.opacity = "0";
    bucket.zIndex = "-9";
    bucket.transition = "all 0.5s";
});

function initCart() {
    if (localStorage.cloth_cart) {
        cloth_cart = JSON.parse(localStorage.cloth_cart);
        showCart();
    }
}

let qty = 1;

for (let i = 0; i <= items.length - 1; i++) {
    items[i].onclick = e => {
        count = count + 1;
        const itemName = e.target.dataset.item;
        const price = e.target.dataset.price;
        addToCart(itemName, price, qty);
        top_items_count.innerHTML = count;
        bottom_items_count.innerHTML = count;
    }
}

function addToCart(itemName, price, qty) {
    for (let i in cloth_cart) {
        if (cloth_cart[i].Product == itemName) {
            cloth_cart[i].Qty += qty;
            showCart();
            saveCart();
            return;
        }
    }

    const itemArray = {
        Product: itemName,
        Price: price,
        Qty: qty
    };

    cloth_cart.push(itemArray);
    saveCart();
    showCart();
}

function saveCart() {
    if (window.localStorage) {
        localStorage.cloth_cart = JSON.stringify(cloth_cart);
    }
}

function deleteItem(index) {
    cloth_cart.splice(index, 1);
    showCart();
    saveCart();
}

function showCart() {
    const _ul = document.querySelector('#ul');
    _ul.innerHTML = "";

    if (cloth_cart.length === 0) {
        return;
    }

    for (let i in cloth_cart) {
        const item = cloth_cart[i];
        const li = document.createElement("li");
        const row = `<span>${item.Product}</span><span onclick='deleteItem(${i})'><i class='fas fa-trash'></i></span><span>${item.Qty}</span><span>${item.Qty * item.Price}</span>`;
        li.innerHTML += row;
        _ul.appendChild(li);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initCart();
});
