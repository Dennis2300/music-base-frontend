import artistsPage from "./helpers/pages/artists.helpers.js";
import homePage from "./helpers/pages/home.helpers.js";

window.addEventListener('load', initApp);

function initApp() {
  console.log('App initialized');

  homePage();

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
