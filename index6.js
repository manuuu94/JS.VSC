//small JS validator w/ for loop
var database = [
    {
        username:"manu",
        password:"secret"
    },
    {
        username:"manu2",
        password:"secret"
    }
];

var newsFeed = [
    {
        username: "Bud",
        timeline: "loving this"
    },
    {
        username: "Bud2",
        timeline: "loving this 2"
    }
];

var userNamePrompt = prompt("Username?");
var passwordPrompt = prompt("Password?");

function isValidUser(user,pass){
    for(var i=0;i<database.length;i++){
        if(user === database[i].username &&
            pass === database[i].password){
                return true;
            }
    }
    return false;
}

function signIn(user,pass){
    if(isValidUser(user,pass)){
            console.log(newsFeed);
        }else{
            alert("Incorrect!");
        }
}

signIn(userNamePrompt,passwordPrompt);


//JS Keywords: var, for, etc. Cant be used. Already reserved for JS processes









