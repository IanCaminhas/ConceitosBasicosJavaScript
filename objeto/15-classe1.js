//A classe é transformada numa função construtora
class Lancamento {
    //Quando dou new,constructor() é chamado
    constructor(nome ='Gnérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l =>this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado

    }
}

const salario = new Lancamento('Slaário',90000)
const contaDeLuz = new Lancamento('Luz', -100)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)
//89900
console.log(contas.sumario())









