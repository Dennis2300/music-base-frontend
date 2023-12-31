import songsPage, {
  showSong,
  selectedAlbums,
  selectedArtists,
  selectedGenres,
  selectedLabels,
} from '../helpers/pages/songs.helpers.js';
const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export async function getAllSongs() {
  try {
    const response = await fetch(`${endpoint}/songs`);
    const songs = await response.json();
    return songs;
  } catch (error) {
    console.log(error);
  }
}
export async function getSong(id) {
  try {
    const response = await fetch(`${endpoint}/songs/${id}`);
    const song = await response.json();
    // add song to DOM
    showSong(song);
  } catch (error) {
    console.log(error);
  }
}
export async function createSong(event) {
  event.preventDefault();

  document.querySelector('#dialog-form-container').close();

  const song = {
    name: event.target.name.value,
    releaseDate: event.target.releaseDate.value,
    bonus_track: document.querySelector('#bonus_track').checked,
  };

  song.labels = selectedLabels.options; // array of selected labels
  song.genres = selectedGenres.options;
  song.artists = selectedArtists.options;
  song.albums = selectedAlbums.options;

  try {
    const response = await fetch(`${endpoint}/songs`, {
      method: 'POST',
      body: JSON.stringify(song),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    songsPage();
  } catch (error) {
    console.log(error);
  }
}

export async function updateSong(event) {
  event.preventDefault();
  console.log('update song');
  const song = {
    id: event.target.id,
    name: event.target.name.value,
    releaseDate: event.target.releaseDate.value,
    bonus_track: document.querySelector('#bonus_track').checked,
  };

  song.labels = selectedLabels.options; // array of selected labels
  song.genres = selectedGenres.options;
  song.artists = selectedArtists.options;
  song.albums = selectedAlbums.options;

  try {
    const response = await fetch(`${endpoint}/songs/${song.id}`, {
      method: 'PUT',
      body: JSON.stringify(song),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // update song in DOM
    document.querySelector(`#song_${song.id}`).remove();
    showSong(song);
    scrollToTop();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSong(id) {
  try {
    const response = await fetch(`${endpoint}/songs/${id}`, {
      method: 'DELETE',
    });
    // remove song from DOM
    document.querySelector(`#song_${id}`).remove();
  } catch (error) {
    console.log(error);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
