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

function signIn(user,pass){
    if(user === database[0].username &&
        pass === database[0].password){
            console.log(newsFeed);
        }else{
            alert("Incorrect!");
        }
}

signIn(userNamePrompt,passwordPrompt);

