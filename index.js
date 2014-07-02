var myName=prompt("Enter your name");
console.log("Hello " + myName);

var identification = function(owner)
{
	if (owner === "Denis")
	{
		var access = "access is allowed";
		console.log(access);
	}
	else
	{
		var access = "access denied";
		console.log(access);
	}
	return access;
}
var result = identification(myName);
console.log(result);
