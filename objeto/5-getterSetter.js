/*
 _valor:1 
não quer dizer que é uma variável privada. 
Ainda vou continuar acessando a variável.
Ou seja, o JavaScript não vai barrar o acesso a ela.
_valor é apenas uma convenção. Serve para propagar respeito

*/

/*
JavaScript não suporta sobrecarga de método
ou seja, vários métodos com mesmo 
nome e parâmetros diferentes.
Mas usando get e set, é permitida sobrecarga

*/
const sequencia ={
    _valor:1, //convenção
    get valor(){return this._valor++},
    set valor(valor){
        if(valor> this._valor){
            this._valor=valor
        }
    }
}

//não colocando _, mas o JS está chamando o get e o set implicitamente
//1 2
console.log(sequencia.valor, sequencia.valor)

//fazendo um set
sequencia.valor = 1000
//1000 1001
console.log(sequencia.valor, sequencia.valor)
