module.exports = class Account{
    #balance;
    // #deposits;
    // #loans;
    // #transfers;
    constructor(user){
        this.owner = user;
        this.#balance = 0;
        this.deposits = [];
        this.loans = [];
        this.transfers = [];
    }

    //Getters e Setters
    getBalance(){
        return this.#balance;
    }

    addDeposit(deposit){
        this.#balance += deposit.value;
        this.deposits.push(deposit);
    }

    addLoan(loan){
        this.#balance += loan.value;
        this.loans.push(loan);
    }

    addTransfer(transfer){
        if (this.owner.email === transfer.receivedUser.email){
            this.#balance += transfer.value;
            this.transfers.push(transfer);
        } else if(this.owner.email === transfer.fromUser.email) {
            this.#balance -= transfer.value;
            this.transfers.push(transfer);
        }
    }
}