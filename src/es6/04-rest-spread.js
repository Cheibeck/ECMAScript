//expresiones de deestructuracion
//arrays destructuring

let fruits = ['apple', 'banana']
let [a, b] = fruits

console.log(a, b)
console.log(fruits[1])

// objects destructuring

let user = { username: 'agustin', age: 33}
let { username, age} = user
console.log(username, user.age)



// spred operator

let person = {name: 'Agustin', age: 33}
let country = 'ARG'

let data = {id: 1, ...person, country}

console.log(data)

// rest

function sum(num, ...values){
    console.log(values)
    console.log(num+values[0])
    return num + values[0]
}

sum(1, 1, 2, 3)