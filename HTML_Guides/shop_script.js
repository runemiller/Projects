const products = [{
        id: 1,
        name: 'Product 1',
        price: 10.00,
    },
    {
        id: 2,
        name: 'Product 2',
        price: 20.00,
    },
    {
        id: 3,
        name: 'Product 3',
        price: 30.00,
    },
    {
        id: 4,
        name: 'Product 4',
        price: 40.00,
    },
    {
        id: 5,
        name: 'Product 5',
        price: 50.00,
    },
];

let basket = JSON.parse(localStorage.getItem('basket')) || [];

const productList = document.getElementById('product-list');
const basketList = document.getElementById('basket-list');
const total = document.getElementById('total');
const checkoutBtn = document.getElementById('checkout-btn');

function displayProducts() {
    productList.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const price = document.createElement('span');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = product.name;
        price.textContent = product.price.toFixed(2);
        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
}

function addToBasket(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    let productIndex = -1;
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].id === productId) {
            productIndex = i;
            break;
        }
    }

    if (productIndex !== -1) {
        basket[productIndex].quantity++;
    } else {
        const product = products.find((product) => product.id === productId);
        product.quantity = 1;
        basket.push(product);
    }

    localStorage.setItem('basket', JSON.stringify(basket));

    displayBasket();
    displayTotal();
}

function removeProduct(event) {
    const productId = parseInt(event.target.getAttribute('data-id'));

    basket = basket.filter((product) => product.id !== productId);

    localStorage.setItem('basket', JSON.stringify(basket));

    displayBasket();
    displayTotal();
}

function displayBasket() {
    basketList.innerHTML = '';

    for (let i = 0; i < basket.length; i++) {
        const product = basket[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const price = document.createElement('span');
        const quantity = document.createElement('span');
        const removeBtn = document.createElement('button');

        h3.textContent = product.name;
        price.textContent = product.price.toFixed(2);
        quantity.textContent = `x${product.quantity}`;
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('data-id', product.id);

        removeBtn.addEventListener('click', removeProduct);

        li.appendChild(h3);
        li.appendChild(price);
        li.appendChild(quantity);
        li.appendChild(removeBtn);
        basketList.appendChild(li);
    }
}

function displayTotal() {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        const product = basket[i];
        totalPrice += product.price * product.quantity;
    }

    total.textContent = totalPrice.toFixed(2);
}

displayProducts();
displayBasket();
displayTotal();

checkoutBtn.addEventListener('click', onCheckoutClicked);

function onCheckoutClicked() {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        const product = basket[i];
        totalPrice += product.price * product.quantity;
    }

    alert(`You have been charged ${totalPrice.toFixed(2)} for your purchase`);

    basket = [];
    localStorage.removeItem('basket');
    displayBasket();
    displayTotal();
}