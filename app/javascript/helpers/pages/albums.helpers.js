import { albumForm } from '../../components/forms/album.form.js';
import {
  albumTable,
  albumTableRow,
} from '../../components/tables/album.tables.js';
import { albumsTableHeader } from '../../components/tables/headers.tables.js';
import {
  createAlbum,
  deleteAlbum,
  getAllAlbums,
  updateAlbum,
} from '../../services/albums.services.js';
import insertOptions from '../options/insertOptions.helpers.js';
import selectedOptions from '../options/selectedOptions.helpers.js';

// objects to store and export selected options
export const selectedGenres = new selectedOptions('selected-genres');
export const selectedLabels = new selectedOptions('selected-labels');
export const selectedArtists = new selectedOptions('selected-artists');
export const selectedSongs = new selectedOptions('selected-songs');

export default async function albumPage() {
  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', albumsTableHeader());

  // add filter options
  insertOptions.genres('filter');
  insertOptions.labels('filter');

  // add event listener to create album button
  document
    .querySelector('#create-album-header-btn')
    .addEventListener('click', () => openAlbumForm('create'));

  // add table
  page.insertAdjacentHTML('beforeend', albumTable());

  // add table data
  try {
    const albums = await getAllAlbums();
    albums.forEach(album => showAlbum(album));
  } catch (error) {
    console.log(error);
  }
  // add footer
  // page.insertAdjacentHTML('beforeend', footer());
}

export function showAlbum(album) {
  document
    .querySelector(`#albumsTableBody`)
    .insertAdjacentHTML('afterbegin', albumTableRow(album));
  document
    .querySelector(`#deleteAlbum_${album.id}`)
    .addEventListener('click', () => deleteAlbum(album.id));
  document
    .querySelector(`#editAlbum_${album.id}`)
    .addEventListener('click', () => selectAlbum(album));
}

// Purpose: Select album to update
function selectAlbum(album) {
  // open dialog form
  openAlbumForm('update');
  // set global variable
  const form = document.querySelector('#album-form');
  // set form values in form
  form.id = album.id;
  form.title.value = album.title;

  //set selected artists
  album.artists.forEach(artist => {
    document
      .querySelector('#selected-artists')
      .insertAdjacentHTML('beforeend', `<p>${artist}</p>`);
  });

  //set selected labels
  album.labels.forEach(label => {
    selectedLabels.option = label;
  });

  //set selected genres
  album.genres.forEach(genre => {
    selectedGenres.option = genre;
  });

  //set selected songs
  album.songs.forEach(song => {
    selectedSongs.option = song;
  });
}

export function openAlbumForm(formType) {
  document.querySelector('#dialog-form-container').innerHTML = '';
  // check if form is create or update
  if (formType === 'create') {
    document
      .querySelector('#dialog-form-container')
      .insertAdjacentHTML('beforeend', albumForm('create'));
    document
      .querySelector('#album-form')
      .addEventListener('submit', createAlbum);
  } else if (formType === 'update') {
    document
      .querySelector('#dialog-form-container')
      .insertAdjacentHTML('beforeend', albumForm('update'));
    document
      .querySelector('#album-form')
      .addEventListener('submit', updateAlbum);
  }
  document.querySelector('#cancel-btn').addEventListener('click', () => {
    document.querySelector('#dialog-form-container').close();
  });

  // set genres, labels, albums, and songs options
  insertOptions.genres('form');
  insertOptions.labels('form');
  insertOptions.songs('form');
  insertOptions.artists('form');

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
    .querySelector('#form-songs')
    .addEventListener(
      'change',
      () => (selectedSongs.option = document.getElementById('form-songs').value)
    );
  document
    .querySelector('#form-artists')
    .addEventListener(
      'change',
      () =>
        (selectedArtists.option = document.getElementById('form-artists').value)
    );

  document.querySelector('#dialog-form-container').showModal();
}
