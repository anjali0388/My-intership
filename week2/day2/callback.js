function processInput(callback){
    const name=prompt("enter your name");
    callback (name);
}
function greetUser(userName){
    alert(`welcome,${userName}`);
}
processInput (greetUser);