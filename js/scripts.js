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

// this loop iterates over pokemonList and writes their names and height
for (let i=0; i<pokemonList.length; i++) {
    //writes special text for pokemons with a height over 1
    if (pokemonList[i].height>1) {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!')
    } else {
        document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>')
    }
}