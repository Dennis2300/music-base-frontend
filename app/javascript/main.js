
import { artistsPage } from './helpers/artists.helpers.js';
import { insertFilterOptions_Genres, insertFilterOptions_Labels } from './helpers/little.helpers.js';

window.addEventListener('load', initApp);

function initApp() {
  console.log('App initialized');

  insertFilterOptions_Genres();
  insertFilterOptions_Labels();

  document
    .querySelector('#show-artists-btn')
    .addEventListener('click', artistsPage);
}
