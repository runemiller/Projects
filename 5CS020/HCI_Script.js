const products = [{
        id: 1,
        name: 'Doritos Spicy Nacho 180g',
        price: 2.00,
        category: 'Food',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/doritos.png',
    },
    {
        id: 2,
        name: 'Flame Beanie',
        price: 4.99,
        category: 'Apparel',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/flamebeanie.png',
    },
    {
        id: 3,
        name: 'Flaming Hot Cheetos 150g',
        price: 1.80,
        category: 'Food',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/cheetos.png',
    },
    {
        id: 4,
        name: 'Hang My Heart T-Shirt',
        price: 15.00,
        category: 'Apparel',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/hangmyheart.png',
    },
    {
        id: 5,
        name: 'Monster Energy Juiced Khatoic 500ml',
        price: 1.63,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/khaotic.png',
    },
    {
        id: 6,
        name: 'Monster Energy Ultra Mango Fiesta 500ml',
        price: 1.50,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/mangofiesta.png',
    },
    {
        id: 7,
        name: 'Monster Energy Original 500ml',
        price: 1.63,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/original.png',
    },
    {
        id: 8,
        name: 'Mixed Emotions T-Shirt',
        price: 14.50,
        category: 'Apparel',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/mixedemotions.png',
    },
    {
        id: 9,
        name: 'Monster Energy Ultra Paradise 500ml',
        price: 1.50,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/paradise.png',
    },
    {
        id: 10,
        name: 'Monster Energy Mega Original 553ml',
        price: 1.70,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/mega.png',
    },
    {
        id: 11,
        name: 'Coca-Cola Zero Sugar 500ml',
        price: 1.40,
        category: 'Drinks',
        imgsrc: "https://mi-linux.wlv.ac.uk/~2112834/5CS020/cokezero.png"
    },
    {
        id: 12,
        name: 'Rose T-Shirt',
        price: 22.30,
        category: 'Apparel',
        imgsrc: "https://mi-linux.wlv.ac.uk/~2112834/5CS020/rose.png"
    },
];

const Foodproducts = [{
        id: 1,
        name: 'Doritos Spicy Nacho 180g',
        price: 2.00,
        category: 'Food',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/doritos.png',
    },
    {
        id: 3,
        name: 'Flaming Hot Cheetos 150g',
        price: 1.80,
        category: 'Food',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/cheetos.png',
    },
];

const Apparelproducts = [{
        id: 2,
        name: 'Flame Beanie',
        price: 4.99,
        category: 'Apparel',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/flamebeanie.png',
    },
    {
        id: 4,
        name: 'Hang My Heart T-Shirt',
        price: 15.00,
        category: 'Apparel',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/hangmyheart.png',
    },
    {
        id: 8,
        name: 'Mixed Emotions T-Shirt',
        price: 14.50,
        category: 'Apparel',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/mixedemotions.png',
    },
    {
        id: 12,
        name: 'Rose T-Shirt',
        price: 22.30,
        category: 'Apparel',
        imgsrc: "https://mi-linux.wlv.ac.uk/~2112834/5CS020/rose.png"
    },
];

const Drinksproducts = [{
        id: 5,
        name: 'Monster Energy Juiced Khatoic 500ml',
        price: 1.63,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/khaotic.png',
    },
    {
        id: 6,
        name: 'Monster Energy Ultra Mango Fiesta 500ml',
        price: 1.50,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/mangofiesta.png',
    },
    {
        id: 7,
        name: 'Monster Energy Original 500ml',
        price: 1.63,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/original.png',
    },
    {
        id: 9,
        name: 'Monster Energy Ultra Paradise 500ml',
        price: 1.50,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/paradise.png',
    },
    {
        id: 10,
        name: 'Monster Energy Mega Original 553ml',
        price: 1.70,
        category: 'Drinks',
        imgsrc: 'https://mi-linux.wlv.ac.uk/~2112834/5CS020/mega.png',
    },
    {
        id: 11,
        name: 'Coca-Cola Zero Sugar 500ml',
        price: 1.40,
        category: 'Drinks',
        imgsrc: "https://mi-linux.wlv.ac.uk/~2112834/5CS020/cokezero.png"
    },
];

let basket = JSON.parse(localStorage.getItem('basket')) || [];

const productList = document.getElementById('product-list');
const displaytype = document.getElementById('display')
const basketList = document.getElementById('basket-list');
const total = document.getElementById('total');

function displayProducts() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", "125");
        image.setAttribute("width", "105");
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('All');
}

function displayProductsFood() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < Foodproducts.length; i++) {
        const product = Foodproducts[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", "125");
        image.setAttribute("width", "105");
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('Food');
}

function displayProductsApparel() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < Apparelproducts.length; i++) {
        const product = Apparelproducts[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", "125");
        image.setAttribute("width", "105");
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('Apparel');
}

function displayProductsDrinks() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < Drinksproducts.length; i++) {
        const product = Drinksproducts[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", "125");
        image.setAttribute("width", "105");
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('Drinks');
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
        price.textContent = `£${product.price.toFixed(2)}`;
        quantity.textContent = ` x${product.quantity} `;
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

    total.textContent = `£${totalPrice.toFixed(2)}`;
}

const AllButton = document.getElementById("All");
const FoodButton = document.getElementById("Food");
const ApparelButton = document.getElementById("Apparel");
const DrinksButton = document.getElementById("Drinks");
displayProducts();
AllButton.addEventListener("click", () => {
    displayProducts();
});
FoodButton.addEventListener("click", () => {
    displayProductsFood();
})
ApparelButton.addEventListener("click", () => {
    displayProductsApparel();
})
DrinksButton.addEventListener("click", () => {
    displayProductsDrinks();
})
displayBasket();
displayTotal();

//checkoutBtn.addEventListener('click', confirmAction);

function onCheckoutClicked() {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        const product = basket[i];
        totalPrice += product.price * product.quantity;
    }

    alert(`You have been charged £${totalPrice.toFixed(2)} for your purchase`);

    basket = [];
    localStorage.removeItem('basket');
    displayBasket();
    displayTotal();
}

const confirmAction = () => {
    const response = confirm("You are about to make a purchase, are you sure you want to proceed?");

    if (response) {
        onCheckoutClicked();
    } else {
        alert("Transaction Cancelled");
    }
}