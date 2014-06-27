var myName=prompt("Enter your name");
console.log("Hello " + myName);

var identification = function(owner)
{
	if (owner = "Denis")
	{
		return accessok = "access is allowed";
		console.log(accessok)
	}
	else
	{
		return accessbad = "access denied";
		console.log(accessbad)
	}
}
identification(myName);