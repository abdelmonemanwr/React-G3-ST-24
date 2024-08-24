// var input = document.getElementById("input");
// // console.log(input);
// var p = document.getElementById("pp");
// // console.log(p);

// function getText(e) { 
//     console.log(e.target.value);
//     // console.log(input.value) 
//     // p.innerHTML = input.value;  // wtb
// }

// function greet(){
    // console.log("hi");
// }

////////////////////////////////

// var p = document.getElementsByClassName("content")[0];
// var btn = document.getElementById("btn");

// function changeContent(idx){
//     // console.log(e.target);
//     p.textContent = `Welcome to Day 5, idx = ${idx}`;
// }
// function changeStyle(color){
//     p.style.color = color;
//     p.style.fontSize = "20px";
//     p.style.padding = "10px";
// }
/////////////////////////////////////////////////

// tricks:

// TRICK 4:

// function first(e){
//     e.stopPropagation();
//     console.log("first");
// }

// function second(e){
//     e.stopPropagation();
//     console.log("second");
// }

// function third(e){
//     e.stopPropagation();
//     console.log("third");
// }

// TRICK 3:

// var username = document.getElementById("input");
// // console.log(username);

// username.addEventListener('focus', function(){
//     username.style.border = "2px solid red";
// });

// username.addEventListener('input', function(){
//     if(username.value.length > 5){
//         username.style.border = "2px solid green";
//         // console.log(username.value);
//     } else {
//         username.style.border = "2px solid red";
//     }
// })

// var btn = document.getElementById("btn");

// function login(e){
//     e.preventDefault();
//     if(username.value.length > 5){
//         console.log(username.value);
//     }
// };

// btn.addEventListener('click', function(){
//     changeContent(i)
// });

// btn.addEventListener('click', function(){
//     changeStyle("blue");
// });


// var i = 0;
// var curInterval = setInterval(function () {
//     i++;
// }, 1000);
// setTimeout(function(){
//     btn.removeEventListener('click', function(){
//         changeContent(i);
//     });
//     clearInterval(curInterval);
// }, 5000);

// TRICK 1:
// btn.addEventListener('click', function(){
//     changeStyle("blue");
//     changeContent();
// });

// btn.onclick = function(){
//     changeStyle("blue");
//     changeContent();
// };

// TRICK 2:


// btn.addEventListener('click', changeContent);

// btn.onclick = changeContent;
// btn.onclick = function(e){
//     console.log("btn is clicked")
//     console.log(e);
// }



// function greet(data){
//     console.log("hi " + data.name);
// }

// greet({name: "ali", age: 22});


// function allow(position) { 
//     console.log(position);
// }

// function block() { 
//     console.log("no");
// }

// navigator.geolocation.getCurrentPosition(allow, block);

/////////////////////////////////////////////////

// AddEventListener:

// called by js engine when the event is triggered

// btn.addEventListener('click', function(){
//     console.log("btn is clicked");
// });


// btn.addEventListener('click', changeContent);
// btn.addEventListener('click', changeStyle);

/////////////////////////////////////////////////


// Attach Function

// btn.onclick = function(){
//     console.log("btn clicked");
// };



// call back function
// js engine will call this function

// btn.onclick = changeContent;
// btn.onclick = changeStyle;

// btn.onclick = function(){
//     changeContent();
//     changeStyle();
// }

// var person = {
//     fname: "ali",
//     display: function(){
//         console.log("i'm first");
//     }
// }

// // person.fname = "mona";
// person.display = function(){
//     console.log("i'm second");
// }
// // console.log(person.fname);
// person.display();


////////////////////////////////////////////


// var cookies = document.cookie;
// document.cookie = 'username=men3m;';
// document.cookie = 'age=22;';
// document.cookie = 'password=123;';
// document.cookie = 'email=men3m@gmail.com;';
// console.log(cookies);

/////////////////// Date Object /////////////////////

// var date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());

// date.setDate(27);
// console.log(date);

// var today = date.getDate();
// console.log("today = " + today);
// date.setDate(today+3);
// console.log(date);


/**
sun 0
mon 1
tue 2
wed 3
thu 4
fri 5
sat 6
*/


/////////////////// End of Date Object /////////////////////



// var expirationDate = new Date();

// expirationDate.setDate(expirationDate.getDate()+3);

// document.cookie =  'color=red;expires='+expirationDate;

var curDate = new Date();
curDate.setDate(curDate.getDate()+3);
//////////////////////////////////////////////////////////
// function getCookies() { 
//     return document.cookie.split("; ");
// }

// console.log(getCookies());

// var c = getCookies();
// for(var i=0; i<c.length; i++){
//     var cookie = c[i].split("=");
//     var key = cookie[0];
//     var val = cookie[1];
//     if(key.length<9)
//         console.log(key, val);
// }
///////////////////////////////////////

// function saveCookie(key, value, expirationDate){
    //     expirationDate ||= curDate; // expirationDate = expirationDate || curDate;
    //     document.cookie = key+"="+value+";expires="+expirationDate;
    // }
    
    // saveCookie("track", "react");
    // saveCookie("provider", "iti");
    
///////////////////////////////////////

function getCookie(key){
    var cookies = document.cookie.split("; ");
    for(var i=0; i<cookies.length; i++){
        var cookie = cookies[i].split("=");
        if(key == cookie[0]){
            return cookie[1];
        }
    }
    return null;
}

// var c = getCookie("provider");
// console.log(c);

///////////////////////////////////////

function hasCookie(key){
    return getCookie(key)?true:false;
}

// console.log(hasCookie("track"));


function deleteCookie(key){
    try {
        if(hasCookie(key) == false){
            throw "key not found";  
        } 
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() - 1);
        document.cookie = key+"=hello; expires="+expirationDate;
        return true;
    } catch (error) {
        alert(error);
    }
    return false;
}


var state = deleteCookie("providezxwdwer");
console.log(state);