//validar contraseña cumpla objectivo o correo esta bien escrito
const regex = /\b(Apple)+\b/g

const fruit = 'Apple, banana, orange, kiwi, etc, etc, etc'

for (const match of fruit.matchAll(regex)){
    console.log(match)
} 
