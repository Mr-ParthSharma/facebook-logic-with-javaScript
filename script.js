var database = [
    {
        username : "parth@gmail.com",
        password : "sharma",
    },
    {
        username : "sharma@gmail.com",
        password : "parth",
    }
];


document.querySelector("button").onclick = function(){
function isUserValid(user, pass){
    for(var i=0; i<database.length; i++){
        if(database[i].username === user && database[i].password === pass){
            return true;
        }
    } return false;
}
function signIn(username,password){
    if(isUserValid(username,password)){
        document.querySelector("div").classList.add("display");
        document.querySelectorAll("div")[2].classList.remove("display");
    }else{
        alert("User Credentials are Wrong !!!");
    }
};
var userNameEntered = document.getElementById("email").value;
var userPasswordEntered = document.getElementById("password").value;

signIn(userNameEntered,userPasswordEntered);
}


