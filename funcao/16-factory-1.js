/*
    Função factory é Uma função que retorna
    um objeto... Sempre retorna um novo objeto

    Imagine criar um objeto para cada produto
    no formato abaixo:

    const prod1 = {
        nome: '...',
        preco:45

    }

    const prod2 = {
        nome: '...',
        preco:46
}

    Em resumo, dá muito trabalho.

*/

//Factory simples
//Aqui sempre estou criando uma nova instância de pessoa, apesar de não usar a notação new
function criarPessoa(){
    return {
        nome: 'Ian',
        sobrenome:"Pereira"
    }
}
//{ nome: 'Ian', sobrenome: 'Pereira' }
console.log(criarPessoa())
