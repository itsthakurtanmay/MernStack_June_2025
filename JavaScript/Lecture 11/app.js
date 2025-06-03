// // // // // //shallow copy -> jab copy humara with reference hota haii;

// // // // // let obj1 = {
// // // // //     a :1,
// // // // //     b:2
// // // // // }

// // // // // let obj2 = obj1;
// // // // // //this is the example of shallow copy : kyu ki yaha copy ho rha haii by reference;
// // // // // //ab mein yha print karunga obj2 ko toh obj1 print hoga kyuki obj2 mein obj1 ka reference daala haii;

// // // // // console.log(obj2);

// // // // // //ab mein obj2 ke properties ko change karunga toh vo obj1 ki properties changes honge;

// // // // // obj2.a = 100;
// // // // // console.log(obj2.a);


// // // // // //Deep copy -> yaha actual mein copy create hoga obj1 alag hoga obj2 alag hoga;
// // // // // //Deep copy banane ka sabse best tareeka haii by using structureClone;

// // // // // let obj3 = structuredClone(obj1);//deep copy -> yha actual mein dono alag alag create hue honge;
// // // // // obj3.a = 20;

// // // // // console.log(obj1.a,obj2.a);

// // // // //Nested Object -> object ke andar object;


// // // // // const user = {
// // // // //     name : "Tanmay",
// // // // //     balane : 10000,
// // // // //     address : {
// // // // //         pincode : 201301,
// // // // //         city : "Noida"
// // // // //     }
// // // // // }


// // // // // how to access this pincode & city

// // // // // console.log(user.address.pincode);
// // // // // console.log(user.address);


// // // // const user = {
// // // //     name : "Tanmay",
// // // //     balane : 10000,
// // // //     address : {
// // // //         pincode : 201301,
// // // //         city : "Noida"
// // // //     }
// // // // }

// // // // //Now suppose mein ab is upper waale object ki copy krni ho toh;
// // // // const copied = Object.assign({},user);
// // // // console.log(copied);


// // // // //Question : Jo ye assign haii ye shallow copy karega yaa deep copy 
// // // // //-> Bina nested waale mein toh ye deep copy karega but kya nested waale mein deep copy karega?
// // // // //Ans : Bina nested waale mein toh ye deep copy karega , but jaha nested hoga waha ye shallow copy karega means reference store karega;

// // // // copied.name = "Ashu";
// // // // copied.address.city = "mathura";

// // // // console.log(user.name, copied.name);//Yaha toh isne deep copy kra haii;

// // // // console.log(user.address.city , copied.address.city); //Yaani assign toh shallow copy krta haii nested waale case mein;


// // // // //Note : same kaam agar hum seprate operator ke saath karenge toh waha bhi same yahi kaam ho rha hoga jo assign ke saath hua haii;
// // // // //Note : So ,best practise is to avoid this circumstance is to used structuredClone;

// // // // const correctCopied = structuredClone(user);

// // // // console.log(correctCopied);

// // // // correctCopied.address.pincode = 9192;
// // // // console.log(correctCopied.address.pincode , user.address.pincode);  //structuredClone ki help se deep copy hua haii isliye correctCopied mein jo change kra nested mein vo user ke nested waale mein nahi hua;



// // // //Destructuring of an Object 

// // // // const obj = {
// // // //     name : "Tanmay",
// // // //     accountbalance : 100000,
// // // //     age : 25,
// // // //     money : 5789
// // // // };


// // // // const {name , age } = obj; //isko kehte haii object ko destructure krna , object se kuch value chahiye thi;



// // // let obj = {
// // //     name : "tanmay",
// // //     age : 20,
// // //     arr : [90,40,60,80],
// // //     adress : {
// // //         pincode : 201301,
// // //         city : "Noida"
// // //     }
// // // };

// // // //if we want to access array's first element then:-

// // // const{arr:[first]} = obj;
// // // console.log(first);



// // //Now suppose mereko city chahiye 
// // // const {adress : {city}} = obj;

// // // console.log(city);

// // //Destructuring of funtion;

// // let user = {
// //     name : "Tanmay",
// //     amount : 420,
// //     greet : function(){
// //         console.log("hello learning destructuring of object");
// //     },
// //     meet : function(){
// //         return 20
// //     }
// // }

// // console.log(user.greet());
// // console.log(user.meet());


// //Prototype chaining;

// const arr = [10,20,30];
// console.log(arr);


// // arr.__proto__   => ye arr ke prototype bta dega , uske andar saare function aa jaate haii at , concat m findIndex and so on....



// let obj = {
//     name : "Tanmay",
//     amout : 420,
//     greet : function(){
//         return 20;
//     }
// }

// console.log(obj.toString());
