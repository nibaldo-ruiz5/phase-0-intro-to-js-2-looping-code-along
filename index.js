// Code your solutions in this file
const names =["carlos", "javier", "juan"]


function writeCards(names, value) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
  }
  return messages;
}

console.log(writeCards(names, "cake"));

function countDown(number){
    while(number >=0) {
        console.log(number)
        number --
    }
}
