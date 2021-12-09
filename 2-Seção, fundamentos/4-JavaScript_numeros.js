const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //numero interiro, true ou false
console.log(Number.isInteger(peso2)); //numero interiro, true ou false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2) 

console.log(media.toFixed(2))  //  Printa com 2 casa decimal
console.log(media.toString(2)) // Converte para binário
console.log(typeof media) //Valor numerico

console.log(7 / 0);
console.log("10" / 2);

console.log('5' + 2); //Concatena o numero 
console.log("shaw" * 2);
console.log(0.1 + 0.7)
console.log((10).toFixed(2))


