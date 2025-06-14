// let obj = {
//     name : "Tanmay",
//     age : 25,
//     gender : "Male",
//     city : "Noida"
// };


// //we will iterate on object by using for in loop;

// for(let i in obj){
//     console.log(i);
    
// }

// //NOTE : Yaani for in loop ke help se mein object ke keys ke upper iterate kr skta hu;

// //Or agar mereko keys mil gayi haii toh uski values bhi print krwa skta hu;

// for(let i in obj){
//     console.log(i , obj[i]);
// }


//ab hum keys toh Object.keys se bhi nikal sakte haii or ye mereko array return krke deta haii;
// let obj = {
//     name : "Tanmay",
//     age : 25,
//     gender : "Male",
//     city : "Noida"
// };

// console.log(Object.keys(obj));  //Output : [ 'name', 'age', 'gender', 'city' ]


// Question : Upper bhi key nikal paa rha hu yaha bhi key nikal paa rha hu to dono mein difference kya haii?


// By using for in loop

// const obj = {name : "tanmay" , age : 27 , money : 100000};

// const obj2 = Object.create(obj);
// obj2.address = "Noida";
// obj2.pincode = 201301;//it return an array and only their own keys


// for(let i in obj2){
//     console.log(i);//it will print own keys + inherited keys;
    
// }



