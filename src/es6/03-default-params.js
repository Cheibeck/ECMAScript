function newUser(name, age, country){
    var name = name || 'oscar'
    var age = age || 33
    var country = country || 'arg'
    console.log(name, age, country)
}

newUser()
newUser('Agustin', 34, 'mx')

// ecmascript parametros por defecto

function newAdmin(name = 'Agustin', age = 33, country = 'arg'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('Ana', 30, 'mx')