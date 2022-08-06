const readlineSync = require("readline-sync");

async function nome(){
  const name = await readlineSync.question('Digite seu nome:');
  console.log("Olá "+ name);
}

nome();