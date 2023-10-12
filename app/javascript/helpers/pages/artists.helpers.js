import { artistForm } from '../../components/forms/artist.form.js';
import {
  ArtistTable,
  ArtistRow,
} from '../../components/tables/artist.tables.js';
import { artistsTableHeader } from '../../components/tables/headers.tables.js';
import {
  createArtist,
  deleteArtist,
  favoriteArtist,
  getAllArtists,
  updateArtist,
} from '../../services/artists.services.js';
import insertOptions from '../options/insertOptions.helpers.js';
import selectedOptions from '../options/selectedOptions.helpers.js';

// objects to store and export selected options
export const selectedGenres = new selectedOptions('selected-genres');
export const selectedLabels = new selectedOptions('selected-labels');
export const selectedAlbums = new selectedOptions('selected-albums');
export const selectedSongs = new selectedOptions('selected-songs');

// Purpose: Artists page
export default async function artistsPage() {
  const page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', artistsTableHeader());

  insertOptions.genres('filter');
  insertOptions.labels('filter');

  // add event listener
  document
    .querySelector('#create-artist-header-btn')
    .addEventListener('click', () => openArtistForm('create'));

  // add table
  page.insertAdjacentHTML('beforeend', new ArtistTable().getHTML());

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
    .querySelector('#artistsTableBody')
    .insertAdjacentHTML('afterbegin', new ArtistRow(artist).createRowHTML());
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
function selectArtist(artist) {
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
    selectedGenres.option = genre;
  });
  // set selected labels
  artist.labels.forEach(label => {
    selectedLabels.option = label;
  });
  // set selected albums
  artist.albums.forEach(album => {
    selectedAlbums.option = album;
  });
  // set selected songs
  artist.songs.forEach(song => {
    selectedSongs.option = song;
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
  insertOptions.genres('form');
  insertOptions.labels('form');
  insertOptions.albums('form');
  insertOptions.songs('form');

  // set event listeners for genres, labels, albums, and songs
  document
    .querySelector('#form-genres')
    .addEventListener(
      'change',
      () =>
        (selectedGenres.option = document.getElementById('form-genres').value)
    );
  document
    .querySelector('#form-labels')
    .addEventListener(
      'change',
      () =>
        (selectedLabels.option = document.getElementById('form-labels').value)
    );
  document
    .querySelector('#form-albums')
    .addEventListener(
      'change',
      () =>
        (selectedAlbums.option = document.getElementById('form-albums').value)
    );
  document
    .querySelector('#form-songs')
    .addEventListener(
      'change',
      () => (selectedSongs.option = document.getElementById('form-songs').value)
    );

  document.querySelector('#dialog-form-container').showModal();
}
