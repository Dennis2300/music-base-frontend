import albumPage, {
  showAlbum,
  selectedArtists,
  selectedGenres,
  selectedLabels,
  selectedSongs,
} from '../helpers/pages/albums.helpers.js';

const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export async function getAllAlbums() {
  try {
    const response = await fetch(`${endpoint}/albums`);
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.log(error);
  }
}

export async function getAlbum(id) {
  try {
    const response = await fetch(`${endpoint}/albums/${id}`);
    const album = await response.json();
    // add album to DOM
    showAlbum(album);
  } catch (error) {
    console.log(error);
  }
}

export async function createAlbum(event) {
  event.preventDefault();

  document.querySelector('#dialog-form-container').close();

  const album = {
    name: event.target.name.value,
    releaseDate: event.target.releaseDate.value,
    image: event.target.image.value,
    shortDescription: event.target.shortDescription.value,
  };

  album.labels = selectedArtists.options; // array of selected labels
  album.genres = selectedGenres.options;
  album.artists = selectedLabels.options;
  album.songs = selectedSongs.options;

  try {
    const response = await fetch(`${endpoint}/albums`, {
      method: 'POST',
      body: JSON.stringify(album),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    albumPage();
  } catch (error) {
    console.log(error);
  }
}

export async function updateAlbum(event) {
  event.preventDefault();
  console.log('update album');
  const album = {
    id: event.target.id,
    name: event.target.name.value,
    releaseDate: event.target.releaseDate.value,
    image: event.target.image.value,
    shortDescription: event.target.shortDescription.value,
  };

  album.labels = selectedArtists.options; // array of selected labels
  album.genres = selectedGenres.options;
  album.artists = selectedLabels.options;
  album.songs = selectedSongs.options;

  try {
    const response = await fetch(`${endpoint}/albums/${album.id}`, {
      method: 'PUT',
      body: JSON.stringify(album),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // update DOM with updated album
    document.querySelector(`#album_${album.id}`).remove();
    showAlbum(album);
    scrollToTop();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAlbum(id) {
  try {
    const response = await fetch(`${endpoint}/albums/${id}`, {
      method: 'DELETE',
    });
    // remove album from DOM
    document.querySelector(`#album_${id}`).remove();
  } catch (error) {
    console.log(error);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
