// var xhr = new XMLHttpRequest();

// console.log(xhr);

// // btn.onclick = function(){
// //     console.log("clicked");
// // }
// xhr.onreadystatechange = function(){

// };

// xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
// xhr.send("");

// // xhr.send({id:1, username:"men3m", email:"k9E1u@example.com", phone:"1234567890"});  // incase of post request




var body = document.getElementById("tbody");
function getAllUsers () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var resposne = xhr.response;
            // console.log(resposne) // json object
            var users = JSON.parse(resposne); // js object
            // console.log(user);
            
            for(var i=0; i<users.length; i++){
                var tRow = document.createElement("tr");
                
                var id = document.createElement("td");
                id.textContent = users[i].id;
                
                var name = document.createElement("td");
                name.textContent = users[i].name;
                
                var email = document.createElement("td");
                email.textContent = users[i].email;
                
                var phone = document.createElement("td");
                phone.textContent = users[i].phone;

                // console.log(id, name, email, phone);
                tRow.append(id, name, email, phone);
                // console.log(tRow)
                body.append(tRow);
            }
        }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send("");
}