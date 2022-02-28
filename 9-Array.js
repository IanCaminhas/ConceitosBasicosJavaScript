const valores = [7.7,8.9,9.3,9.2]
//7.7 9.2
console.log(valores[0],valores[3])
//undefined, pois índice 4 não existe
//Fazendo isso em algumas linguagues daria erro. EM JS dá undefined
console.log(valores[4])

valores[4]=10
//[ 7.7, 8.9, 9.3, 9.2, 10 ]
console.log(valores)

// 5 -> 5 itens
console.log(valores.length)

//push() acrescenta dados no array
valores.push({id:3}, false, null,'teste')

/*
Heterogeneidade revelada aqui
    [7.7,8.9,9.3,9.2,10,{ id: 3 },false, null,'teste'
]
*/
console.log(valores)

//retira e retorna o valor inserido na última posição do array
//teste
console.log(valores.pop())

//deletando o valor na posição especificada
delete valores[0]
/*
[ <1 empty item>, 8.9, 9.3, 9.2, 10, { id: 3 }, false, null ]
apaguei a primeira posição, por isso o <1 empty item> 
*/
console.log(valores)

//object -> array é do tipo object
console.log(typeof valores)


/*
Quando coloco valor numa posição sendo que algumas 
posições anteriores não possuem valores, o JS resulta:
<5 empty items>
valores[10]= 25
//[ 7.7, 8.9, 9.3, 9.2, 10, <5 empty items>, 25 ]
console.log(valores)
*/

/*

Array em JS é heterogêno e não tem tamanho fixo. 
Diferentemente em java que possui apenas um tipo 
e tamanho fixo

*/
