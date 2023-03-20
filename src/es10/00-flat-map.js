//aplanar arreglo dentro de arreglo
const array = [1, 2, 3, 4, 5, 6, [1, 3, 4, 8, 9, [2, 65, 74, 2]]]
console.log(array.flat(3))

//aplanar mapa

const array2 = [1,2,3,45,6]
console.log(array2.flatMap(v => [v, v*2]))