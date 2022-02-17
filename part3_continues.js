
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function(arr,k) {
 //arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})(arr,k);



 (function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")



 //  — — — — — — — — — — — — — — — — — — — — — — — — —
//Fix the code to remove duplicates.
//Code:
var res = function(arr){
 newArr = [];
 for(var i=0; i < arr.length; i++){
 if(newArr.indexOf(arr[i]) == -1) {
     newArr.push(arr[i]);
 } 
 }
 console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])




