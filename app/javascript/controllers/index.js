// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
// Initialisez le client Algolia avec votre ApplicationID et votre Search-Only-API-Key
var client = algoliasearch('PDO8SRTL3V', 'ea191d93879875e591d1bbdde49e5197');

// Initialisez l'index sur lequel vous souhaitez effectuer des recherches
var index = client.initIndex('Character');

// Effectuez une recherche avec des options (par exemple, 10 résultats par page, page 0)
index.search('something', { hitsPerPage: 10, page: 0 })
  .then(function searchDone(content) {
    // Traitement des résultats de la recherche
    console.log(content);
  })
  .catch(function searchFailure(err) {
    // Gestion des erreurs en cas d'échec de la recherche
    console.error(err);
  });
