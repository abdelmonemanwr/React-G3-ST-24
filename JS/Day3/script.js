// function greet(fname){
//     console.log("hello", fname);
// }

// greet(fname);
// var fname = "mohamed";
// greet(fname);


// var temp = "test";
// console.log(temp);
// function sum(a, b){
//     temp = "iti";
//     console.log(temp);
//     return a+b;
// }
// var result = sum(2,4);
// console.log(temp);



// var temp = "test";
// console.log(temp);
// function sum(a, b){
//     var temp = "iti";
//     console.log(temp);
//     return a+b;
// }
// var result = sum(2,4);
// console.log(temp);


// var temp = "test";
// console.log(temp);
// function sum(a, b){
//     var x = "hello";
//     console.log("x = ",x);
//     return a+b;
// }
// // console.log("x = ",x);
// var result = sum(2,4);
// console.log(temp);
// console.log(result);



// function sum(a, b){
   
//     for( var i=0; i<3; i++){
//         console.log("i = ", i);
//     }
//     console.log("i = ", i);
//     return a+b;
// }
// var result = sum(2,4);
// console.log("res = ", result);

//////////////////////////////////////////


// var a = "ali";
// var b = "shadi";
// var c = 22;
// var d = 34;


//var objectName = {   key: value }

// var person = {
//     fname : "ali",
//     lname : "shadi",
//     age: 22
// }

// console.log(person);

// dot notation
// console.log(person.fname) // get

// subscript notation
// console.log(person["lname"]) // get
// console.log(person["agex"]) // get  // undefined



// var person = {
//     fname : "ali",
//     lname : "shadi",
//     age: 22,
//     address: {
//         city: "cairo",
//         code: 123,
//         country: "egypt"
//     },
//     subjects: ["math", "english", "arabic"],
//     gender: false
// }
// get from object
// console.log(person.age );    // 22
// console.log(person.color );  // undefined

// set data to prop
// person.age = 33;
// console.log(person.age );    // 33
// person.color = "red"
// console.log(person.color );  // red
// console.log(person)

// console.log(person.address.city);
// console.log(person["address"].city);
// console.log(person.address["city"]);
// console.log(person["address"]["city"]);


// var myKey = "age";
// console.log(person.myKey);  // undefined
// console.log(person["myKey"]);  // undefined
// console.log(person[myKey]);

// var person = {
//     fname : "ali",
//     lname : "shadi",
//     age: 22,
//     display: function (){
//         console.log("i'm a display method");
//     }
// }

// console.log(person.display);

// person.display();

/////////////////////////////////////

// console.log(Math);

var res;
// res = Math.PI;
// res = Math.sqrt(25);
// res  = Math.pow(2, 5);
// res = Math.abs(-22);
// res = Math.sign(0);
// var arr = [2, 5, 6, 7, 8, 9, -10]
// res = Math.min(arr); // NaN
// res = Math.min(2, 5, 6, 7, 8, 9, -10); // -10
// res = Math.max(arr); // NaN
// res = Math.max(2, 5, 6, 7, 8, 9, -10); // 9
// res = Math.round(5.5); // 6
// res = Math.round(5.4); // 5
// res = Math.floor(5.999999); // 5
// res = Math.ceil(5.00000001); // 6
// res = Math.ceil(5.00000000); // 5
// res = Math.floor(Math.random()*10+1);
// res = Math.sin(45*Math.PI/180);
// res = 1/Math.sqrt(2);
// console.log(res);

///////////////////////////////////////////////

// var element = document.getElementById("head1");
// console.log(element); // element found: return element

// var element = document.getElementById("head3");  // element not found : return null
// console.log(element);


//////////////////////////////////////////
// return collection: array
// var elements = document.getElementsByClassName("extra");
// console.log(elements[0]);
// for(var i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

//////////////////////////////////////////

// var elements = document.getElementsByName("myInput");
// console.log(elements);
// for(var i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

//////////////////////////////////////////

// var elements = document.getElementsByTagName("div");
// console.log(elements[2]);
// for(var i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

//////////////////////////////////////////

/* div{ } */
/* .test{ } */
/* div.test{ } */
/* div .test{ } */

//////////////////////////////////////////

// var elements = document.querySelectorAll("div.parent");
// console.log(elements);
// for(var i=0; i<elements.length; i++){
//     console.log(elements[i]);
// }

//////////////////////////////////////////

// var element = document.querySelector("div.parent");
// console.log(element);


/////////////////////////////////////////////////////

// var res;
// res = document.body;
// res = document.links;
// res = document.images;
// res = document.forms;

// var parent = document.querySelector("div.parent");
// res = parent.firstElementChild;
// console.log(res);
// res = parent.firstChild;

// res = parent.lastElementChild;
// console.log(res);
// res = parent.lastChild;


// res = parent.childNodes;
// console.log(res);
// res = parent.children;
// console.log(res);


////////////////////////////////////////

// var p = document.getElementsByClassName("head1")[0];
// console.log(p);

// p.innerHTML = "<h4>hello world 2</h4>";
// p.innerText = "<h1>hello world 2</h1>";





// var h1 = document.getElementById("head1");
// console.log(h1);

// h1.style.background = "green";
// h1.style.padding = "10px";

// h1.className = "uniqueCLass";
// console.log(h1);


// h1.className += " uniqueCLass2";
// console.log(h1);


// h1.classList.add("uniqueCLass");
// h1.classList.add("uniqueCLass2");
// console.log(h1);

// h1.classList.add("uniqueCLass3");
// console.log(h1);
// h1.classList.remove("uniqueCLass3");
// console.log(h1);

// h1.classList.toggle("uniqueCLass2");
// console.log(h1);


////////////////////////////////////////////


function changeContent(){
    console.log("hello");
    var p = document.getElementsByClassName("content")[0];
    p.innerHTML = "<h1>hello world 2</h1>";
}

var curInput;
var input = document.getElementById("input");
// console.log(input);
function getInput(){
    curInput = input.value;
    console.log(curInput);
}