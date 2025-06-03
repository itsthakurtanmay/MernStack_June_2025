let newObj1 = {
    name : "Tanmay",
    age : 25
}



let newObj2 = {
    amount : 20,
    money : 78
}

newObj2.__proto__ = newObj1;

console.log(newObj2.name);   //it will give output;

let arr1 = [10,40,56,78];

console.log(arr1.__proto__ == Array.prototype)
console.log(arr1.__proto__.__proto__ == Object.prototype);
console.log(arr1.__proto__.__proto__.__proto__ == null);

