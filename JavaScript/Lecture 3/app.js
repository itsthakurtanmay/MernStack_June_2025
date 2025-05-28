//first if we have to store the data we used variable and that's id good to hold data we can use variable,but now there is a problem suppose agar mereko 100 data store karna ho toh ? -> haan, mein tab bhi 100 variable bna kr data store kr skta hu , nw suppose 1 lakh data store krna ho, 10 Lakh data store krna ho toh ----> haan , yha thodi dikkat aayegi, 1 lakh , 10 lakh different varibable banna  manage karne mein toh is cheez ka solution le kar aaya picture mein array, Array ek non primitive data type haii jo ki store kr skta haii multiple data in a single variable.


//How array can store multiple data in a single variable;

let arr = [10,34,78,345,98,67,4567];

//even hum array mein number ke saath saath boolean , bigint , string ,null ,undefind bhi daal sakte haii;

let arr1 = [78,"tanmay","array",45789432345678764345787654356787654n,true,null,,789];
console.log(arr1);


//and ,agar mein array ka type ho nikalu toh vo object aayega;
console.log(typeof arr1);  //-> Object;

//and , this is not an error jaise null data type ke cases mein object aa rha tha uska typeof as an error yha array ka typeof object hi hoga cauz array object se bna haii;




//Type conversion;

//boolean to number;
let x = true;
console.log(Number(x));

let y = false;
console.log(Number(y));

let z = Number(y);
console.log(typeof z);


//Note : ab kayi baar type conversion mein jab hum string ko convert karte haii number mein toh hume NaN mil jaata haii;

let account = "100xs";
console.log(Number(account));

let checkthis = "10000000000000000000000000000034384483n";
console.log(Number(checkthis)); //yaani bigint mein bhi convert nahi ho rha haii string yha 
