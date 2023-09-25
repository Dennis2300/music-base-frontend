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
import selectedOption from '../options/selectOption.helpers.js';

export default async function albumPage() {
  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', albumsTableHeader());

  // add filter options
  insertOptions.insertOptions_Genres('filter');
  insertOptions.insertOptions_Labels('filter');

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
    .querySelector('#albumsTableBody')
    .insertAdjacentHTML('afterbegin', albumTableRow(album));
  document
    .querySelector(`#deleteAlbum_${album.id}`)
    .addEventListener('click', () => deleteAlbum(album.id));
  document
    .querySelector(`#editAlbum_${album.id}`)
    .addEventListener('click', () => selectAlbum(album));
}

// Purpose: Select album to update
export function selectAlbum(album) {
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
    document
      .querySelector('#selected-labels')
      .insertAdjacentHTML('beforeend', `<p>${label}</p>`);
  });

  //set selected genres
  album.genres.forEach(genre => {
    document
      .querySelector('#selected-genres')
      .insertAdjacentHTML('beforeend', `<p>${genre}</p>`);
  });

  //set selected songs
  album.songs.forEach(song => {
    document
      .querySelector('#selected-songs')
      .insertAdjacentHTML('beforeend', `<p>${song}</p>`);
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
  insertOptions.insertOptions_Genres('form');
  insertOptions.insertOptions_Labels('form');
  insertOptions.insertOptions_Songs('form');
  insertOptions.insertOptions_Artists('form');

  // set event listeners for genres, labels, albums, and songs
  document
    .querySelector('#form-genres')
    .addEventListener('change', selectedOption.selectedGenre);
  document
    .querySelector('#form-labels')
    .addEventListener('change', selectedOption.selectedLabel);
  document
    .querySelector('#form-songs')
    .addEventListener('change', selectedOption.selectedSong);
  document
    .querySelector('#form-artists')
    .addEventListener('change', selectedOption.selectedArtist);

  document.querySelector('#dialog-form-container').showModal();
}
