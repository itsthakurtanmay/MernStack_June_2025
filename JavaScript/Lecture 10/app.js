// //Object Creation

// // const obj = {
// //     Name : "Tanmay",
// //     Account_balance : 4567,
// //     gender : 'male',
// //     age : 25
// // }

// // console.log(obj["Name"]);

// // //Type of the object is object ;
// // // console.log(typeof obj);

// // //Accessing object properties;

// // console.log(obj.Name);
// // console.log(obj.Account_balance);


// //ab yha you have a question like ki ye jo name , account balance (basically jo ye key's haii) kya ye koi variable haii ?
// //ans : ye jo key haii ye string mein store hoti haii backend pr;


// // Proof :

// // const insta = {
// //     "username" : "thakurashu2506",
// //     "followers" : 10000
// // }

// // console.log(insta.username);
// // console.log(insta.followers);//agr mein ab bhi console.log karu toh ye output de dega;


// // //ab mein isko square bracket lga kr bhi access kar skta hu;
// // console.log(insta["followers"]);

// // Note : agar mein isko square bracket ki help se access krta hu toh mujhe isko as a string hi btana padega otherwise errror dega;

// //one more thing ki mein kbhi bhi key ko spaces ke saath nahi likh skta,agar aise likhna hi haii key ko toh usse as a string likhna hoga;

// // const obj = {
// //     "acount number" : 45678,
// //     "father's name" : "cnsthkur"
// // }

// //ab isme ek dikkat or aayegi ab mein key ko is case mein directly . operator se access nahi kar skta;

// // console.log(obj.father's name); //it will give me undefined;

// //isko access karne ke liye ye have to use only square bracket;

// // console.log(obj["father's name"]);
// // console.log(obj["acount number"]);


// //Now , kya mein yaha key ka name ek number de skta hu jaise ki 0,1 ,2 , 3, 4....etc

// // const obj = {
// //     0:17,
// //     1:25,
// //     "0 username" : 'pg',
// //     "1 username" : 'tt',
// //     "dob" : "18"
// // }

// // console.log(obj)

// // //or agar mereko is 0 , 1 (number) ko access kana ho toh mujhe isko as a squre bracket with string/without string waale tarika se hi access kr skta hu;
// // console.log(obj["0"]);
// // console.log(obj[1]);

// //Note : Number waale key ke liye we have both option in square bracket that is with string as well as without string;
// //if we carefully observe kya ye number waala array ki tarah lag rha haii or array ka typeof bhi object hota haii array backend pr key value pair mein store hota haii;
// //or agar mereko length access karni hoti thi toh wha bhi . karke hi access krta tha jaise yaha object mein key ki value ko access krta hu . karke

// //kehne ka matlb array bhi internally as an object store hota haii;
// //comparision of array and object;

// // const arr = [20,50,70];

// //Internal Implementation;

// // const obj = {
// //     0:20,
// //     1 : 50,
// //     2 : 70,
// //     length : 3
// // }

// // console.log(arr[0], obj[0]);
// // console.log(arr[1], obj[1]);
// // console.log(arr[2], obj[2]);
// // console.log(arr.length, obj.length ,obj["length"]);

// //toh you see array ka typeof object aata tha or array bhi as an object internally bnta haii or isliye length jo haii vo meri bs ex property thi array ki isliye usse mein . operator se access krta tha;

// //ab yaha pr ek interesting fact ki kya mein undefined , null in sbki ko bhi as key ka name choose kr skta hu object mein?

// // const arr = {
// //     undefined : 34,
// //     null : "value kuch nahi haii isme",
// //     let : 45,
// //     int : 55,
// //     string : "checking for string"
// // }

// // console.log(arr.null,arr["int"]);

// //Note : yaani ye key mein kisi ko bhi le skta haii haan valid bhi haii kyuki at the end toh vo usko as a string hi store krega naa backend pr;


// //Second Method of creating object;

// // const person = new Object();

// // //properties:

// // //add
// // person.name = "tanmay";
// // person.age = 25;
// // person.gender = "Male";
// // person.address = "Noida";


// // //delete property;

// // delete person.age;
// // delete person.address;

// // //modify or update;

// // person.name = "ashu";
// // person.age = 1000;

// // console.log(person);


// //Third Method of creating object;

// class People{
//     constructor(name, age , gen){
//         this.name = name;
//         this.age = age;
//         this.gender = gen;
//     }
// }

// //h.w : what is constructor and from where this name , age & gender is came ?

// let pers1 = new People("javascript",20,"male");
// console.log(pers1);


//methods of objects;

const obj1 = {a:1,b:2};
const obj2 = {c:1,d:2};
const obj4 = {e :88,g:9};
const obj3 = Object.assign({},obj1,obj2,obj4);//starting wala target hota haii or baki source;

//it return modified target object;

console.log(obj3);

obj3.e = 56;

console.log(obj3);

console.log(obj4.e); //ye value copy krta haii mein waale mein change nahi karega
//H.w => shallow & deep copy;

//2,3 object ko ek saath combine krne ke or tarike haii ek toh assign haii or haii ek by using ...(3 dot) operator;

const obj5 = {...obj1,...obj2,...obj4};//ye kya kehta hai apke pass ek object haii usse pura khol do;
console.log(obj5)




