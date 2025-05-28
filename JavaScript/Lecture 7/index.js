//Today we will learn about number;

// let num1 = 231;

// //another way to create number is by using new keyword;
// let num2 = new Number(231); 
// let num3 = new Number(231); 

// //Dono method mein difference yahi hoga ki without new keyword wala stack mein banega or new keyword wala heap mein 


// console.log(num2); 
// console.log(typeof num2); //type of this new keyword number is object kyuki ye heap mein bna haii or heap mein non primitive datatypes store hote haii or genrally non primitive data types at the end object hi hote haii; 


// //Question:

// console.log(num1 == num2);  //true
// console.log(num2 == num3);  //false

//Methods.


//1. toFixed = simply means ki aap decimal ke baad kitne digits chahte ho  

// let num = 231.68;
// console.log(num.toFixed(1));  // 1 digit chahiye toh round off karke 7 kar dega kyuki .68 is close to 7;
// console.log(num.toFixed(2));  // 2 digit chahiye toh waise ka waise hi rehne dega;
// console.log(num.toFixed(3));  // 3 digit chahiye toh aage 0 add kar dega;

// console.log(num.toFixed(5));


//2. toPrecision -> Apko total number of kitne digits chahiye ;


// let num = 231.68;
// console.log(num.toPrecision(4));
// console.log(num.toPrecision(5));
// console.log(num.toPrecision(8));
// console.log(num.toPrecision(3));
// console.log(num.toPrecision(2)); // ye isko exponential form mein dikha dega 2.3e+2;


//3. toExponential -> ye puch rha haii apse points ke baad apko kitne digits chahiye;
// let num = 231.68;
// console.log(num.toExponential(2));
// console.log(num.toExponential(3));
// console.log(num.toExponential(4));
// console.log(num.toExponential(1));

//4. toString -> it will convert Number to string;
// let num = 456;
// console.log(num.toString());
// console.log(typeof num);//but toString() method doesn't change into main string;
// console.log(typeof num.toString());


//5. valueOf() -> hume value laa kar bta dega;

// let a = 231.68;
// console.log(a.valueOf());


//Math : The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.LOG10E);


//We get more benefit of this math object suppose agar hum koi game bna rahe haii;
//Example : jaise ludo game haii usme 1 se 6 tak koi bhi digits aa sakti haii;

//math.random() -> it will generate random value between 0 <= value < 1;

//suppose we have to print a random number between 0 to 9;
// so , we can use Math.random() method

// console.log(Math.random()*10); 
// ye output toh de rha haii but in decimal form :- so we can use floor & ceil;

// Math.floor() – Think: "Floor = Down"
// It rounds the number down to the nearest whole number.

// let num = 23.9;
// console.log(Math.floor(num));


// Math.ceil() – Think: "Ceil = Ceiling = Up"
// It rounds the number up to the nearest whole number.

// let num2 = 23.9;
// console.log(Math.ceil(num2));


//Question : Write js code that genrate random number between 0 to 9;
console.log(Math.floor(Math.random()*10));

//Question : Write js code that genrate random number between 1 to 10;
console.log(Math.floor(Math.random()*10)+1);



//Question : Write js code that genrate random number between 11 to 20;
console.log(Math.floor(Math.random()*10)+11);




