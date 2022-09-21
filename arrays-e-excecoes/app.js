try{
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Laranja",
        "Cafe",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    //quando tiver DB os valores acime virão dele
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`));
    
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
    });
    //importante utilizar a exclusa logica para negar os termos que sao produto === argumento
    
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto NAO esta disponivel: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort(produto);
    listaDeProdutosDisponiveis.forEach(produto=> console.log(`Este produto esta disponivel: ${produto}`));
}catch(e){
    console.log('Nao é possivel concluir a solicitacao');
}
