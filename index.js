function identification(owner) {
	var libs = ['islands-components', 'islands-user', 'islands-icons', 'islands-services', 'islands-page', 'islands-romochka'];	
	
	if (libs.indexOf(owner) != -1) {
		var access = [1, 'access is allowed'];
	}
	else {
		var access = [0, 'access denied'];
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

	newdiv.innerHTML = ('<br>' + access[1]);

	if (access[0] == 0) {
		newdiv.className = 'denied';
	}
	else {
		newdiv.className = 'allowed';
	}
	count++;
}