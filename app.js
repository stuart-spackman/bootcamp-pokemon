// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// const pokemonArray = [];

// for (let i = 1; i <= 151; i++) {
//     const pokemonObject = {};
//     pokemonObject[`pokemon${i}`] = document.createElement('div');
//     pokemonObject[`pokemon${i}`].classList.add('pokemon');
//     pokemonObject[`label${i}`] = document.createElement('span');
//     pokemonObject[`label${i}`].innerText = `#${i}`;
//     pokemonObject[`newImg${i}`] = document.createElement('img');
//     pokemonObject[`newImg${i}`].src = `${baseURL + i.toString()}.png`;
//     pokemonArray.push(pokemonObject);
// }

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL + i.toString()}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

}

// if set timeout is needed use the following example code 
// const id = setInterval(() => {
//     console.log(Math.random());
// }, 1000);

// setTimeout(() => {
//     clearInterval(id);
// }, 5000);


{/* <div>
    <img>
    <span>Number</span>
</div> */}