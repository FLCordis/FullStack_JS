class User{
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
    login(email, password){
        if (this.password == password && this.email == email){
            console.log(`Login de ${this.fullname} feito com sucesso!`)
        } else {
            console.log(`Email de ${this.fullname} ou senha errados!`)
        }
    }
}

const userFlavio = new User("Flavio Cordis", "fcordis@email.com", "12345");
console.log(userFlavio);

userFlavio.login("fcordis@email.com", "12345");

const userJose = new User("José Zé", "zejose@email.com", "123456");
userJose.login("zejose@email.com", "123");