let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Chansey',
            height: 1.1,
            types: [
                'NORMAL'
            ]
        },
        {   
            name: 'Pikachu',
            height: 0.4,
            types: [
                'ELECTRIC'
            ]

        },
        {
            name: 'Jigglypuff',
            height: 0.5,
            types: [
                'FAIRY', 
                'NORMAL'
            ]

        }
    ];

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }
})();

// KEEPING THIS HERE FOR FUTURE REFERENCES
// // this loop iterates over pokemonList and writes their names and height
// for (let i=0; i<pokemonList.length; i++) {
//     //writes special text for pokemons with a height over 1
//     if (pokemonList[i].height>1) {
//         document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!' + '</p>')
//     } else {
//         document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
//     }
// }

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(function(pokemon) {
    if (pokemon.height>1) {
        document.write('<p>' + pokemon.name + ', height: ' + pokemon.height + ' - Wow, that\'s big!' + '</p>')
    } else {
        document.write('<p>' + pokemon.name + ', height: ' + pokemon.height + '</p>')

    }
});
