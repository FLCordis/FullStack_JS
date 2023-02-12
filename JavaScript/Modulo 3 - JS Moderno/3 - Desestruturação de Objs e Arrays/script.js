const person = {
    name: "Obi Wan-Kenobi",
    job: "Butcher",
    friends : ["Yoda","Mace Windu","Anakin"]
}

const name = person.name;

const {job, friends} = person; //Com desestruturação
console.log(name, job, friends);



const [master, oldfriend, brother] = parents;
console.log(master, oldfriend, brother)



function createUser({name, job, friends}){
    const id = Math.floor(Math.random() * 9999);
    return {
        id,
        name,
        job,
        friends
    }
}

const obiwan = createUser(person);