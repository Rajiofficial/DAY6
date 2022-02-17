//1.Declare four variables without assigning values and print them in console
var page;
console.log(page);
let page1;
console.log(page1);

//2.How to get value of the variable myvar as output
var word="books";
console.log(word);

//3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var name="raji";
var last_name="anjappan";
var marital_status= "single";
var country="india";
var age=22;
console.log("my profile=",name, last_name,marital_status,country,age);

//4. Declare variables to store your first name, last name, marital status, country and age in a single line
let profile=[name="raji",last_name="anjappan", marital_status= "single",country="india",age=23];
console.log(profile);

//5. Declare variables and assign string, boolean, undefined and null data types
let a="ranjith";
let b=true;
let c=undefined;
let d=null
let e=[a,b,c,d]
for(i in e ){
    console.log(e[i]);
}
console.log(typeof(a),typeof(b),typeof(c),typeof(d));

//6. Convert the string to integer
let s=Number("456");
console.log(s);

let q="3435";
let u=+q;
console.log(u)

a=parseInt("3344");
console.log(a);
console.log(typeof(a))

//7. Write 6 statement which provide truthy & falsey values.
/*1.for for loop is fast
  2.while
  3.switch
  4.break
  5.for in
  6.if..else
  */
  let m=["ranjith","raji","rajkumar",3]
  for(let i in m){
  console.log(m[i]);
  }

  //
 
