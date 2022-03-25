const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(`what is the password?`),


 


function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{10,15}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}
