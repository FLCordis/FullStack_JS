function createCountryCard(country){
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const countryFlag = document.createElement('img')
    countryFlag.src = country.flags.svg
    countryFlag.alt = countryName

    card.append(name, countryFlag)
    document.querySelector('#countries').append(card)
}

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()

    countries.forEach(createCountryCard)
}

getCountries()