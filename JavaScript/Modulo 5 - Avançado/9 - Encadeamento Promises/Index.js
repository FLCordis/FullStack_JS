function overageCheck(age){
    return new Promise((resolve, reject) => {
        if(age){
            resolve(age >= 18)
        } else {
            reject(new Error("A Age is required!"))
        }
    })
}

function getAge(birthday){
    return new Promise((resolve, reject) => {
        if(birthday){
            const birthdayYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear-birthdayYear)
        } else {
            reject(new Error("Must be a birthday date!"))
        }
    })
}

getAge('2001-06-22')
    .then((age) => overageCheck(age)) //Esse return é feito sem as { } da Arrow Func. dentro da função de Callback, ai já vai considerar como return da próxima Promise (overageCheck cria uma Promise)!
    .then((isOver18) => {
    if(isOver18){
        console.log('Is overage!')
    } else{
        console.log('Is underage!')
    }
    })
    .catch(err => {
        console.log(err.message)
    })