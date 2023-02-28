//enahced object literals
//literal si el nombre de la variable es igual al argumento se pone directamente sin asignar nombre 
function newUser(user, age, country, uID){
    return{user, age, country, id: uID}
}
console.log(newUser('topo', 33, 'arg', 001))