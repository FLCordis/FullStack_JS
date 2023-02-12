const dayjs = require("dayjs");

function birthdayDays(date) {
    const birthday = dayjs(date);
    const todayDate = dayjs();

    const personAge = todayDate.diff(birthday, 'year');
    const nextBday = birthday.add(personAge + 1, 'year');
    const daysToBday = nextBday.diff(todayDate, 'day');

    console.log(`Idade: ${personAge}`);
    console.log(`Próximo Aniversário: ${nextBday.format('DD/MM/YYYY')}`);
    console.log(`Dias para ${personAge + 1} anos: ${daysToBday} dias.`);
}

birthdayDays("2001-06-22");