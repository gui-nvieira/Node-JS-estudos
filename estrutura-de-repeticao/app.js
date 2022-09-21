const listaDeArgumentos = process.argv.slice(2);

console.log('---------------------EXECUTANDO FOR------------------');
for(let controladorFor = 0; controladorFor < listaDeArgumentos.length; controladorFor++){
    console.log(`Posicao ${controladorFor} -- Valor lido: ${listaDeArgumentos[controladorFor]}`);
}
console.log('---------------------EXECUTANDO WHILE------------------');
let controladorWhile = 0;
while(controladorWhile <listaDeArgumentos.length){
    console.log(`Posicao ${controladorWhile} -- Valor lido ${listaDeArgumentos[controladorWhile]}`);
    controladorWhile++;
}
console.log('---------------------EXECUTANDO DOWHILE------------------');
let controladorDoWhile = 0;
do{
    console.log(`Posicao ${controladorDoWhile} -- Valor =${listaDeArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
}while(controladorDoWhile<listaDeArgumentos.length);

console.log('----------------------EXECUTANDO FOROF--------------------');
const controladorForOf = 0;
for (const valor of listaDeArgumentos){
    console.log(`Posicao ${listaDeArgumentos.indexOf(valor)} -- Valor lido: ${valor}`);  
}