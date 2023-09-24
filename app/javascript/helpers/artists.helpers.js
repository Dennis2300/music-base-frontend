import { artistForm } from '../components/forms/artist.form.js';
import { artistsHeader } from '../components/globals/headers.js';
import {
  artistTable,
  artistTableRow,
} from '../components/tables/artist.tables.js';
import {
  createArtist,
  deleteArtist,
  favoriteArtist,
  getAllArtists,
  updateArtist,
} from '../services/artists.services.js';
import insertOptions from './insertOptions.helpers.js';
import selectedOption from './selectOption.helpers.js';

// Purpose: Artists page
export async function artistsPage() {
  console.log('Artists page');

  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', artistsHeader());

  // add event listener to create artist button
  document
    .querySelector('#create-artist-header-btn')
    .addEventListener('click', () => openArtistForm('create'));

  // add table
  page.insertAdjacentHTML('beforeend', artistTable());

  // add table data

  try {
    const artists = await getAllArtists();
    artists.forEach(artist => showArtist(artist));
  } catch (error) {
    console.log(error);
  }

  // add footer
  // page.insertAdjacentHTML('beforeend', footer());
}

export function showArtist(artist) {
  document
    .querySelector('#artistsTable-container')
    .insertAdjacentHTML('afterbegin', artistTableRow(artist));
  document
    .querySelector(`#deleteArtist_${artist.id}`)
    .addEventListener('click', () => deleteArtist(artist.id));
  document
    .querySelector(`#editArtist_${artist.id}`)
    .addEventListener('click', () => selectArtist(artist));
  document
    .querySelector(`#favoriteArtist_${artist.id}`)
    .addEventListener('click', () => favoriteArtist(artist));
}
// Purpose: Select artist to update
export function selectArtist(artist) {
  // open dialog form
  openArtistForm('update');

  const form = document.querySelector('#artist-form');
  // set artist values in form
  form.id = artist.id;
  form.name.value = artist.name;
  form.birthdate.value = artist.birthdate;
  form.activeSince.value = artist.activeSince;
  form.image.value = artist.image;
  form.shortDescription.value = artist.shortDescription;
  form.website.value = artist.website;

  // set selected genres
  artist.genres.forEach(genre => {
    document
      .querySelector('#selected-genres')
      .insertAdjacentHTML('beforeend', `<p>${genre}</p>`);
  });
  // set selected labels
  artist.labels.forEach(label => {
    document
      .querySelector('#selected-labels')
      .insertAdjacentHTML('beforeend', `<p>${label}</p>`);
  });
  // set selected albums
  artist.albums.forEach(album => {
    document
      .querySelector('#selected-albums')
      .insertAdjacentHTML('beforeend', `<p>${album}</p>`);
  });
  // set selected songs
  artist.songs.forEach(song => {
    document
      .querySelector('#selected-songs')
      .insertAdjacentHTML('beforeend', `<p>${song}</p>`);
  });
}

export function openArtistForm(formType) {
  document.querySelector('#dialog-form-container').innerHTML = '';
  // check if form is create or update
  if (formType === 'create') {
    document
      .querySelector('#dialog-form-container')
      .insertAdjacentHTML('beforeend', artistForm('create'));
    document
      .querySelector('#artist-form')
      .addEventListener('submit', createArtist);
  } else if (formType === 'update') {
    document
      .querySelector('#dialog-form-container')
      .insertAdjacentHTML('beforeend', artistForm('update'));
    document
      .querySelector('#artist-form')
      .addEventListener('submit', updateArtist);
  }

  document.querySelector('#cancel-btn').addEventListener('click', () => {
    document.querySelector('#dialog-form-container').close();
  });

  // set genres, labels, albums, and songs options
  insertOptions.insertOptions_Genres('form');
  insertOptions.insertOptions_Labels('form');
  insertOptions.insertOptions_Albums('form');
  insertOptions.insertOptions_Songs('form');

  // set event listeners for genres, labels, albums, and songs
  document
    .querySelector('#form-genres')
    .addEventListener('change', selectedOption.selectedGenre);
  document
    .querySelector('#form-labels')
    .addEventListener('change', selectedOption.selectedLabel);
  document
    .querySelector('#form-albums')
    .addEventListener('change', selectedOption.selectedAlbum);
  document
    .querySelector('#form-songs')
    .addEventListener('change', selectedOption.selectedSong);

  document.querySelector('#dialog-form-container').showModal();
}
