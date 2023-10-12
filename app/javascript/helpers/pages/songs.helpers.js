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
import selectedOption from '../options/selectedOptions.helpers.js';

// objects to store and export selected options
export const selectedGenres = new selectedOption('selected-genres');
export const selectedLabels = new selectedOption('selected-labels');
export const selectedAlbums = new selectedOption('selected-albums');
export const selectedArtists = new selectedOption('selected-artists');

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
    selectedArtists.option = artist;
  });

  // set selected albums
  song.albums.forEach(album => {
    selectedAlbums.option = album;
  });

  // set selected genres
  song.genres.forEach(genre => {
    selectedGenres.option = genre;
  });

  // set selected labels
  song.labels.forEach(label => {
    selectedLabels.option = label;
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
    .addEventListener(
      'change',
      () =>
        (selectedAlbums.option = document.getElementById('form-albums').value)
    );
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
    .querySelector('#form-artists')
    .addEventListener(
      'change',
      () =>
        (selectedArtists.option = document.getElementById('form-artists').value)
    );

  document.querySelector('#dialog-form-container').showModal();
}
