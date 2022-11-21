let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl ='https://pokeapi.co/api/v2/pokemon/?limit=151';

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
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        button.classList.add('btn');
        button.classList.add('btn-warning');
        button.dataset.target = '#pokemon-modal';
        button.dataset.toggle = 'modal';
        // add button to list item and add item(pokemon) to the pokemon list elements in index.html
        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);
        // listens to clicks on pokemon button to show more details
        button.addEventListener('click', function(event) {
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
        let modalBody = document.querySelector('.modal-body');
        let modalTitle = document.querySelector('.modal-title');

        modalBody.innerText = '';

        modalTitle.innerText = pokemon.name;

        let height = document.createElement('p');
        height.innerText = 'Height: ' + pokemon.height;

        let image = document.createElement('img');
        image.src = pokemon.imageUrl;

        // appends the above elements to the modal body
        modalBody.appendChild(height);
        modalBody.appendChild(image);
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



