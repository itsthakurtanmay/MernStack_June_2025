// let age = 30;

//if else
// if(age >= 18){
//     console.log("Elegible for vote");
// }
// else{
//     console.log("Not Elegible for vote");
    
// }


//if / else if / else

// let age  = 19;
// if(age < 18){
//     console.log("kid");
// }
// else if(age > 45){
//     console.log("Old");
// }
// else{
//     console.log("young"); 
// }


//if we have multiple condition then we will use switch;

//NOTE : Switch yaha pr strict check karta haii (===);

// switch(new Date().getDay()){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Not a valid day");
        
// }


//loop : ek hi kaam baar baar karta haii;
// for(let i = 0;i<20;i++){
//     console.log("Hello coder");
    
// }

//Note : agar let ki jagah const aa gya toh chalega ?  -> nahi chalega because const  ek baar jo value intialize kardi vo update nahi hoti;

//sum of first n number;

// let sum  = 0;
// for(let i = 1;i<=10;i++){
//     sum+=i;
// }

// console.log(sum);

//Note : yaha pr har baar i or sum ke liye new memory ban rhi haii isliye C++ humara fast hota haii JS se;


//Nested for loop;
//12345 
//12345 
//12345 
//12345 
//12345 
//12345 


// for(let i = 0;i<6;i++){
//     for(let j = 1;j<=5;j++){
//         console.log(j);
//     }
//     console.log("\n");    
// }


//Note : Agar single line ki command hai toh koi curly braces lagane ki need nahi haii;

// for(let i = 0;i<20;i++)console.log("hello");


//While loop;
// let i = 1;
// while(i < 6){
//     console.log(i);
//     i++;
// }


//do-while loop H.W;


//accessing array's element;
// let arr = [10,30,50];

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }


// This is very easy but ye humare liye helpful hoga object ke case mein -> Example 

const obj = {
    name : "tanmay",
    age : 30,
    amout : 450,
    city : "noida"
}


//suppose mereko object ki har ek key's ko access karna haii toh mein Array's ke form mein le skta hu by using Object.keys();

const key = Object.keys(obj);
console.log(key);


//Question :Can i find all the values with the help of these keys?
//Ans : Yes;

for(let i = 0;i<key.length;i++){
    console.log(obj[key[i]]);   
}