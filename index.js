var COLORS = {}
	COLORS.red = '#F00';
	COLORS.green = '#090';

var MESSAGE = {}
	MESSAGE.good = 'access is allowed';
	MESSAGE.bad = 'access denied';

function identification(owner) {
	var libs = ['islands-components', 'islands-user', 'islands-icons', 'islands-services', 'islands-page', 'islands-romochka'];	
	
	if (libs.indexOf(owner) != -1) {
		var access = MESSAGE.good;
	}
	else {
		var access = MESSAGE.bad;
	}
	return access;
} 

var count = 1;
var MSG_LIMIT = 6;

function buttonclick() {
	var input = document.getElementById('name'),
		name = input.value,
		access = identification(name), 
		newdiv = document.createElement('div'),
		par = document.getElementById('output');

	if (count > MSG_LIMIT) {
		var olddiv = par.lastChild;
		par.removeChild(olddiv);
	}

	if (par.firstChild) {
		par.insertBefore(newdiv, par.firstChild);
	} 
	else {
		par.appendChild(newdiv);
	}

	newdiv.innerHTML = ('<br>' + access);

	if (access == MESSAGE.bad) {
		newdiv.style.color = COLORS.red;
	}
	else {
		newdiv.style.color = COLORS.green;
	}
	count++;
}