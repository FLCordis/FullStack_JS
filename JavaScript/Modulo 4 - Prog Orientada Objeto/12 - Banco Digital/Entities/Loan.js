const Installment = require("./Installment");

module.exports = class Loan{
    static #loanFee = 1.05;

    constructor(value, installments){
        this.value = value;
        this.installments = [];
        for (let i = 1; i <= installments.length; i++) {
            this.installments.push(new Installment((value* Loan.#loanFee)/ installments, i))
        }
        this.createdAt = new Date();
    }

    //Getter e Setter do Atributo Privado de Taxa de Empréstimo
    static get loanFee(){
        return Loan.#loanFee;
    }

    static set loanFee(newFeePercent){
        Loan.#loanFee = 1 + (newFeePercent/100);
    }
}