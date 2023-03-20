const user = {username: 'topo', age: 33, country: 'ARG'}
const {username, ...values} = user

console.log(username)
console.log(values)