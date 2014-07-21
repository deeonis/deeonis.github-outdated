function identification(owner) {
	var userName = "Denis";	
	if (owner === userName) {
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
var count=1;

function buttonclick() {
	var input = document.getElementById('name'); 
	var name = input.value;
	var access = identification(name);
	var newdiv = document.createElement('div');
	var par = document.getElementById('output');
	if (count>6) {
		var olddiv = document.getElementsByTagName('div')[5];
		par.removeChild(olddiv);
	}
	par.insertBefore(newdiv, par.firstChild);
	newdiv.innerHTML = ("<p></p>" + access[1]);
	if (access[0] == 0) {
		newdiv.style.color = '#FF0000';
	}
	else {
		newdiv.style.color = '#00FF00'
	}
	count++;
}