
//TASK 2
//Task 2: Simple Programs todo for Operators
//1.Square of a number
let x=6;
let square=(x*x);
console.log(square);

//2.Swapping 2 numbers
var a=3;
var b=9;
var c=a;
var a=b;
var b=c;
console.log(a);
console.log(b);
//rere

//3.Addition of 3 numbers
var z=34;
let v=26;
let s=10;
console.log(z+v+s);

//4.Celsius to Fahrenheit conversion
function convertto(celsius){
    let  ctemp=celsius;   
    const Fahrenheit=ctemp*9/5 +32;
    const message=`${ctemp} ${Fahrenheit}`;
    console.log(message)
    }
    convertto(44);


//5.Meter to miles
var kilometers=50;
var miles=kilometers*1.62137119;
console.log(miles);

//6.Pounds to kg
var pounds=50;
var kg=pounds*0.453592;
console.log(kg);


//7.calculate batting averagesvar chipper = {
    var chipper = {
        firstName: 'Chipper',
        run:89 ,
        balls: 46,
        calcAVG: function() {
            this.avg = this.run / this.balls;
            return this.avg;
        }
    }
     
    chipper.calcAVG();
    console.log(chipper.firstName + ' has a batting average of ' + chipper.avg);

    //8.Calculate five test scores and print their average
    let test1_score=48;
    let test2_score=126;
    let test3_score=69;
    let test4_score=56;
    let test5_score=146;
    let total=(test1_score+test2_score+test3_score+test4_score+test5_score);
    let average=total/5;
    console.log("total",total);
    console.log("average",average);


    //9.Power of any number x ^ y.
     var b, e, r = 1, i = 1;
    
    b = 5;
    e = 4;

    while(i <= e)
    {
        r *= b;
        i++;
    }
    
    console.log("Result:: " + b + "^" + e + " = " + r );
    

    //10,Calculate simple interest 
      // different inputs
      /*P is the principle amount 
T is the time and 
R is the rate*/
      let P = 40000, R = 1, T = 4;
 
      /* Calculate simple interest */
      let SI = (P * T * R) / 100;
   
      /* Print the resultant value of SI */
      console.log("Simple Interest = " + SI);

      //11.Calculate area of an equilateral triangle
    
      a= 20.1
      area = 1
      for(i=1;i<=a;i++)
      {
          area = (1.73*a*a)/4
      }
      console.log(Math.round(area*100)/100);

      //20.CGPA PERCENTAGE
      let English = 9.1  
      let Hindi = 8.5  
      let Maths = 9.5  
      let Science =9.6;  
      let SocialStudy = 8.6  
      let CGPA = (9.1+8.5+9.5+9.6+8.6)/(5.0)  
      let CGPAper = 9.5 * (CGPA)  
      console.log(" CGPA percentage is:");  
      console.log(CGPAper);   
      console.log(CGPA); 

      //19. Function to calculate the
// electricity bill

function calculateBill(units)
{
    
    if (units <= 100)
    {
        return units * 10;
    }
    else if (units <= 200)
    {
        return (100 * 10) + (units - 100) * 15;
    }
    else if (units <= 300)
    {
        return (100 * 10) + (100 * 15) + (units - 200) * 20;
    }
    else if (units <=400)
    {
        return (100 * 10)+ (100 * 15)+ (100 * 20)+ (units - 300)* 25;
    }
    return 0;
}
     
// Driver Code
var units = 380;
 
console.log(calculateBill(units));


//18.Given two numbers and perform all arithmetic operations.

var a=34;
var b=45;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// 15.JavaScript program to find the area of a triangle

const side1 = 34;
const side2 = 34;
const side3 = 45;
var m = (side1 + side2 + side3) / 2;
const areaValue = Math.sqrt( m * ( m- side1) * (m - side2) * (m - side3));
console.log(
  `The area of the triangle is ${areaValue}`
);

//21..I need to write a loop that makes seven calls to console.log to output the following inverse triangle?
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
 

