const pai = {nome:'Eliane', corCabelo:'preto'}

//create recebe como parâmetro o protótipo. No caso é avariável pai
const filha1 = Object.create(pai)
filha1.nome = 'Flávia'
//preto
console.log(filha1.corCabelo) 

//create recebe como parâmetro o protótipo. No caso é avariável pai
//filha tem como protótipo o pai
//além do protótipo(obj pai), posso colocar outros atributos que filha2 terá
const filha2 = Object.create(pai,{
    nome:{value: 'Jéssica', writable: false, enumerable: true}
})
//Jéssica
console.log(filha2.nome)
//Jéssica tem cabelo preto
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//[ 'nome' ]
console.log(Object.keys(filha1))
//[ 'nome' ]
console.log(Object.keys(filha2))

//forin
/*hasOwnProperty: pertence ao próprio objeto ? se sim, lista a propriedade... 
Se não, procura no protótipo(objeto pai) */  
/*
    nome
    Por herança
*/
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key): console.log('Por herança')
}
