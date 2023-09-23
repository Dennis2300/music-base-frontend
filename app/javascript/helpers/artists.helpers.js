import { artistForm } from '../components/forms/artist.form.js';
import { headerArtists } from '../components/globals/headers.js';
import {
  artistTable,
  artistTableRow,
} from '../components/tables/artist.tables.js';
import { getAllArtists } from '../services/artists.services.js';

// Purpose: Artists page
export async function artistsPage(event) {
  console.log('Artists page');
  event.preventDefault();

  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', headerArtists());

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

function showArtist(artist) {
  document
    .querySelector('#artistsTable-container')
    .insertAdjacentHTML('afterbegin', artistTableRow(artist));
  //   document
  //     .querySelector(
  //       '#artistsTable-container tbody:first-child .btn-delete-artist'
  //     )
  //     .addEventListener('click', () => deleteArtist(artist.id));
  document
    .querySelector(`#editArtist_${artist.id}`)
    .addEventListener('click', () => selectArtist(artist));
  //   document
  //     .querySelector('#artistsTable-container tbody:first-child .favorite_btn')
  //     .addEventListener('click', () => favoriteArtist(artist));
}
// Purpose: Select artist to update
export function selectArtist(artist) {
  // open dialog form
  openArtistForm('update');
  // Set global variable
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
      .querySelector('#selectedGenres')
      .insertAdjacentHTML('beforeend', `<p>${genre.name}</p>`);
  });
  // set selected labels
  artist.labels.forEach(label => {
    document
      .querySelector('#selectedLabels')
      .insertAdjacentHTML('beforeend', `<p>${label.name}</p>`);
  });
  // set selected albums
  artist.albums.forEach(album => {
    document
      .querySelector('#selectedAlbums')
      .insertAdjacentHTML('beforeend', `<p>${album.name}</p>`);
  });
  // set selected songs
  artist.songs.forEach(song => {
    document
      .querySelector('#selectedSongs')
      .insertAdjacentHTML('beforeend', `<p>${song.name}</p>`);
  });
}

export function openArtistForm(formType) {
  document.querySelector('#dialog').innerHTML = '';
  // check if form is create or update
  if (formType === 'create') {
    document
      .querySelector('#dialog')
      .insertAdjacentHTML('beforeend', artistForm('create'));
    document
      .querySelector('#artist-form')
      .addEventListener('submit', createArtist);
  } else if (formType === 'update') {
    document
      .querySelector('#dialog')
      .insertAdjacentHTML('beforeend', artistForm('update'));
    document
      .querySelector('#artist-form')
      .addEventListener('submit', updateArtist);
  }
  document.querySelector('#cancel-btn').addEventListener('click', () => {
    document.querySelector('#dialog').close();
  });

  document.querySelector('#dialog').showModal();
}
