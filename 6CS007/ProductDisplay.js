function openNav() {
	document.getElementById("SideNav").style.width = "90%";
	document.getElementById("main").style.marginLeft = "90%";
}

function closeNav() {
	document.getElementById("SideNav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

function openSettings() {
	document.getElementById("Settings").style.width = "90%";
	document.getElementById("main").style.marginLeft = "90%";
}

function closeSettings() {
	document.getElementById("Settings").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

function goToHome() {
	window.location = 'http://localhost/6CS007/Home.html';
}

function keyboardAcc(event) {
	let key = event.key;
	if (key == "S") {
		openSettings();
	}
	else if (key == "D") {
		closeSettings();
	}
	else if (key == "N") {
		openNav();
	}
	else if (key == "M") {
		closeNav();
	}
	else if (key == "H") {
		goToHome();
	}
	else {

	}
}

function setUpColor() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');
	const title = document.getElementById('title');
	const icn = document.getElementById('icn');
	const icn2 = document.getElementById('icn2');
	const header = document.getElementById('header');
	const settings = document.getElementById('Settings');
    const nav = document.getElementById('nav');
    const all = document.getElementById('All');
    const books = document.getElementById('Books');
    const marks = document.getElementById('Marks');
    const pens = document.getElementById('Pens');
	
	checkboxes.forEach(function(checkbox) {
		checkbox.addEventListener('change', function() {
			checkboxes.forEach(function(cb) {
				if (cb !== checkbox) {
					cb.checked = false;
				}
			});
			if (document.getElementById('colorCheckboxOrig').checked) {
				Tcolor = 'orange';
				Bcolor = '#329acd';
			} else if (document.getElementById('colorCheckboxDeutan').checked) {
				Tcolor = '#ff6a00';
				Bcolor = '#216486';
			} else if (document.getElementById('colorCheckboxTritan').checked) {
				Tcolor = '#ffd000';
				Bcolor = '#3dbeff';
			} else if (document.getElementById('colorCheckboxProtan').checked) {
				Tcolor = '#ff9500';
				Bcolor = '#32cd9c';
			}
			title.style.color = Tcolor;
			icn.style.color = Tcolor;
			icn2.style.color = Tcolor;
			header.style.backgroundColor = Bcolor;
			settings.style.backgroundColor = Tcolor;
            nav.style.backgroundColor = Bcolor;
            all.style.color = Tcolor;
            all.style.backgroundColor = Bcolor;
            books.style.color = Tcolor;
            books.style.backgroundColor = Bcolor;
            marks.style.color = Tcolor;
            marks.style.backgroundColor = Bcolor;
            pens.style.color = Tcolor;
            pens.style.backgroundColor = Bcolor;
			localStorage.setItem('selectedTColor', Tcolor); 
			localStorage.setItem('selectedBColor', Bcolor); 
		});
	});

	const storedTColor = localStorage.getItem('selectedTColor');
	const storedBColor = localStorage.getItem('selectedBColor');
    if (storedTColor && storedBColor) {
		title.style.color = storedTColor;
		icn.style.color = storedTColor;
		icn2.style.color = storedTColor;
		header.style.backgroundColor = storedBColor;
		settings.style.backgroundColor = storedTColor;
        nav.style.backgroundColor = storedBColor;
        all.style.color = storedTColor;
        all.style.backgroundColor = storedBColor;
        books.style.color = storedTColor;
        books.style.backgroundColor = storedBColor;
        marks.style.color = storedTColor;
        marks.style.backgroundColor = storedBColor;
        pens.style.color = storedTColor;
        pens.style.backgroundColor = storedBColor;
    }
}

window.addEventListener('load', setUpColor);

function setupText() {
    const fontSizeRange = document.getElementById('fontSizeRange');
    const textA = document.getElementById('CTSA');
	const textB = document.getElementById('CTSB');
	const textC = document.getElementById('CTSC');
	const textD = document.getElementById('CTSD');
	const textE = document.getElementById('CTSE');
	const textF = document.getElementById('CTSF');
	const textG = document.getElementById('CTSG');
	const textH = document.getElementById('MainBody');
	const textI = document.getElementById('header');
	const textJ = document.getElementById('icn');
	const textK = document.getElementById('icn2');

    fontSizeRange.addEventListener('input', function() {
        textA.style.fontSize = this.value + 'px';
		textB.style.fontSize = this.value + 'px';
		textC.style.fontSize = this.value + 'px';
		textD.style.fontSize = this.value + 'px';
		textE.style.fontSize = this.value + 'px';
		textF.style.fontSize = this.value + 'px';
		textG.style.fontSize = this.value + 'px';
		textH.style.fontSize = this.value + 'px';
		textI.style.fontSize = this.value + 'px';
		textJ.style.fontSize = this.value + 'px';
		textK.style.fontSize = this.value + 'px';
        localStorage.setItem('selectedFontSize', this.value);
    });

    const storedFontSize = localStorage.getItem('selectedFontSize');
    if (storedFontSize) {
        textA.style.fontSize = storedFontSize + 'px';
		textB.style.fontSize = storedFontSize + 'px';
		textC.style.fontSize = storedFontSize + 'px';
		textD.style.fontSize = storedFontSize + 'px';
		textE.style.fontSize = storedFontSize + 'px';
		textF.style.fontSize = storedFontSize + 'px';
		textG.style.fontSize = storedFontSize + 'px';
		textH.style.fontSize = storedFontSize + 'px';
		textI.style.fontSize = storedFontSize + 'px';
		textJ.style.fontSize = storedFontSize + 'px';
		textK.style.fontSize = storedFontSize + 'px';
        fontSizeRange.value = storedFontSize;
    }
}

window.addEventListener('load', setupText);

function popUp() {
	var popup = document.getElementById('myPopup');
	popup.classList.toggle('show');
}

function popUp2() {
	var popup = document.getElementById('myPopup2');
	popup.classList.toggle('show');
}

const products = [{
        id: 1,
        name: 'Scythe',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/scythe.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 2,
        name: 'The Wise Mans Fear',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/wisemansfear.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 3,
        name: 'Death Note',
        price: 11.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/deathnote.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 4,
        name: 'Sign Here',
        price: 8.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/signhere.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 5,
        name: 'Rising Sun',
        price: 2.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/sun.jpeg',
		height: 240,
		width: 98,
    },
    {
        id: 6,
        name: 'V-Sign',
        price: 4.49,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/vsign.jpeg',
		height: 50,
		width: 400,
    },
    {
        id: 7,
        name: 'Good Omens',
        price: 7.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/goodomens.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 8,
        name: 'Carche Leman Ballpoint',
        price: 10.50,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/carchelemanbllpt.jpeg',
		height: 50,
		width: 400,
    },
    {
        id: 9,
        name: 'Misery',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/misery.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 10,
        name: 'Helpmeet',
        price: 8.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/helpmeet.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 11,
        name: 'Alphabet',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/alphabet.jpeg',
		height: 240,
		width: 70,
    },
    {
        id: 12,
        name: 'Alien',
        price: 7.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/alien.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 13,
        name: 'Authority',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/authority.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 14,
        name: 'Tomorrow and Tomorrow and Tomorrow',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/ttt.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 15,
        name: 'Metro 2033',
        price: 8.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/metro2033.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 16,
        name: 'Dirty Heads',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/dirtyheads.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 17,
        name: 'Uzumaki',
        price: 13.99,
        category: 'Hardback',
        imgsrc: 'http://localhost/6CS007/products/books/uzumaki.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 18,
        name: 'V-Pen Fountain',
        price: 10.50,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/vpenfnt.jpeg',
		height: 50,
		width: 400,
    },
	{
        id: 19,
        name: 'Acceptance',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/acceptance.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 20,
        name: 'Battle Royale',
        price: 11.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/battleroyale.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 21,
        name: 'Annihilation',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/annihilation.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 22,
        name: 'Dinosaurs',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/dinosaurs.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 23,
        name: 'Aerial',
        price: 1.99,
        category: 'Bookmarks',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/aerial.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 24,
        name: 'Celestial',
        price: 2.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/celestial.jpeg',
		height: 240,
		width: 98,
    },
	{
        id: 25,
        name: 'The Name of the Wind',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/nameofthewind.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 26,
        name: 'All-Star Fountain',
        price: 11.50,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/alstarfnt.jpeg',
		height: 50,
		width: 400,
    },
	{
        id: 27,
        name: 'Solar System',
        price: 2.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/solarsystem.jpeg',
		height: 240,
		width: 98,
    },
	{
        id: 28,
        name: 'Salems Lot',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/salemslot.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 29,
        name: 'Great Wave',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/greatwave.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 30,
        name: 'Owl',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/owl.jpeg',
		height: 240,
		width: 70,
    },
];

const Bookproducts = [{
        id: 1,
        name: 'Scythe',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/scythe.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 2,
        name: 'The Wise Mans Fear',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/wisemansfear.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 3,
        name: 'Death Note',
        price: 11.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/deathnote.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 4,
        name: 'Sign Here',
        price: 8.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/signhere.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 7,
        name: 'Good Omens',
        price: 7.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/goodomens.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 9,
        name: 'Misery',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/misery.jpeg',
		height: 235,
		width: 155,
    },
    {
        id: 10,
        name: 'Helpmeet',
        price: 8.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/helpmeet.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 12,
        name: 'Alien',
        price: 7.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/alien.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 13,
        name: 'Authority',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/authority.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 14,
        name: 'Tomorrow and Tomorrow and Tomorrow',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/ttt.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 15,
        name: 'Metro 2033',
        price: 8.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/metro2033.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 16,
        name: 'Dirty Heads',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/dirtyheads.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 17,
        name: 'Uzumaki',
        price: 13.99,
        category: 'Hardback',
        imgsrc: 'http://localhost/6CS007/products/books/uzumaki.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 19,
        name: 'Acceptance',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/acceptance.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 20,
        name: 'Battle Royale',
        price: 11.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/battleroyale.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 21,
        name: 'Annihilation',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/annihilation.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 25,
        name: 'The Name of the Wind',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/nameofthewind.jpeg',
		height: 235,
		width: 155,
    },
	{
        id: 28,
        name: 'Salems Lot',
        price: 9.99,
        category: 'Paperback',
        imgsrc: 'http://localhost/6CS007/products/books/salemslot.jpeg',
		height: 235,
		width: 155,
    },
];

const Markproducts = [{
        id: 5,
        name: 'Rising Sun',
        price: 2.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/sun.jpeg',
		height: 240,
		width: 98,
    },
	{
        id: 11,
        name: 'Alphabet',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/alphabet.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 22,
        name: 'Dinosaurs',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/dinosaurs.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 23,
        name: 'Aerial',
        price: 1.99,
        category: 'Bookmarks',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/aerial.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 24,
        name: 'Celestial',
        price: 2.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/celestial.jpeg',
		height: 240,
		width: 98,
    },
	{
        id: 27,
        name: 'Solar System',
        price: 2.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/solarsystem.jpeg',
		height: 240,
		width: 98,
    },
	{
        id: 29,
        name: 'Great Wave',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/greatwave.jpeg',
		height: 240,
		width: 70,
    },
	{
        id: 30,
        name: 'Owl',
        price: 1.99,
        category: 'Bookmark',
        imgsrc: 'http://localhost/6CS007/products/bookmarks/owl.jpeg',
		height: 240,
		width: 70,
    },
];

const Penproducts = [{
        id: 6,
        name: 'V-Sign',
        price: 4.49,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/vsign.jpeg',
		height: 50,
		width: 400,
    },
	{
        id: 8,
        name: 'Carche Leman Ballpoint',
        price: 10.50,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/carchelemanbllpt.jpeg',
		height: 50,
		width: 400,
    },
	{
        id: 18,
        name: 'V-Pen Fountain',
        price: 10.50,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/vpenfnt.jpeg',
		height: 50,
		width: 400,
    },
	{
        id: 26,
        name: 'All-Star Fountain',
        price: 11.50,
        category: 'Pen',
        imgsrc: 'http://localhost/6CS007/products/pens/alstarfnt.jpeg',
		height: 50,
		width: 400,
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
        image.setAttribute("height", product.height);
        image.setAttribute("width", product.width);
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);
		addToBasketBtn.setAttribute('style', 'margin-left: 5px; padding: 5px; font-family: "Lato", sans-serif; border-radius: 6px; border: none; color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #329acd 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2); user-select: none; -webkit-user-select: none; touch-action: manipulation;');

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

function displayProductsBooks() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < Bookproducts.length; i++) {
        const product = Bookproducts[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", product.height);
        image.setAttribute("width", product.width);
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);
		addToBasketBtn.setAttribute('style', 'margin-left: 5px; padding: 5px; font-family: "Lato", sans-serif; border-radius: 6px; border: none; color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #329acd 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2); user-select: none; -webkit-user-select: none; touch-action: manipulation;');

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('Books');
}

function displayProductsMarks() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < Markproducts.length; i++) {
        const product = Markproducts[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", product.height);
        image.setAttribute("width", product.width);
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);
		addToBasketBtn.setAttribute('style', 'margin-left: 5px; padding: 5px; font-family: "Lato", sans-serif; border-radius: 6px; border: none; color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #329acd 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2); user-select: none; -webkit-user-select: none; touch-action: manipulation;');

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('Bookmarks');
}

function displayProductsPens() {
    productList.innerHTML = '';
    displaytype.innerHTML = 'Displaying Products: ';

    for (let i = 0; i < Penproducts.length; i++) {
        const product = Penproducts[i];

        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const newline = document.createElement('p');
        const price = document.createElement('span');
        const image = document.createElement('IMG');
        const addToBasketBtn = document.createElement('button');

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)} `;
        image.setAttribute("src", product.imgsrc);
        image.setAttribute("height", product.height);
        image.setAttribute("width", product.width);
        newline.textContent = " ";

        addToBasketBtn.textContent = 'Add To Basket';
        addToBasketBtn.setAttribute('data-id', product.id);
		addToBasketBtn.setAttribute('style', 'margin-left: 5px; padding: 5px; font-family: "Lato", sans-serif; border-radius: 6px; border: none; color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #329acd 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2); user-select: none; -webkit-user-select: none; touch-action: manipulation;');

        addToBasketBtn.addEventListener('click', addToBasket);

        li.appendChild(h3);
        li.appendChild(image);
        li.appendChild(newline);
        li.appendChild(price);
        li.appendChild(addToBasketBtn);
        productList.appendChild(li);
    }
    displaytype.append('Pens');
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

        h3.textContent = `${product.name} (${product.category})`;
        price.textContent = `£${product.price.toFixed(2)}`;
        quantity.textContent = ` x${product.quantity} `;
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('data-id', product.id);
		removeBtn.setAttribute('style', 'margin-left: 5px; padding: 5px; font-family: "Lato", sans-serif; border-radius: 6px; border: none; color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #329acd 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2); user-select: none; -webkit-user-select: none; touch-action: manipulation;');

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
const BookButton = document.getElementById("Books");
const MarkButton = document.getElementById("Marks");
const PenButton = document.getElementById("Pens");
displayProducts();
AllButton.addEventListener("click", () => {
    displayProducts();
});
BookButton.addEventListener("click", () => {
    displayProductsBooks();
})
MarkButton.addEventListener("click", () => {
    displayProductsMarks();
})
PenButton.addEventListener("click", () => {
    displayProductsPens();
})
displayBasket();
displayTotal();

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