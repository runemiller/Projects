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
	const textH = document.getElementById('CTSH');
	const textI = document.getElementById('CTSI');
	const textJ = document.getElementById('MainBody');
	const textK = document.getElementById('header');
	const textL = document.getElementById('icn');
	const textM = document.getElementById('icn2');
	const textN = document.getElementById('CTSN');
	const textO = document.getElementById('CTSO');
	const textP = document.getElementById('CTSP');
	const textQ = document.getElementById('CTSQ');
	const textR = document.getElementById('CTSR');

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
		textL.style.fontSize = this.value + 'px';
		textM.style.fontSize = this.value + 'px';
		textN.style.fontSize = this.value + 'px';
		textO.style.fontSize = this.value + 'px';
		textP.style.fontSize = this.value + 'px';
		textQ.style.fontSize = this.value + 'px';
		textR.style.fontSize = this.value + 'px';
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
		textL.style.fontSize = storedFontSize + 'px';
		textM.style.fontSize = storedFontSize + 'px';
		textN.style.fontSize = storedFontSize + 'px';
		textO.style.fontSize = storedFontSize + 'px';
		textP.style.fontSize = storedFontSize + 'px';
		textQ.style.fontSize = storedFontSize + 'px';
		textR.style.fontSize = storedFontSize + 'px';
        fontSizeRange.value = storedFontSize;
    }
}

window.addEventListener('load', setupText);

function setupImageSizeChange() {
    const imageSizeRange = document.getElementById('imageSizeRange');
    const imageA = document.getElementById('imageA');
	const imageB = document.getElementById('imageB');
	const imageC = document.getElementById('imageC');
	const imageD = document.getElementById('imageD');
	const imageE = document.getElementById('imageE');
	const imageF = document.getElementById('imageF');
	const imageG = document.getElementById('imageG');
	const imageH = document.getElementById('imageH');
	const imageI = document.getElementById('imageI');
	const imageJ = document.getElementById('imageJ');

    imageSizeRange.addEventListener('input', function() {
        imageA.style.width = this.value + '%';
        imageA.style.height = 'auto';
		imageB.style.width = this.value + '%';
        imageB.style.height = 'auto';
		imageC.style.width = this.value + '%';
        imageC.style.height = 'auto';
		imageD.style.width = this.value + '%';
        imageD.style.height = 'auto';
		imageE.style.width = this.value + '%';
        imageE.style.height = 'auto';
		imageF.style.width = this.value + '%';
        imageF.style.height = 'auto';
		imageG.style.width = this.value + '%';
        imageG.style.height = 'auto';
		imageH.style.width = this.value + '%';
        imageH.style.height = 'auto';
		imageI.style.width = this.value + '%';
        imageI.style.height = 'auto';
		imageJ.style.width = this.value + '%';
        imageJ.style.height = 'auto';
        localStorage.setItem('selectedImageSize', this.value);
    });

    const storedImageSize = localStorage.getItem('selectedImageSize');
    if (storedImageSize) {
        imageA.style.width = storedImageSize + '%';
        imageA.style.height = 'auto';
		imageB.style.width = storedImageSize + '%';
        imageB.style.height = 'auto';
		imageC.style.width = storedImageSize + '%';
        imageC.style.height = 'auto';
		imageD.style.width = storedImageSize + '%';
        imageD.style.height = 'auto';
		imageE.style.width = storedImageSize + '%';
        imageE.style.height = 'auto';
		imageF.style.width = storedImageSize + '%';
        imageF.style.height = 'auto';
		imageG.style.width = storedImageSize + '%';
        imageG.style.height = 'auto';
		imageH.style.width = storedImageSize + '%';
        imageH.style.height = 'auto';
		imageI.style.width = storedImageSize + '%';
        imageI.style.height = 'auto';
		imageJ.style.width = storedImageSize + '%';
        imageJ.style.height = 'auto';
        imageSizeRange.value = storedImageSize;
    }
}

window.addEventListener('load', setupImageSizeChange);

function popUp() {
	var popup = document.getElementById('myPopup');
	popup.classList.toggle('show');
}

function popUp2() {
	var popup = document.getElementById('myPopup2');
	popup.classList.toggle('show');
}

function popUp3() {
	var popup = document.getElementById('myPopup3');
	popup.classList.toggle('show');
}

function popUp4() {
	var popup = document.getElementById('myPopup4');
	popup.classList.toggle('show');
}

function popUp5() {
	var popup = document.getElementById('myPopup5');
	popup.classList.toggle('show');
}

function scrollGrid(direction, itemId) {
	const gridItem = document.getElementById(itemId);
	const scrollDistance = 200;
	if (direction === 'left') {
		gridItem.scrollLeft -= scrollDistance;
	} else if (direction === 'right') {
		gridItem.scrollLeft += scrollDistance;
	}
}

function toggleButtons() {
	const buttons = document.querySelectorAll('.scroll-btn');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].style.display = document.getElementById('toggleButtons').checked ? 'block' : 'none';
	}
}

function sensoryChanges() {
	const title = document.getElementById('title');
	const icn = document.getElementById('icn');
	const icn2 = document.getElementById('icn2');
	const header = document.getElementById('header');
	const settings = document.getElementById('Settings');
	const item1 = document.getElementById('item1');
	const item2 = document.getElementById('item2');
	const item3 = document.getElementById('item3');
	const item4 = document.getElementById('item4');
	const item5 = document.getElementById('item5');

	textColor = '#fcdec5';
	bgColor = '#bddefc';
	settingsTextColor = 'black';
	settingsBackgroundColor = '#fcdec5';

	title.style.color = textColor;
	icn.style.color = textColor;
	icn2.style.color = textColor;
	header.style.backgroundColor = bgColor;
	settings.style.color = settingsTextColor;
	settings.style.backgroundColor = settingsBackgroundColor;
	item2.remove();
	item3.remove();
	item4.style.gridColumnStart = 2;
	item4.style.gridColumnEnd = 4;
	item4.style.gridRowStart = 1;
	item4.style.gridRowEnd = 3;
	item4.style.backgroundColor = '#edebeb'
	item4.innerHTML = "<p>The Name of the Wind</p><p>By Patrick Rothfuss</p><p>Fantasy/Fiction/Magic</p><p>A high-action story written with a poet's hand, The Name of the Wind is a masterpiece.</p>";
	item5.remove();
}