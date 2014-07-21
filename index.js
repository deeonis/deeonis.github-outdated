function identification(owner) {	
	if (owner === "Denis") {
		var access = [1,"access is allowed"];
	}
	else {
		var access = [0,"access denied"];
	}
	return access;
} 

function checkEnterAndSubmit() {
	if (window.event.keyCode == 13) {
		buttonclick();
	}
}

function buttonclick() {
	var input = document.getElementById('name'); 
	var name = input.value;
	var access = identification(name);
	var newdiv = document.createElement('div');
	var par = document.getElementById('output');
	par.insertBefore(newdiv, par.firstChild);
	newdiv.innerHTML = ("<p></p>" + access[1]);
	if (access[0] == 0) {
		newdiv.style.color = '#FF0000';
	}
	else {
		newdiv.style.color = '#00FF00'
	}
}