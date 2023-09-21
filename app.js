// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

pokemonArray = [];
for (let i = 1; i <= 151; i++) {
    let pokemonObject = {}
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL + i.toString()}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    pokemonObject[`pokemon${i}`] = pokemon;
    pokemonArray.push(pokemonObject);
}

let start = 1;
let interval = 33;

let pokemonPrinter = (i) => {
    if (i <= 151) {
        container.appendChild(pokemonArray[i - 1][`pokemon${i}`]);
    }
}

const printer = setInterval(() => {
    pokemonPrinter(start++);
}, interval);

setTimeout(() => {
    clearInterval(printer);
    alert('Interval function now cleared. All pokemon have been printed to the screen.');
}, interval * 160); 