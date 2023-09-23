import { albumForm } from '../components/forms/albums/Form.js';
import { headerAlbums } from '../components/globals/headers.js';
import { 
  albumTable, 
  albumTableRow 
} from '../components/tables/album.tables.js';
import { getAllAlbums } from '../services/albums.services.js';

export async function albumPage(event) {
  console.log('Album page');
  event.preventDefault();

  let page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  // add header
  page.insertAdjacentHTML('beforeend', headerAlbums());

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
  // .querySelector(
  //   `#editAlbum_${album.id}`).addEventListener('click', () => selectAlbum(album)
  // );
}

export function openAlbumForm(formType) {
  document.querySelector("#dialog").innerHTML = '';
  // check if form is create or update
  if (form === 'create') {
    document.querySelector("#dialog")
    .insertAdjacentHTML('beforeend', albumForm('create'));
    document
    .querySelector('#album-form')
    .addEventListener('submit', createAlbum);
  } else if (formType === 'update') {
    document.querySelector("#dialog")
    .insertAdjacentHTML('beforeend', albumForm('update'));
    document
    .querySelector('#album-form')
    .addEventListener('submit', updateAlbum);
  }
  document.querySelector("#cancel-btn").addEventListener('click', () => {
    document.querySelector("#dialog").close();
  } );

  document.querySelector("#dialog").showModal();
}