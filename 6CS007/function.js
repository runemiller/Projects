function openNav() {
	document.getElementById("SideNav").style.width = "90%";
	document.getElementById("main").style.marginLeft = "90%";
}

function closeNav() {
	document.getElementById("SideNav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

function openSettings() {
	window.location = 'Settings.html';
}

function keyboardAcc(event) {
	let key = event.key;
	if (key == "S") {
		openSettings();
	}
	else if (key == "N") {
		openNav();
	}
	else if (key == "M") {
		closeNav();
	}
	else {

	}
}