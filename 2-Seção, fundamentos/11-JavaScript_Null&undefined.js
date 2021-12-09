const a = {nome: 'teste'}
const b = a
console.log(a)
b.nome = 'teste1'
console.log(a)

let c = 3
let d = c
d++
console.log(c)
console.log(d)

var valor // Não inicializado
console.log(valor)

valor1 = null /// ausência de valor
console.log(valor1)

const produto = {}
console.log(produto.preco) // preço não definido
 
produto.preco = 3.50
console.log(produto)

produto.preco = null // preco nao definido