import { songForm } from '../../components/forms/song.form.js';
import { songsTableHeader } from '../../components/tables/headers.tables.js';
import {
  songTableRow,
  songsTable,
} from '../../components/tables/song.tables.js';
import {
  createSong,
  deleteSong,
  getAllSongs,
  updateSong,
} from '../../services/songs.services.js';
import insertOptions from '../options/insertOptions.helpers.js';
import selectedOption from '../options/selectOption.helpers.js';

export default async function songPage() {
  const page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', songsTableHeader());

  // add event listener to create song button
  document
    .querySelector('#create-song-header-btn')
    .addEventListener('click', () => openSongForm('create'));

  // add filter options
  insertOptions.genres('filter');
  insertOptions.labels('filter');

  // add table
  page.insertAdjacentHTML('beforeend', songsTable());

  // add table data
  try {
    const songs = await getAllSongs();
    songs.forEach(song => showSong(song));
  } catch (error) {
    console.log(error);
  }
  // add footer
  // page.insertAdjacentHTML('beforeend', footer());
}

export function showSong(song) {
  document
    .querySelector('#songsTableBody')
    .insertAdjacentHTML('afterbegin', songTableRow(song));
  document
    .querySelector(`#deleteSong_${song.id}`)
    .addEventListener('click', () => deleteSong(song.id));

  document
    .querySelector(`#editSong_${song.id}`)
    .addEventListener('click', () => selectSong(song));
}

// Purpose: Select song to update
export function selectSong(song) {
  //open dialog form
  openSongForm('update');
  //set gloabl variable
  const form = document.querySelector('#song-form');
  // set song values in form
  form.id = song.id;
  form.title.value = song.title;
  form.bonus_track.value = song.bonus_track;

  // set selected artists
  song.artists.forEach(artist => {
    document
      .querySelector('#selected-artists')
      .insertAdjacentHTML('beforeend', `<p>${artist}</p>`);
  });

  // set selected albums
  song.albums.forEach(album => {
    document
      .querySelector('#selected-albums')
      .insertAdjacentHTML('beforeend', `<p>${album}</p>`);
  });

  // set selected genres
  song.genres.forEach(genre => {
    document
      .querySelector('#selected-genres')
      .insertAdjacentHTML('beforeend', `<p>${genre}</p>`);
  });

  // set selected labels
  song.labels.forEach(label => {
    document
      .querySelector('#selected-labels')
      .insertAdjacentHTML('beforeend', `<p>${label}</p>`);
  });
}

export function openSongForm(formType) {
  console.log(formType);
  document.querySelector('#dialog-form-container').innerHTML = '';
  // check if form is create or update
  if (formType === 'create') {
    document
      .querySelector('#dialog-form-container')
      .insertAdjacentHTML('beforeend', songForm('create'));
    document.querySelector('#song-form').addEventListener('submit', createSong);
  } else if (formType === 'update') {
    document
      .querySelector('#dialog-form-container')
      .insertAdjacentHTML('beforeend', songForm('update'));
    document.querySelector('#song-form').addEventListener('submit', updateSong);
  }
  document.querySelector('#cancel-btn').addEventListener('click', () => {
    document.querySelector('#dialog-form-container').close();
  });

  // set genres, labels, albums, and songs options
  insertOptions.genres('form');
  insertOptions.labels('form');
  insertOptions.albums('form');
  insertOptions.artists('form');

  // set event listeners for genres, labels, albums, and songs
  document
    .querySelector('#form-albums')
    .addEventListener('change', selectedOption.album);
  document
    .querySelector('#form-genres')
    .addEventListener('change', selectedOption.genre);
  document
    .querySelector('#form-labels')
    .addEventListener('change', selectedOption.label);
  document
    .querySelector('#form-artists')
    .addEventListener('change', selectedOption.artist);

  document.querySelector('#dialog-form-container').showModal();
}
