alert("Visitando Cidades!")

const charName = prompt("Qual seu nome? ")
let travelCheck = prompt("Você já viajou (Sim/Não)? ")
let counter = 0
let citiesVisited = ""

while(travelCheck == "Sim"){
    let cityName = prompt("Qual o nome da cidade visitada?")
    travelCheck = prompt("Visitou mais alguma cidade? ")
    counter++
    citiesVisited += " - " + cityName + "\n"
}

alert("Turista: " + charName + 
"\nVisitou um total de " + counter + " cidades." + 
"\nSendo elas: \n" + citiesVisited)