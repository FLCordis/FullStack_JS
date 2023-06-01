module.exports = class Tranfer{
    constructor(fromUser, receivedUser, value){
        this.fromUser = fromUser;
        this.receivedUser = receivedUser;
        this.value = value;
        this.createdAt = new Date();
    }
}