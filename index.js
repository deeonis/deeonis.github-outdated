//var myName=prompt("Enter your name");
//console.log("Hello " + myName);

var identification = function(owner)
{
	if (owner === "Denis")
	{
		var access = "access is allowed";
//		console.log(access);
	}
	else
	{
		var access = "access denied";
//		console.log(access);
	}
	return access;
} 

//var result = identification(myName);
//console.log(result);

var buttonclick = function(e)
{
	var input = document.getElementsByTagName('input')[0]; //нахожу инпут с помощью API браузера (первый инпут во всем массиве данных)
	var strOwner = input.value; //присваиваю переменной конкретное значение инпута
	var access = identification(strOwner);
	console.log(access);

//Вывожу значение из консоли на html-страницу

	var newdiv = document.createElement("div"); //создаю новый элемент
	document.getElementsByTagName('body')[0].appendChild(newdiv); //нахожу body из html и с помощью appendChild добавляю под него newdiv 
	newdiv.innerHTML = access; //присваивают newdiv значение переменной access
}