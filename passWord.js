const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Hello there user`) 
reader.question(`what is the password?`, function(answer){
  if(answer.length >= 10){console.log(`you are a success`)
}else{
  console.log(`that was a failure`)
}
reader.close()
})
 