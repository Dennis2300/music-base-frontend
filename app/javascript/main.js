import artistsPage from './helpers/artists.helpers.js';
import homePage from './helpers/home.helpers.js';
import insertOptions from './services/insertOptions.services.js';
import { songPage } from './helpers/songs.helpers.js';
import { albumPage } from './helpers/albums.helpers.js';

window.addEventListener('load', initApp);

function initApp() {
  console.log('App initialized');

  homePage();

  // Add filter options
  insertOptions.insertOptions_Genres('filter');
  insertOptions.insertOptions_Labels('filter');

  // Add event listeners
  document
    .querySelector('#show-artists-btn')
    .addEventListener('click', artistsPage);

  document.querySelector('#home-btn').addEventListener('click', homePage);

  document.querySelector('#show-albums-btn').addEventListener('click', () => {
    return alert('Tålmodighed RACE!');
  });

  document.querySelector('#show-songs-btn').addEventListener('click', () => {
    return alert('Den her koster penge hvis du vil se den!');
  });
}
