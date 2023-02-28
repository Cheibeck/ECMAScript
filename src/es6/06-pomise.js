//promesas

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('hey')
        }else{
            reject('no funciona')
        }
    })
}


anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))

