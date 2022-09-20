const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let negocin;
readLine.question('Por favor digite algo: ', input => {
    negocin = input;
    console.log(`o usuário digitou ${negocin}`);
});
