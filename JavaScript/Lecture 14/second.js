const arr = [10,20,30,40];
arr.name = "tanmay";


console.log(Object.getOwnPropertyDescriptor(arr,"0"))

// for(let key in arr)console.log(key,arr[key]);