let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/?limit=151';

    let pokemonListElement = $('.pokemon-list');

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        //creating a list item (pokemons) with a button
        let listItem = $('<li class="list-group-item"></li>');
        // let button = document.createElement('button');
        let button = $('<button class="pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');

        // add button to list item and add item(pokemon) to the pokemon list elements in index.html
        listItem.append(button);
        pokemonListElement.append(listItem);
        // listens to clicks on pokemon button to show more details
        button.on('click', function(event) {
            showDetails(pokemon)
        })
    }; 

    //adding Load list function for task
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            }); 
        }).catch(function(e) {
            console.error(e);
        })  
    }

    //adding load details function with pokemon details, that are displayed on the console for now
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            item.height = details.height;
            item.types = details.types;
            item.imageUrl = details.sprites.front_default;
        }).catch(function(e) {
            console.error(e);
        });
    }

    // going to add more in a later task
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            showDetailsModal(pokemon);
        });
    };

    function showDetailsModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalBody.text('');
        modalTitle.text(pokemon.name);

        let height = $('<p>' + 'Height: ' + pokemon.height + '</p>');
        let image = $('<img src="' + pokemon.imageUrl + '" />');

        // appends the above elements to the modal body
        modalBody.append(height);
        modalBody.append(image);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
    }
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});



