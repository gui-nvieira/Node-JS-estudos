const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNum = (numero) => {
        const resultado = Number.parseFloat(numero)  
        if (!resultado){
            console.log('numero informado nao e valido');
        }
        return resultado
}

const validarOp = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('O operador informado não e valido')
            return null;
    }
}

readLine.question('Favor informar um número: ', (numero1)=>{
    const numeroValidado1 = validarNum(numero1);
    if(numeroValidado1){
        readLine.question('Favor informar outro numero: ', (numero2) => {
            const numeroValidado2 = validarNum(numero2);
            if(numeroValidado2){
                readLine.question('Informar o operador: ', (operador) => {
                    const operadorVal = validarOp(operador);
                    if(operadorVal){
                    switch(operadorVal){
                        case '+': console.log(`Operador selecionado + ==> ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1+numeroValidado2}`);
                            break;
                        case '-': console.log(`Operador selecionado - ==> ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1-numeroValidado2}`);
                            break;
                        case '*': console.log(`Operador selecionado * ==> ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1*numeroValidado2}`);
                            break;
                        case '/': console.log(`Operador selecionado / ==> ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1/numeroValidado2}`);
                            break;
                        case '%': console.log(`Operador selecionado % ==> ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1%numeroValidado2}`);
                            break;
                        default: break;
                    }
                    }
                });
            }
        });
    }
})