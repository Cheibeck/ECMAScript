//setters getters
class user{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    #speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n
    }
}


const david2 = new user('David', 15)
console.log(david2.greeting())
console.log(david2.uAge)
console.log(david2.uAge = 20)