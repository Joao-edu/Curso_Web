const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!' // Concatena 

const template = `
Olá ${nome}!` // Concatena  

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`El.. ${up('cuidado')}1`)
