const newArray=[1,3,6,10];
const myPrime=newArray.filter(function (num){
for (i=2;i<num;i++){
 if(num%i==0)
 {
 return true;
 }
}
 return num===1;

});
console.log(myPrime);

//print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})(arr);


//Fix the code to gen Title caps.
//Code:
var arr =["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})(arr);









