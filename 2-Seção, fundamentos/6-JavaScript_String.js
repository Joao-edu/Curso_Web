const escola = "cod3r"

console.log(escola.charAt(4)) //Retorna a 4 letra 
console.log(escola.charAt(5)) //Retorna a 5 letra 
console.log(escola.charAt(3)) //retorna o codigo relacionado ao numero

console.log(escola.indexOf('3')) //Verifica se existe o digito 3 no valor gurdado na variavel escola

console.log(escola.substring(1)) //Printa String apartir do índece 1
console.log(escola.substring(0, 3)) //Printa String apartir do índece 0 ate o 3

console.log('Estado'.concat(escola).concat("!")) //Concatena valores de uma String
console.log('Escola' + escola + "!") //Concatena valores 

console.log(escola.replace(3, 'e')) //Subistitue o valor '3' pelo 'e'

console.log('Ana,Maria,Pedro'.split(',')) //Converte para array

