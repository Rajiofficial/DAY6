aa = (f,s,t) => {
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);




//code to Sum of the digits present in the number
let n=12563
sum=0
while(n>0){
let rem=(n%10);
sum+=rem;
n=parseInt(n/10);
}
console.log(sum)

//Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum = 0;
 for (var i = 0; i <arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr);



var arrs = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arrs);



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
//— — — — — — — — — — — — — — — — — — — — — — — — —



