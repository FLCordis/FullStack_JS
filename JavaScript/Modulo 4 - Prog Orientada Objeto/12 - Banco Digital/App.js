const Deposit = require("./Entities/Deposit");
const User = require("./Entities/User");
const Transfer = require("./Entities/Transfer");
const Loan = require("./Entities/Loan");

module.exports = class App{
    static #users = [];

    static findUser(email){
        const user = this.#users.find(user => user.email === email)
        return user ?? null;
    }

    static createUser(email, fullname){
        const userExists = App.findUser(email);
        if(!userExists){
            this.#users.push(new User(fullname, email));
        }
    }

    static deposit(email, value){
        const user = App.findUser(email);
        if (user){
            const newDeposit = new Deposit(value);
            user.account.addDeposit(value);
        } else{
            throw new Error('Conta não existente!')
        }
    }

    static transfer(fromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(fromUserEmail);
        const toUser = App.findUser(toUserEmail);

        if (fromUser && toUser){
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer);
            toUser.account.addTransfer(newTransfer);
        }
    }

    static takeLoan(email, value, totalInstallments){
        const user = App.findUser(email);
        if (user){
            const newLoan = new Loan(value, totalInstallments)
            user.account.addLoan(newLoan);
        }
    }

    static changeLoanFee(newFeePercent){
        Loan.loanFee = newFeePercent;
    }
}