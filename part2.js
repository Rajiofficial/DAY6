//Write a code to print the numbers in the array
//Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);



//Write a code to print the numbers in the array
//Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += (numsArr[i]+",")
}

console.log(new_string)

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
//Output: 11 10 9 8 7 6 5 4 3 2 1
var nums=[1,2,3,4,5,6,7,8,9];
var string = "";
for(i=nums.length-1;i>=0;i--){
    if(i!==0){
        string+=nums[i]+" ";

    }else{
        string+=nums[i]
    }
}
console.log(string)


//Write a code to replace the array value — If the number is even, replace it with ‘even’.
//Output:[ 1, “odd”, 3, “odd”, 5, “odd”, 7, “odd”, 9, “odd”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i] %2 !== 0 )
 {
 numsArr[i] += "odd"
 }
}
console.log(numsArr);


//Write a code to replace the array value — If the index is even, replace it with ‘even’.
//: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <nums.length; i++) {
 if(nums[i] %2 == 0 )
 {
 nums[i] += "even"
 }
}
console.log(nums);

//Write a code to add all the numbers in the array
//Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <numsArr.length; i++) {
 sum += numsArr[i]
}
console.log(sum);


//Write a code to add the even numbers only
//Output: 30
var Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <Arr.length; i++) {
 if(Arr[i]%2==0){
 sum += Arr[i]
 }
}
console.log(sum);

//Write a code to add the even numbers and subract the odd numbers  
//Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i]%2==0)
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);



//Write a code to print inner arrays
//Output:
//Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log( numsArr[i])
 }



 //Write a code to print elements in the inner arrays
//Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);


//Write a code to print elements in the inner arrays
//Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);

//Output: [ ["even", 2, "even", 4, "even"], [6, "even", 8, "even", 10,] ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
      if(inner_array[j] %2 == 0 )
      {
         inner_array[j] = "even"
       }
}
console.log(numsArr);

//Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j=numsArr[i].length; j>numsArr[i];j-- ){
     str_all +=numsArr[i]
 }
}
console.log(str_all);

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i]
 console.log(inner_array)
 for(var j = 0 ; j < inner_array.length;j++ ){
    if(inner_array[j]%2!=0)
    {
    sum_odd += inner_array[j]
    }
    else   
    {
    sum_even += inner_array[j]
    }
   }
   }
   console.log(sum_odd);
   console.log(sum_even);