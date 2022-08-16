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

    let pokemonListElement = document.querySelector('.pokemon-list');

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        //creating a list item (pokemons) with a button
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        // add button to list item and add item(pokemon) to the pokemon list elements in index.html
        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
        // listens to clicks on pokemon button to show more details
        button.addEventListener('click', function(event){
            showDetails(pokemon)
        })
    }; 

    // going to add more in a later task
    function showDetails(pokemon) {
        console.log(pokemon);
    };

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
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
    pokemonRepository.addListItem(pokemon);
});


