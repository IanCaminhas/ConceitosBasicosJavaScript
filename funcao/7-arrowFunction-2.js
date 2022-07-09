/*
    Com arrow function:
    o this foi associado ao local que a função foi escrita
    o this é associado ao contexto da palavra, ou seja, ao 
    contexto léxico(contexto em que a função foi escrita)
*/

/*o this aqui agora não varia mais
 o codigo pode ser chamado em qualquer lugar, 
 mas o this não varia mais... Ou seja, o this 
 está vinculado ao local em que foi definido
 ou contexto léxico




*/

function Pessoa() {
    this.idade = 0

    setInterval(()=>{
        this.idade++   
        console.log(this.idade)
    }, 1000)
}

//1 2 3 4 5 e assim por diante
new Pessoa
