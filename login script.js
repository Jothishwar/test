var users=[
{
	username:"jo",
	password:"1234"
},
{
	username:"xyz",
	password:"5678"
}
];

function login() 
{
	var username=document.getElementById('uname').value;
	var password=document.getElementById('pass').value;
	
	for (var i = 0; i < users.length; i++) 
	{
		if (username==users[i].username && password==users[i].password) {
			console.log("logged in")
			return
		}
		
		/*
		if (username==users[i].username)
		{
			console.log("crct user name")
			if (password==users[i].password) 
			{
				console.log("crct password")
				alert("you have logged in")
				return
			}
			else
			{
				console.log("wrong password")
			}
			return
		}
		else
		{
			console.log("wrong username")

		}*/
	}
}