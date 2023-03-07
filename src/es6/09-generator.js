function* iterate(array){
    for (let value of array){
        yield value
    }
}

const it = iterate(['topo', 'oscar', 'ana', 'gato'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)