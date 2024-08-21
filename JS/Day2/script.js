// var a = 5;
// var b = 4;
// var sum = a + b;
// console.log(sum);
// ////100
// var a = 51;
// var b = 42;
// var sum = a + b;
// console.log(sum);
// ///200
// var a = 25;
// var b = 14;
// var sum = a + b;
// console.log(sum);

// function funcationName(){
//     // body
// }

// function add2(){
//     var a = 25;
//     var b = 14;
//     var sum = a + b;
//     console.log(sum);
// }

// // undefined || 0

// function add(a, b){  // parameters
//     a = a || 0;
//     b = b || 0; // set default values
    
//     var sum = a + b;
    
//     console.log(a,b, sum);
// }


// add2();
// add(2,5);  // arguments
// add();
// add(1);
// add(1,2,30,4,5);
// add("mona", "ali");
// add("mona", 5);

// add(true, true)


// console.log(add);




// function add(a,b){
//     console.log(a+b);
//     return undefined;
// }

// var x = add(2,5);
// console.log(x);


// function add(a,b){
//     return a+b;
// }

// console.log(add(3,5) );

// var result = add(2,4);
// console.log(result);


// test();

// Number("5"); // built in function


// user defined function
// 1- function statement(declaration)
// 2- function expression


// var fname = "men3m";
// console.log(fname);

// var result = function mul(a,b){
//     return a*b;
// }
// console.log(result(5,3));
// console.log(result);

// console.log(mul(5,3)); // xxxx
// console.log(mul);      // xxx


// var result = function (a,b){
//     console.log(a+b);
// }

// var x = result(3,6);
// console.log(x);


// console.log(abc); // xxxx

// console.log(age);  // undefined
// var age = 33;
// console.log(age);


// console.log(window);
// console.log(this)


// console.log("1: ",fname); // 1: undefined
// var fname = "men3m";
// console.log("2: ",fname); // 2: men3m

// console.log("1: ",sum(2,4)); // 1: 6
// function sum(a,b) {  
//     return a+b;
// }
// console.log("2: ",sum(2,4)); // 2: 6

// console.log("1: ",result(2,4)); // 2: error
// var result = function (a,b) {  
//     console.log("multiplication");
//     return a*b;
// }
// var output = result(2,4);
// console.log("2: ", output);
// multiplication
// 2: 8





// function greet(x, y){
//     console.log("welcome");
//     x();
//     console.log(y);
// }

// var fname = "men3m";
// greet(fname);

// var myFunc = function(){
//     console.log("i'm a call back function")
// }
// myFunc();
// console.log(myFunc)


// var age = 22;
// greet(myFunc, age);



// greet(function(){
//     console.log("i'm a cb function")
// }, 2000)


// function sayHello(myFunc, age){
//     console.log("hellooo");
//     console.log(myFunc);
//     var sum = myFunc(2,43);
//     console.log(sum);
//     console.log("age = ", age);
// }
// function sum(a, b){
//     console.log("iam in sum func");
//     return a+b;
// }
// sayHello(sum, 354);

// sayHello(function (a,b){
//     console.log(a,b)
//     console.log("i'm a cb function");
// }, 22);


// function sayHi(fun1, fun2){
//     fun1();
//     fun2();
// }
// function cb1(){
//     console.log("cb1");
// }
// function cb2(){
//     console.log("cb2");
// }
// sayHi(cb1, cb2);



// sayHi(
//     function(){
//         console.log("i'm a cb1");
//     },
//     function(){
//         console.log("i'm a cb2");
//     }
// );


// function greet(cb, trackInstructor){
//     cb(trackInstructor);
// }


// function reactTrack(instructor){
//     console.log("instructor of react track is", instructor);
// }
// var instructorName = prompt("please enter instructor name of react tract");
// greet(reactTrack, instructorName);

/////////////////////////////////////////////

// string is immutable : can't be change
// array of characters

var fname = "   helxlol    "; // length: 12
var res;
// res = fname[1];
// res = fname.charAt(1);

// res = fname.indexOf('l');
// res = fname.lastIndexOf('l');

// for(var i=0; i<fname.length; i++){
//     // res = fname.charAt(i);
//     res = fname[i];
//     console.log(res);
// }
// res = fname.length;
// res = fname.toUpperCase();
// res = fname.toLowerCase();
// if(fname.startsWith('H')){
//     console.log("yes");
// } else {
//     console.log("no")
// }
// if(fname.endsWith('o')){
//     console.log("yes");
// } else {
//     console.log("no")
// }

// res = fname.length;
// console.log(res);
// res = fname.trim();
// console.log(res);
// res = res.length;
// console.log(res);
// res = fname;
// console.log(res);
// res = fname.length;
// console.log(res);

// res = fname.trimStart();
// console.log(res);
// res = res.length;
// console.log(res);

// res = fname.trimEnd();
// console.log(res);
// res = res.length;
// console.log(res);


// res = fname.includes("ho");
// console.log(res);


// var res = fname.concat("world");
// fname = "hello;world;from;iti"
// res = fname.split("").reverse().join("");

// fname = "username=men3m;password=123";
// res = fname.split(";")[0];
// console.log(res.split("=")[0]);
// console.log(res.split("=")[1]);


// res = fname.split(";")[1];
// console.log(res.split("=")[0]);
// console.log(res.split("=")[1]);
// console.log(res);

// fname = "hello";
// console.log(fname[88]);

///////////////////////////////////////////////

var students = ["mona", 22, true, "sarah"];
    // students.push("men3m");
    // students.pop();
    // students.unshift("men3m");
    // students.shift();
    // students = students.concat(["ali", 33]);
    // var c = students[0].split("").reverse().join("");
    // console.log(c);

    // students = [15, 1, 12, 3, 3, 43, 34, 21];
    // students = students.sort(); // not working properly
    // students.sort(function(a,b){
    //     return b-a;
    // });
// console.log(students);


// for(var i=0; i<students.length; i++){
//     for(var j=i+1; j<students.length; j++){
//         if(students[i] > students[j]){
//             var temp = students[i];
//             students[i] = students[j];
//             students[j] = temp;
//         }
//     }
// }