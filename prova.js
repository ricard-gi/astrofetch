let llista = await fetch('https://pokeapi.co/api/v2/pokemon');
llista = await llista.json();
//llista = llista.network.stations;

llista = llista.results;

const promises = await llista.map(async (poke) => {
	let item = await fetch(poke.url);
	item = await item.json();
	return {name:poke.name, img: item.sprites.front_default}
})

console.log(llista)

const pokemonDetails = await Promise.all(promises);
console.log(pokemonDetails);

