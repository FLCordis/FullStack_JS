function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0] // Regex para capturar os 3 primeiros dígitos, conhecidos como código do país, o [0] ele vai retornar só a mensagem em si no Array, onde possui outros dados.
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0] // Pegar o DDD
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "") // Pegar o número
}

console.log(new PhoneNumber('+55 (16) 9 8765-4321'))
console.log(new PhoneNumber('+1 (26) a5 8a555-333-1'))
