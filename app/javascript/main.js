// import { insertSelectOptionsGenres, insertSelectOptionsLabels } from './modules/insertSelectOptionsGenres.js';
import { artistsPage } from './helpers/page.helpers.js';

window.addEventListener('load', initApp);

function initApp() {
  console.log('App initialized');

  // insertSelectOptionsGenres();
  // insertSelectOptionsLabels();

  document
    .querySelector('#show-artists-btn')
    .addEventListener('click', artistsPage);
}
