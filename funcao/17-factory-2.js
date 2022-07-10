function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto:0.1
    }
}
//{ nome: 'Ventilador', preco: 450, desconto: 0.1 }
console.log(criarProduto('Ventilador', 450))
//{ nome: 'Televisão', preco: 3000, desconto: 0.1 }
console.log(criarProduto('Televisão', 3000))