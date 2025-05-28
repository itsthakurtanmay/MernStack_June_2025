// //In this lecture we'll study Date in JavaScript;

// //Q. What is date in javascript?

// //Ans. JavaScript mein Date ek built-in object hai jo date aur time ka data store karta hai.

// // Matlab:
// // Aapko agar current date, time, year, month, day ya kisi specific date ki calculation/formatting karni hai, toh aap Date object ka use karte ho.

// //Real world use case of Date Object;

// // let concert = {
// //   artist: "Arijit Singh",
// //   location: "Delhi",
// //   date: new Date("2025-06-10"),
// //   time: "7:00 PM"
// // };

// // let today = new Date();

// // if (today < concert.date) {
// //   console.log(`🎵 Book your tickets for ${concert.artist}'s concert in ${concert.location} on ${concert.date.toDateString()} at ${concert.time}`);
// // } else {
// //   console.log("Sorry, the concert is over.");
// // }



// // //How to make a date object ?

// // const d = new Date(10000);
// // console.log(d);


// // //toDateString
// // console.log(d.toDateString());
// // //Sirf date ka readable string deta hai.
// // //Time, timezone, milliseconds nahi deta.

// // //toString -> Full date + time + timezone sab kuch deta hai in human-readable form.
// // console.log(d.toString());


// //Question : The job of the Date object is to get the current date and time, right?
// // It already fetches the current time from the system clock.
// // So my doubt is — why does it also calculate the number of milliseconds between the current time and January 1, 1970?
// // And why is this value stored in milliseconds when the main job is simply to get the date and time?


// //Ans : Because computers date/time ko as a number samajhte hain — aur milliseconds sabse accurate & calculable number unit hai.
// // Let’s break it down step by step 👇

// // 1. Human-readable vs Machine-readable
// // Human View	Machine View
// // “28 May 2025, 11:30 AM”	1748431800000 milliseconds since Jan 1, 1970

// // Hum log dates ko "28 May 2025" jaisa padhte hain,
// // Lekin computer ke liye calculations ke liye ek number chahiye hota hai — aur wo number hai:

// // Kitne milliseconds beet chuke hain 1 Jan 1970 se



// //------------------------------------------------------------------------------------------------------------

// //Now as we know if we want current time then we can find it by using cont d = new Date();
// //But if we want only date then :-
// const d  = new Date();
// // console.log(d.getDate());

// //Now , if i want only what day is today, so for that we have:-

// // console.log(d.getDay());-> ye function current day btayega week ka like aaj monday, tuesday type mein but ye weekdays ka name nahi btayega balki number mein btyega sun = 0, mon = 1 , tues = 2 , wed = 3....etc

// // console.log(d.getMonth())-> ye function current month dega or ye 0 based indexing mein store rehta haii;

// // console.log(d.getFullYear()) -> ye function current year dega;

// // console.log(d.getMilliseconds()); //ye function milli second return krta haii current time ka;


// //agar mereko saara data milisecond mein chahiye ho toh then we have;
// console.log(d.getTime());  //Or ye mili second 1 jan , 1970 se calculate hua haii;

// //yahi same kaam Date.now() bhi karke de dega;

// const now = Date.now();//ye bhi millisecond mein answer de dega;
// console.log(now);


// //Date from String
// //const d = new Date(6767);//agar yaha mein koii value daalta hu toh vo millisecond waali value hogi;
// //Agar mereko khud ki custom date daalni ho toh, kuch aise daal skta hu string format mein bhi daal sakta hu;
// // const d = new Date("2000-06-25");//year-month-date;
// // console.log(d.toDateString());
// // console.log(d.toString());

// //NOTE : jab string ke format mein date daaluga toh jan = 1, feb - 2 but number ke form mein tha jan = 0, feb = 1 etc;


// //agar mereko saath saath time bhi chahiye toh;
// // const nd = new Date("2000-06-25T10:10:12");//year-month-date;
// // console.log(nd.toDateString());
// // console.log(nd.toString());


// //we have also another format;
// const date = new Date(2000,6,25);
// console.log(date.toDateString());//ab aap dekhenge yaha 6 = june ke equal hota haii but kyuki jan = 0 , feb = 1 haii yha as you know the reason kyuki yha number pass ho rha haii naa ki string only string ke case mein hi 1 bsae indexing hoti haii;

// //Note : number jab bhi hoga -> 0 based hoga and string jab bhi hoga 1 based hoga;
// //1 more mistake hume month se pehle 0 nahi lagana haii;
// //or isme hum 7 values tak de skte haii :- year / month /day / hour / minute / second / millisecond';
// //starting ki 2 values deni important haii;
// //as you know agar hum single value denge toh vo millisecond ko consider krta haii;


// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(6);
// console.log(d.toDateString())




//Date calculation;

// const date1 = new Date();
// const date2 = new Date("2025-06-17");

// console.log(date2 - date1);//it give us difference in milli second;
// console.log(date2 > date1);//even we can also do comparison as well;

//CountDown Timer for olympics;

const date1 = new Date();
const date2 = new Date("2025-06-17T00:00:00");

const date = date2-date1;
const days = date/(1000*60*60*24);
console.log(Math.floor(days));
const hour = Math.floor(date/(1000*60*60))%24;
console.log(hour);
const min = Math.floor(date/(1000*60))%60;
console.log(min);
const sec = Math.floor(date/(1000))%60;
console.log(sec);






