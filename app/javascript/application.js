// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"
//= require algolia/v3/algoliasearch.min
document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.querySelector('#search-input');
  var searchForm = document.querySelector('#search-form');
  var resultsContainer = document.querySelector('#search-results');

  // Remplacez 'YourApplicationID' et 'YourSearchOnlyAPIKey' par vos clés Algolia
  var client = algoliasearch('PDO8SRTL3V', 'ea191d93879875e591d1bbdde49e5197');
  var index = client.initIndex('Character'); // Remplacez 'YourIndexName'

  // Chargement de tous les caractères au chargement de la page
  index.search('').then(function(content) {
    // Affichez tous les caractères initiaux
    displayCharacters(content.hits);
  });

  // Gestionnaire d'événement pour la saisie de l'utilisateur
  searchInput.addEventListener('keyup', function() {
    var query = searchInput.value.trim();

    // Filtrage des caractères en fonction de la recherche de l'utilisateur
    index.search(query).then(function(content) {
      displayCharacters(content.hits);
    });
  });

  function displayCharacters(characters) {
    // Affichez les caractères dans la vue
    if (characters.length > 0) {
      resultsContainer.innerHTML = characters.map(function(character) {
        return `<h4>${character.name}</h4><p>${character.mbti}</p>`;
      }).join('');
    } else {
      resultsContainer.innerHTML = '<p>Pas de personnage trouvé.</p>';
    }
  }
});

