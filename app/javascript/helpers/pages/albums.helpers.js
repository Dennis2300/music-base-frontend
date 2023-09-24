import { albumForm } from '../../components/forms/album.form.js';
import { 
  albumTable, 
  albumTableRow 
} from '../../components/tables/album.tables.js';
import { albumsHeader } from '../../components/tables/headers.tables.js';
import { getAllAlbums } from '../../services/albums.services.js';

export async function albumPage(event) {
  console.log('Album page');
  event.preventDefault();

  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', albumsHeader());

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

function showAlbum(album) {
  document
    .querySelector('#albumsTable-container')
    .insertAdjacentHTML('afterbegin', albumTableRow(album));

    // document
    //   .querySelector(
    //     '#albumsTable-container tbody:first-child .btn-delete-album'
    //   )
    //   .addEventListener('click', () => deleteArtist(album.id));   

  document
  .querySelector(
    `#editAlbum_${album.id}`).addEventListener('click', () => selectAlbum(album)
  );

    // document
    //   .querySelector('#albumsTable-container tbody:first-child .favorite_btn')
    //   .addEventListener('click', () => favoriteAlbum(album));
}

// Purpose: Select album to update
export function selectAlbum(album) {
  // open dialog form
  openAlbumForm('update')
  // set global variable
  const form = document.querySelector('#album-form');
  // set form values in form
  form.id = album.id;
  form.title.value = album.title;
  form.releaseDate = album.releaseDate;

  //set selected artists
  album.artists.forEach(artist => {
    document
      .querySelector('#selectedArtists')
      .insertAdjacentHTML('beforeend', `<p>${artist}</p>`)
  });

  //set selected labels
  album.labels.forEach(label => {
    document
      .querySelector('#selectedLabels')
      .insertAdjacentHTML('beforeend',`<p>${label}</p>`)
  });

  //set selected genres
  album.genres.forEach(genre => {
    document
      .querySelector('#selectedGenres')
      .insertAdjacentHTML('beforeend',`<p>${genre}</p>`)
  });

  //set selected songs
  album.songs.forEach(song => {
    document
      .querySelector('#selectedSongs')
      .insertAdjacentHTML('beforeend',`<p>${song}</p>`)
  });
}

export function openAlbumForm(formType) {
  document.querySelector("#dialog-form-container").innerHTML = '';
  // check if form is create or update
  if (formType === 'create') {
    document.querySelector("#dialog-form-container")
    .insertAdjacentHTML('beforeend', albumForm('create'));
    document
    .querySelector('#album-form')
    .addEventListener('submit', createAlbum);
  } else 
  if (formType === 'update') {
    document.querySelector("#dialog-form-container")
    .insertAdjacentHTML('beforeend', albumForm('update'));
    // document
    // .querySelector('#album-form')
    // .addEventListener('submit', updateAlbum);
  }
  document.querySelector("#cancel-btn").addEventListener('click', () => {
    document.querySelector("#dialog-form-container").close();
  } );

  document.querySelector("#dialog-form-container").showModal();
}