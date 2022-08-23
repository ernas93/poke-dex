let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/?limit=30';

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

    //adding Load list function for task
    function loadList() {
        return fetch(apiUrl).then(function(response){
            return response.json();
        }).then(function(json){
            json.results.forEach(function(item){
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            }); 
        }).catch(function(e){
            console.error(e);
        })  
    }

    //adding load details function with pokemon details, that are displayed on the console for now
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response){
            return response.json();
        }).then(function(details){
            item.height = details.height;
            item.types = details.types;
            item.imageUrl = details.sprites.front_default;
        }).catch(function(e){
            console.error(e);
        });
    }

    // going to add more in a later task
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function(){
            console.log(pokemon);
        });
    };

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
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



//let pokemonList = pokemonRepository.getAll();

pokemonRepository.loadList().then(function(){
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});

// pokemonList.forEach(function(pokemon) {
//     pokemonRepository.addListItem(pokemon);
// });


