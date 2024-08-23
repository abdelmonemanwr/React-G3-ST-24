// console.log(document.links);

var link = document.links[0];
// console.log(link.attributes);
// for(var i=0; i < link.attributes.length; i++){
//     console.log(link.attributes[i])
// }

// var x = link.getAttribute("href");
// console.log(x);


// link.setAttribute("class", "my-link");

// var x = link.getAttribute("class");
// console.log(x);


// link.removeAttribute("class");
// console.log(link.attributes);
// var x = link.getAttribute("class");
// console.log(x);


// console.log(link.hasAttribute("class"));

// if(link.hasAttribute("class")){
//     link.removeAttribute("class");
// } else {
//     link.setAttribute("class", "my-link");
// }

// var x = link.getAttribute("class");
// console.log(x);

var parent = document.getElementsByClassName("parent")[0];
// console.log(parent);
var p = document.createElement("p");
p.innerHTML = "hello world1";
// var person = {fname:"ali", age:22}

// var myText = document.createTextNode("hello world from create Text Node");
// console.log(myText);
// p.innerHTML = myText;

// p.appendChild("hello");  // xxxxxx

// p.appendChild(myText);

// p.setAttribute("class", "content")
// p.id = "parag";
// console.log(p);

// var p = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
p2.innerHTML = "hello world2";
p3.innerHTML = "hello world3";

// p.appendChild("hello world2"); // xxx

// var text = document.createTextNode("hello world1");

// var result = p.appendChild(text);

parent.append(p, p2);
// result = parent.appendChild(p2);
// console.log(result);
// p3.append("dknkfmld,f");

// parent.append(p, p2, p3);

// var c = document.createComment("this is my comment");
// console.log(c);

/////////////////////////////////////


// p.after(p3);
p.before(p3);


////////////////////////////////////////////////

// BOM Objects: Browser Object Model
// 1- window Object
// 2- location Object
// 3- history Object
// 4- navigator Object
// 5- screen Object (self)

// var person = {
//     fname: "ali",
//     age: 22,
//     display: function (){
//         console.log("hello");
//     }
// }
// dispaly(); // xxx
// person.display();
// alert("this is alert"); // done
// [window].alert("this is alert2");
// console.log(window);

//////////////////////////////////////////////

// var openedWindow;
// function openWindow(){
//     // window.open();
//     // window.open("https://www.google.com.eg");
//     // window.open("./about.html");
//     openedWindow = open("./about.html", "", "width=250, height=250");
//     // console.log(openedWindow);
// }
// function closeWindow(){
//     openedWindow.close();
// }
// function moveToWindow(){
//     openedWindow.moveTo(400, 200);
// }
// function moveByWindow(){
//     openedWindow.moveBy(-50, -50);
// }
// function resizeToWindow(){
//     openedWindow.resizeTo(400, 400);
// }
// function resizeByWindow(){
//     openedWindow.resizeBy(40, 40);
// }

/////////////////////////////////////////////


// setTimeOut, setInterval

// greet(cb, 22);
// console.log("first");
// setTimeout(function(){
//     console.log("hello");
// }, 2000);

// var i=0;
// var curInterval = setInterval(function(){
//     console.log(i++);
// }, 1000);


// setTimeout(function(){
//     clearInterval(curInterval);
// }, 5000);

/////////////////////////////////////



function execute() { 
//     // location.assign("https://www.google.com");
//     // location.replace("https://www.google.com");
//     // location.reload();
//     // console.log(location.port);
//     // console.log(location.pathname);
//     // console.log(location.href);
//     // console.log(location.search);

// ////////////////////////////////////////////////

//     // console.log(history)
//     // history.back();
//     // history.forward();
    
// //////////////////////////////////////////////////
//     // function allow(position) { 
//     //     console.log(position.coords.latitude);
//     // }
//     // function deny() {  
//     //     console.log("can't get your location")
//     // }
//     // navigator.geolocation.getCurrentPosition(allow, deny);


//     // navigator.geolocation.getCurrentPosition(
//     //     function(position){
//     //         console.log(position.coords.longitude, position.coords.latitude);
//     //     }, 
//     //     function(){console.log("can't get your location")
//     // });


////////////////////////////////////////////////


    // console.log("hello1");
    // try{
    //     // open file
    //     // read data from file
    //     // operation on this data
    //     // exception happened

    //     var a = 66, b  = 0;
    //     if(b==0)
    //         throw "divided by zero isn't allowed";
    //     console.log(a / b);

    //     // close file
    // }
    // catch(error){
    //     console.log(error);
    //     alert(error);
    // }
    // finally {
    //     console.log("finally");
    // }
    // console.log("hello2");

}


function sum(a,b){
    try {
        if(arguments.length!=2){
            // var error = {
            //     message: "wrong number of arguments",
            //     errorCode: 123,
            //     errorLine: 220,
            // }
            // throw error;


            throw {
                message: "wrong number of arguments",
                errorCode: 123,
                errorLine: 220,
            };
        }
        return a+b;
    } catch (error) {
        console.log(error.message);
    }
}
console.log(sum(1,2));


///// not perferred to use this way
// try{
//     console.log(sum(1,2)); // user
// }
// catch(error){
//         console.log(error.message);
// }


