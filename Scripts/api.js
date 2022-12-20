apiJS(); // función para exportar luego al index js

function apiJS() {
  window.onload = async () => {
    try {
      const arrayPokemon = [
        {id: 252, cardId: 'green'},
        {id: 255, cardId: 'red'},
        {id: 258, cardId: 'blue'},
      ];
      for (let i = 0; i < 3; i++) {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${arrayPokemon[i].id}`,
        );
        const data = await res.json();
        backgroundsCard(data, arrayPokemon[i].cardId);
        imgCardBack(data, arrayPokemon[i].cardId);
      }
    } catch {
      console.log(error);
    }
  };
}

function backgroundsCard(pokemon, cardId) {
  const card = document.getElementById(`theme__card_${cardId}Front`);
  card.style.backgroundImage = `url("${pokemon.sprites.other.dream_world.front_default}")`;
}

function imgCardBack(pokemonImg, cardId) {
  const cardBack = document.getElementById(`theme__card_${cardId}Img`);
  cardBack.setAttribute(
      'src',
      `${pokemonImg.sprites.other.dream_world.front_default}`,
  );
  // cardBack.setAttribute('src', `${pokemonImg.sprites.other.official-artwork.front_default}`);
}
