var identification = function(owner)
{
	if (owner === "Denis")
	{
		var access = [1,"access is allowed"];
	}
	else
	{
		var access = [0,"access denied"];
	}
	return access;
} 

var kp = function(e)
{
	if (e.keyCode == 13) {
		buttonclick();
	}
}

var buttonclick = function()
{
	var input = document.getElementById('search'); 
	var strOwner = input.value;
	var access = identification(strOwner);
	console.log(access);

	var myBody = document.getElementsByTagName('body')[0];
	var newdiv = document.createElement('div');
	
	myBody.appendChild(newdiv);
	newdiv.innerHTML = access[1];

	var par = document.getElementById('m');
	par.insertBefore(newdiv, par.firstChild);
	newdiv.innerHTML = ("<p>" + "</p>" + access[1]);
	if (access[0] == 0)
	{
		newdiv.style.color = '#FF0000';
	}
	else
	{
		newdiv.style.color = '#00FF00'
	}

}