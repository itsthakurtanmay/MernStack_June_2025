// // // let obj = {};

// // // obj.name = "Tanmay";
// // // //yha mene iska key i.e., name banaya or value yaani tanmay banaya 
// // // //ab iske alwa iske pass or bhi cheeze hoti haii jaise writable , enumerable and configurable;
// // // console.log(Object.getOwnPropertyDescriptor(obj,'name'));

// // //writable -> we can change the values of key if writable is true;
// // //configurable -> if it is true then we can change the properties of writable , enumerable and configurable;

// // //Now we want to make their own writable , enumerable and configurable taaki mein inki properties khud se set kar pau;

// // // let obj = {};
// // // Object.defineProperty(obj,'name',{
// // //     value : "Ashu",
// // //     writable : false,
// // //     enumerable : true,
// // //     configurable : false,
// // // })
// // // Object.defineProperty(obj,"name",{
// // //     writable : true,
// // // })
// // // obj.name = "xoxo";

// // // console.log(obj);

// // let obj = {
// //     name : "ashu",
// //     age : 26,
// //     acountnum : 200001,
// //     balance :50
// // }

// // Object.defineProperty(obj,"age",{
// //     enumerable: false,
// // })

// // for(let key in obj){
// //     console.log(key)
// // }

// // let keys = Object.keys(obj);
// // for (let i = 0; i < keys.length; i++) {
// //     console.log(keys[i], ":", obj[keys[i]]);
// // }

// // // console.log(Object.getOwnPropertyDescriptor(obj,"age"));


// //agar object property bhi inherit karta haii then tab bhi agar uska enumerable true haii toh vo for in loop usse access karke print kar lega;
// const obj = {
//     name : "tanmay",
//     age : 25,
//     office : "cb",
// }

// //now we can copy or make clone of this obj into new object by using Object.create;
// const obj1 = Object.create(obj);
// obj1.address = "noida";
// obj1.pincode = 201301;

// console.log("Before making enumerable false");

// for(let key in obj1){
//     console.log(key)
// }
// //abhi ye saare keys ko print karega self ke bhi + inherited ke bhi because by default sabke enumerable true hota haii;
// // but , now suppose mein ek key ka enumerable false krta hu then for in loop usko print nahi karege;
// Object.defineProperty(obj1,"age",{
//     enumerable:false,
// })

// console.log("After making enumerable false");
// for(let key in obj1){
//     console.log(key)
// }


// console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"));


const obj = {
    name : "tanmay",
    age : 25,
    office : "cb",
}

Object.defineProperty(Object.prototype,"toString",{
    enumerable:true
})
for(let key in obj){
    console.log(key);
    
}


