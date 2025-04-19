// Pokemon exercises
async function getRandomPokemon() {
    const totalPokemon = 898; // Total number of Pokemon in the API
    const randomId = Math.floor(Math.random() * totalPokemon) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    return data;
}

async function getImageAndName(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    const name = data.name;
    const img = data.sprites.front_default;
    return { name, img };
}

async function printImageAndName(pokemon) {
    const { name, img } = await getImageAndName(pokemon);
    return `<section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
</section>`;
}

// Pokemon vs Dogs exercises
async function getRandomDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
}

async function getRandomPokemonImage() {
    const pokemon = await getRandomPokemon();
    return pokemon.sprites.front_default;
}

async function printPugVsPikachu() {
    // Get Pug image
    const pugResponse = await fetch('https://dog.ceo/api/breed/pug/images/random');
    const pugData = await pugResponse.json();
    const pugImage = pugData.message;

    // Get Pikachu image
    const pikachuResponse = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const pikachuData = await pikachuResponse.json();
    const pikachuImage = pikachuData.sprites.front_default;

    document.body.innerHTML = `
        <div style="display: flex; justify-content: space-around; align-items: center">
            <div>
                <h2>Pug</h2>
                <img src="${pugImage}" alt="Pug" style="width: 200px">
            </div>
            <h1>VS</h1>
            <div>
                <h2>Pikachu</h2>
                <img src="${pikachuImage}" alt="Pikachu" style="width: 200px">
            </div>
        </div>
    `;
}

// Rick and Morty exercises
async function getRandomCharacter() {
    const totalCharacters = 671; // Total number of characters in the API
    const randomId = Math.floor(Math.random() * totalCharacters) + 1;
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await response.json();
    return data;
}

async function getRandomCharacterInfo() {
    const character = await getRandomCharacter();
    const firstEpisodeUrl = character.episode[0];
    
    // Get first episode info
    const episodeResponse = await fetch(firstEpisodeUrl);
    const episodeData = await episodeResponse.json();
    
    return {
        img: character.image,
        name: character.name,
        episodes: character.episode,
        firstEpisode: episodeData.name,
        dateEpisode: episodeData.air_date
    };
}

async function printCharacterInfo() {
    const characterInfo = await getRandomCharacterInfo();
    document.body.innerHTML = `
        <div style="text-align: center">
            <img src="${characterInfo.img}" alt="${characterInfo.name}">
            <h1>${characterInfo.name}</h1>
            <p>Number of episodes: ${characterInfo.episodes.length}</p>
            <p>First episode: ${characterInfo.firstEpisode}</p>
            <p>Air date: ${characterInfo.dateEpisode}</p>
        </div>
    `;
}