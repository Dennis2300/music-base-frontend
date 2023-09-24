import { artistsPage } from './helpers/artists.helpers.js';
import insertOptions from './helpers/insertOptions.helpers.js';

window.addEventListener('load', initApp);

function initApp() {
  console.log('App initialized');

  // Add filter options
  insertOptions.insertOptions_Genres('filter');
  insertOptions.insertOptions_Labels('filter');

  // Add event listener to show artists button
  document
    .querySelector('#show-artists-btn')
    .addEventListener('click', artistsPage);
}
