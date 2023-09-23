import { headerArtists } from '../components/globals/headers.js';
import {
  artistTable,
  artistTableRow,
} from '../components/tables/artist.tables.js';
import { getAllArtists } from '../services/artists.services.js';

export async function homePage(event) {
  console.log('Home page');
}

export async function artistsPage(event) {
  console.log('Artists page');
  event.preventDefault();

  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', headerArtists());

  // add table
  page.insertAdjacentHTML('beforeend', artistTable());

  // add table data
  try {
    const artists = await getAllArtists();
    artists.forEach(artist => {
      document
        .querySelector('#artistsTable-container')
        .insertAdjacentHTML('beforeend', artistTableRow(artist));
    });
  } catch (error) {
    console.log(error);
  }

  // add footer
  // page.insertAdjacentHTML('beforeend', footer());
}

export async function albumPage() {
  console.log('Album page');
}
