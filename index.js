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

	var newdiv = document.createElement('div');

	if (count == 1)
{
	var myBody = document.getElementsByTagName('body')[0];
	myBody.appendChild(newdiv); //нахожу body из html и с помощью appendChild добавляю под него newdiv 
	newdiv.innerHTML = access; //присваивают newdiv значение переменной access
}
	else
	{
	var newtext = document.createElement('div1');
	var par = document.getElementById('m');
	m.appendChild(newtext);
	newtext.innerHTML = access;
	}

count = (count + 1);
}
