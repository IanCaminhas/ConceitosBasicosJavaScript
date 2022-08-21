//JSON é um formato textual de dados. 

const obj = {a:1, b:2, c:3, soma(){return a + b + c}}
//{"a":1,"b":2,"c":3}
/*A função soma(){return a + b + c} foi excluída do JSON. O JSON é um formato de dados, 
nada que será executado */
console.log(JSON.stringify(obj))
//{ a: 1, b: 2, c: 3 }
console.log(JSON.parse('{"a":1, "b":2, "c":3 }'))
//{ a: 1, b: 'string', c: true, d: {}, e: [], f: 1.7 }
console.log(JSON.parse('{"a":1, "b": "string", "c":true, "d": {}, "e":[], "f": 1.7}'))


