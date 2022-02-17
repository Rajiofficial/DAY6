alert("Im invoked!");



alert("Im JavaScript!");
alert("Hello") // this line is not having semicolon
alert("World")
alert(3 +12); 


fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin );


fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert(` name ${name}` );


let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);


// You cant change the value of the msg
let message;
let lock = 2;
//Dont change any code below this 
if (message!==null || message!==lock ||message !== undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);
