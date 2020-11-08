// console.log("Ejercicio 1")

// const bandas = ["Arjona", "La oreja de van Gogh", "Miley Cirus", "Carlos Baute", "Ricky Martin", "Queen"]

// const primerBanda = bandas[0]
// const tercerBanda = bandas[2]
// const sextaBanda = bandas[5]

// console.log(`La banda en el primer lugar es: ${primerBanda}`)
// console.log(`La banda en el tercer lugar es: ${tercerBanda}`)
// console.log(`La banda en el sexto lugar es: ${sextaBanda}`)

// console.log("Ejercicio 2")

// const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let contador = 0
// notas.length

// const sumarNotas = (notas) => {
//     for (let nota of notas) {
//         contador = contador + nota
//         console.log(contador)
//     }
//     return contador
// }

// console.log(sumarNotas(notas))

// const calcularPromedio = (notas) => {
//     console.log("cuantos elementos tiene notas", notas.length)
//     console.log("este es el valor del contador al momento de calcular el promedio", contador)
//     let promedio = contador / notas.length

//     return promedio
// }

// console.log(calcularPromedio(notas))

// console.log("Ejercicio 3")

// const playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];

// const ordenDirecto = () => {
//     for (let cancion of playlist) {
//         console.log(cancion)        
//     }
// }

// ordenDirecto()

// const playlistInvertida = playlist.reverse()

// const ordenInverso = () => {
//     for (let cancion of playlistInvertida) {
//         console.log(cancion)        
//     }
// }

// ordenInverso()

console.log("Ejercicio 4")

const items = ['🍉', '🍐', '🍌', '🍇', '🍎', '🍊']

const obtenerNumeroAlAzar = () => {
    return Math.floor(Math.random() * 6)
}

console.log(obtenerNumeroAlAzar())

const obtenerFrutaAlAzar = () => {
    let numeroDeFruta = obtenerNumeroAlAzar()
    let frutaAlAzar = items[numeroDeFruta]
    console.log(numeroDeFruta)
    return frutaAlAzar
}

const obtenerFrutaAlAzar2 = (items) => {
    return items[obtenerNumeroAlAzar()]
}

console.log("forma larga", obtenerFrutaAlAzar(items))
console.log("forma resumida", obtenerFrutaAlAzar2(items))


console.log("Ejercicio 5")

const listaDeFrutas = []

listaDeFrutas.push(obtenerFrutaAlAzar(items))
console.log(listaDeFrutas)

listaDeFrutas.push(obtenerFrutaAlAzar(items))
console.log(listaDeFrutas)

listaDeFrutas.push(obtenerFrutaAlAzar(items))
console.log(listaDeFrutas)

listaDeFrutas.push(obtenerFrutaAlAzar(items))
console.log(listaDeFrutas)

listaDeFrutas.push(obtenerFrutaAlAzar(items))
console.log(listaDeFrutas)

for (let i = 0; i < 5; i++) {
    listaDeFrutas[i] = obtenerFrutaAlAzar(items)
}
console.log(listaDeFrutas, "que viene del for")

console.log("Ejercicio 6")

const otraListaDeFrutas = []
