import { insertSelectOptionsGenres, insertSelectOptionsLabels } from './modules/insertSelectOptionsGenres.js';

window.addEventListener('load', initApp);

function initApp() {
   console.log('App initialized');

   insertSelectOptionsGenres();
   insertSelectOptionsLabels();
}