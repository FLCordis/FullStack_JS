module.exports = class Installment{
    constructor(value, current){
        this.value = value;
        this.current = current;
        this.status = 'pending';
    }
}