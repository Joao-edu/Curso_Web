let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 // '!' = Negação
console.log(!isAtivo)  // Falso      ! = falso
console.log(!!isAtivo) // Verdadiro  !! = verdadiro
console.log(!!true)    // Negação e negação = verdadiro
console.log(!!false)   // Falso 

console.log("Os vardadeiros...")
console.log(!!3) //true
console.log(!!-1) //true
console.log(!!' ') //true
console.log(!![]) //true
console.log(!!{}) //true
console.log(!!Infinity) //true
console.log(isAtivo = true) //true

console.log("Os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || 'epa'))