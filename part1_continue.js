var a = 2<12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}


var s = prompt("Enter a number?");
//Don't modify any code below this
if (s) {
 console.log( "OMG it works for any number inc 0" );
}
else
{
 console.log( "Success" );
}


let value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}


let login = 'Employee';
let message = ((login == 'Employee') ||
  (login == 'Director') ||
  (login == '') )
console.log(message)


let i = 4;
while (i>1) {
  console.log( " "+--i );
}

let num = 1
console.log(num++)
num += 2
console.log(++num)
num +=2
console.log(++num)
num += 2
console.log(num)


for (let num = 0; num <= 20; num += 2) {
    console.log(num)
  }


  let countdown = 100;
while (countdown > 0) {
    countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

var lemein = " ";
var lemeout = " ";
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);
 