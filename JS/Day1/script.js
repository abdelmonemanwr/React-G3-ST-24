// console.log("summer training")

// var myTrackName =  "React";
// console.log(myTrackName);

// var fname = "iti";
// console.log(fname);

// var flag = true;
// console.log(flag);

// var age = 23;
// console.log(age);

// int age = "hello";



// var x = 5;
// console.log(x);
// console.log("type: ",typeof(x));
// x = "iti";
// console.log(x);
// console.log("type: ",typeof(x));

//js: loosely typed

// console.log(fname) // undefined
// var fname = "iti";


// // 1- reassign
//    fname = "st";



// // 2- redeclare
// var fname = 33;


// console.log(fname);




// var fname;
// console.log(fname);         // undefined 
// console.log(typeof fname); // undefined


/*
           type        value
zero       number      zero
null       null        empty object

*/    


// 1- Literal Creation
//    var fname = "iti";
// 2- Method Creation
//    var age = Number(5);
//    var myName = String("men3m");
//    var flag = Boolean(true);
//     console.log(typeof myName);
//    console.log(age);
//    console.log(myName);



// var x = Number("44");
// console.log("x = ",x);
// console.log(typeof x);

// // ascii code
// // a = 97
// // A = 65

// var y = Number("mona");
// console.log("y = ", y); // NaN : Not a Number
// console.log(typeof y);


// var res = isNaN(5);
// console.log(res);
// res = isNaN("mona");
// console.log(res);



// var flag = Boolean("10");
// console.log(flag);
// var flag = Boolean("mona");
// console.log(flag);
// var flag = Boolean(NaN);
// console.log(flag);
// var flag = Boolean(0);
// console.log(flag);
// var flag = Boolean("");
// console.log(flag);
// var flag = Boolean(null);
// console.log(flag);
// var flag = Boolean(undefined);
// console.log(flag);
// var flag = Boolean(false);
// console.log(flag);

// falsy values
   // false
   // zero
   // empty string
   // NaN
   // null
   // undefined

// truthy values
//  all values except falsy values are considered as truthy values

// + : summation
// 3 + 4 = 7
// var x = 3;
// var y = 4;
// var z = x+y;
// console.log(z);

// + : conactenation
// var x = "mona";
// var y = "ali";
// var z = x+' '+y;
// console.log(z);


// var x = 3;
// var y = "4";
// var z = x+y;
// console.log(z); // 34

// var x = 3;
// var y = "ali";
// var z = x+y;
// console.log(z); // 3ali

/////////////////////////////////

// var answer;

// answer = undefined+undefined;
// answer = 34+ NaN;
// answer = null + 1;
// answer = true + "5";


// number - string
// Number(string) 
    // -- NaN  -> NaN
    // -- number -> number
// answer = 10 - "7";

// console.log(answer);

/////////////////////////////////

// 1 > 3 : false
// 2 < 5 : true


// x == y
// x === y


// var n1 = 3;   // 3
// var n2 = "3"; // 3

// var res;
// res = (n1 == n2);
// console.log(res);

// var n1 = true;   // 1
// var n2 = "true"; // NaN

// var res;
// res = (n1 == n2);
// console.log(res);


////////////////////////////////////////

// &&, ||, !

var c;
// c = undefined && "ali";
// c = undefined || "ali";

// c = null && undefined;
// c = null && "ali";

// c = null || undefined;
// c = null || "ali";

// c = 0 && undefined;
// c = "" && "ali";
// c = "ali" && 0;
// c = "mona" || "ali";
// c = "mona" || "";
// c = 0 || undefined;
// c = undefined || 0;
// c = 0 || "alaa";
// c = "alaa" || 0;

// console.log(c);


// if(/*condition*/)
// {
//     /// codes
// }
// else if(/*condition*/)
// {
//  /// codes
// }
// else
// {
//     /// codes
// }


// var a = 5;
// var b = 55;
// if(a > b){
//     console.log("a is greater than b");
// } else {
//     console.log("a is equal to b");
// }

// var a = 5;
// var b = 55;
// if(a > b)
//     console.log("a is greater than b");
// else 
//     console.log("a is equal to b");

// var a = 5;
// if(a % 2 == 0)
//     console.log("a is even");
// else 
//     console.log("a is odd");

// condition?true:false

// var a = 54;
// (a % 2 == 0)?
//     console.log("a is even") // true
//     : 
//     console.log("a is odd"); // false 



// var c = 4;

// (c>4)?
//     console.log("greater"):
//     (c<4)?
//         console.log("less"):
//         console.log("equal");
    
// (c>4)? console.log("greater"): (c<4)? console.log("less"): console.log("equal");



///////////////////////////////////////////    

// for(var i = 0  ; i<5  ; i++ )
// {
//     console.log("hello:", i);
// }

// for(var i = 0  ; i<5  ; i++ )
// {
//     if(i%3==0)continue;
//     console.log("hello:", i);
// }

// for(var i = 0  ; i<5  ; i++ )
// {
//     if(i%3==0)break;
//     console.log("hello:", i);
// }

// var i = 0;
// for(  ;  ; )
// {
//     if(i >= 5)break;
//
//     console.log("hello:", i);
//
//     i++;
// }



// var i = 0;
// while(i < 5)
// {
//     console.log("hello:", i);

//     i++;
// }

// var i = 0;
// while(true)
// {
//     if(i>=5)break;
//     console.log("hello:", i);

//     i++;
// }


// var i = 0;
// do
// {
//     console.log("hello:", i);

//     // i++;
// }while(i<5 && i > 0);


/////////////////////////////////////////

// alert("hello");
// var response = confirm("r u ok?");
// console.log(response);

/////////////////////////////////////////


// document.writeln("hello");

// document.writeln("hello");

document.writeln("<h3>hello1</h3>");
document.writeln("<h2>hello2</h2>");

/////////////////////////////////////////


// var name = prompt("enter your name");
// console.log(name);

//////

// var age1 = Number(prompt("enter your age1"));
// console.log(age1);
// var age2 = Number(prompt("enter your age2"));
// console.log(age2);

// console.log(age1 + age2);