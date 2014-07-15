var identification = function(owner)
{
	if (owner === "Denis")
	{
		var access = "access is allowed";
	}
	else
	{
		var access = "access denied";
	}
	return access;
} 
var count = 1;
var buttonclick = function(e)
{
	var input = document.getElementById('search'); 
	var strOwner = input.value;
	var access = identification(strOwner);
	console.log(access);

	var myBody = document.getElementsByTagName('body')[0];

	if (count == 1)
{
	var newdiv = document.createElement('div');
	newdiv.id = "newid";
	myBody.appendChild(newdiv); 
	newdiv.innerHTML = access;
}
	else
	{
	var newtext = document.createElement('div');
	var par = document.getElementById('m');
	var position = document.getElementById('newid');
	par.insertBefore(newtext, par.firstChild);
	newtext.innerHTML = ("<p>" + "</p>" + access);
	}

count = (count + 1);
}