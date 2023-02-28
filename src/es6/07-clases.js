//declarando clase
class User{
    
}




//instancia de clase
const newUser = new User()

class user{
    //metodos
    greeting(){
        return 'hola mundo'
    }
    constructor(){
        console.log('nuevo usuario')
    }   
}

const topo = new user()
console.log(topo.greeting())

const bebeloper = new user()
console.log(bebeloper.greeting())

const david = new user()

// this

class user{
    constructor(name){
        this.name = name
    }
    speak(){
        return 'hola'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}
const ana = new user('Ana')
console.log(ana.greeting())

//setters getters

class user{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}


const david2 = new user('David', 15)
console.log(david2.greeting())
console.log(david2.age)
console.log(david2.name)