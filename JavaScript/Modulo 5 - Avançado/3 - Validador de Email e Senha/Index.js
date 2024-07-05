// function emailValidation(email){
//     // Email = Validação com @, texto com pelo menos 2 caracteres antes do @, depois e após o '.' .
//     this.validEmail = email.match(/^[\w]{2,}@[a-zA-Z0-9_]{2,}\.[a-zA-Z]{2,}$/)
// }

// function passwordValidation(password){
//     // Senha = Uma letra minúscula, maiúscula, número, caracter especial e 8 no total.
//     this.validPassword = password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
// }

// try {
//     console.log(new emailValidation('fai@gh.co'))
//     console.log(new passwordValidation('Aa123333@'))
// } catch (error) {
    
// }

function validateEmail(email){
    if(!email.match(/\w{2,}@[@a-zA-Z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error('Email inválido.')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password){
    if (password.lenght < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/\d/) || !password.match(/[^a-zA-Z\s0-9]/)){
        const err = new Error('Senha inválida!')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles(inputs) {
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles(userInputs)

    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')

    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})