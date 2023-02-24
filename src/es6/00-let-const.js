var let = 'gomez'
lastname = 'Agustin'

console.log(lastname)

// scope
const fruits = () => {
    if(true){
        var fruit = 'banana'  // function scope
        let fruit2 = 'pera'   // block scope
        const fruit3 = 'kiwi'  // block scope
    }
    console.log(fruit)
    //console.log(fruit2)
    //console.log(fruit3)
}
fruits()