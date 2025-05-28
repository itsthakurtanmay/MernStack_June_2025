// const arr = [2,35,1,8,9];
// console.log(arr);


//We can add even more data types into this array , we can add string , boolean ,bigint etc
// const arr1 = ["tanmay","javascript",true,false,235789434578643235676423456n];
// console.log(arr1);

//Methods:-

// 1. length -> to find the length of an array
// console.log(arr1.length);

//2. Access element of the Array; -> we have 2 option 1st by indexing and second is by using at method;
// console.log(arr1[3]);
// console.log(arr1.at(2));




//6. unshift : add element at the start of the array;

// const arr = [11,45,89,56,78];
// arr.unshift(10);
// arr.unshift(9);
// arr.unshift(99);
// arr.unshift(8);

// console.log(arr);

//7. shift : remove element at the start of the array;
// arr.shift();
// arr.shift();
// arr.shift();
// arr.shift();

// console.log(arr);


//8. delete : kisi particular index wale ko delete kar skte hai, but iski kuch disadvantages(Drawback) haii;

// const arr = [89,78,67,56,87,45];
// console.log(arr);
// delete arr[0];
// console.log(arr.at(0));

//9. indexOf : first index of the given element;

// const arr = [89,78,67,56,87,87,87,45];
// console.log(arr.indexOf(87));

//10. lastIndexOf : last index of the given element;

// console.log(arr.lastIndexOf(87));

//11. includes : return true if element found else return false;

// console.log(arr.includes(87));

//12. slice : Extract a portion of array without modifying original array;

// const arr = ["rohan",78,true,"javascriptmethods",7,56];
// console.log(arr.slice(1,4));  
// console.log(arr);

// //13. splice : it extract from main array and also modify original array;

// console.log(arr.splice(1,2)); //ye starting mein index number btana haii ki kha se extract krna haii and then second value bta rha haii us index se aap kitne number of element ko extract krna chahte ho;
// console.log(arr);


// const arr = [12,23,78,"ankit","rahu","ketu",89];
// console.log(arr);

// console.log(arr.splice(2,3,"tanmay","ashu","java","html",56666));
// console.log(arr);


//14. toString() : it convert into string;
// const arr = [12,23,78,"ankit","rahu","ketu",89];
// console.log(arr.toString());

//15. join() : it convert into string and give a choice of our seperator;
// const arr = [12,23,78,"ankit","rahu","ketu",89];
// console.log(arr.join("* "));
// console.log(arr.join("$ "));
// console.log(arr.join("! "));
// console.log(typeof arr.join("@ "));


//16 . concat

// let arr1 = [2,4,6,7];
// let arr2 = [1,4,8,9];
// let arr3 = [69732,45678987];
// let arr4 = [-89,-78,59];
// let arr5 = [99999,77777];


// //NOTE : arr1.concat(arr2); ye arr1 mein arr2 ko add nahi karega or arr1 ko modify bhi nahi karega you have to store it in new array;

// console.log(arr1.concat(arr2,arr3,arr5,arr4));


//NOTE : If we use push then  what will be the ouput;

// let arr1 = [56,89,67,45,32,12];
// let arr2 = ["aman","raju","kapil","bhati"];

// console.log(arr1.push(arr2));//ye arr1 ki length count karega but array 2 ke saare element ko ek single unit lega as a single length and it is kind of 2d array as well;

// console.log(arr1.push(...arr2));  //ye 3 dot ki wajah se dono array ki milke comined length btayega;

















