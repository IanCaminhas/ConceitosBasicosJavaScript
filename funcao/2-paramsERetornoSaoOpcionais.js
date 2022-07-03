
/*
Em determinado momento posso retornar um valor
em outro não vou retornar... Esse tipo de construção é válida
em javascript
*/
function area(largura, altura){
    const area = largura * altura
    if(area>20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}

//4
console.log(area(2,2))
/*NaN -> estou passando 2 e undefined. 2*undefined= undefined... 
undefined>20 isso não existe, por isso o NaN */
console.log(area(2))
/*estou passando undefined e undefined. undefined*undefined= undefined... 
undefined>20 isso não existe, por isso o NaN */
console.log(area())
//6 -> aqui só pega os 2 primeiros e ignora o restante
console.log(area(2,3,17,22,44))
//Valor acima do permitido: 25m2.
console.log(area(5,5))




