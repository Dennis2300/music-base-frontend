import artistsPage, {
  selectedGenres,
  selectedLabels,
  selectedAlbums,
  selectedSongs,
  showArtist,
} from '../helpers/pages/artists.helpers.js';

const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export async function getAllArtists() {
  try {
    const response = await fetch(`${endpoint}/artists`);
    const artists = await response.json();
    return artists;
  } catch (error) {
    console.log(error);
  }
}

export async function getArtist(id) {
  try {
    const response = await fetch(`${endpoint}/artists/${id}`);
    const artist = await response.json();
    // add artist to DOM
    showArtist(artist);
  } catch (error) {
    console.log(error);
  }
}

export async function createArtist(event) {
  event.preventDefault();

  document.querySelector('#dialog-form-container').close();

  const artist = {
    name: event.target.name.value,
    birthdate: event.target.birthdate.value,
    activeSince: event.target.activeSince.value,
    image: event.target.image.value,
    website: event.target.website.value,
    shortDescription: event.target.shortDescription.value,
  };

  artist.labels = selectedLabels.options; // array of selected labels
  artist.genres = selectedGenres.options;
  artist.albums = selectedAlbums.options;
  artist.songs = selectedSongs.options;

  try {
    const response = await fetch(`${endpoint}/artists`, {
      method: 'POST',
      body: JSON.stringify(artist),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    artistsPage();
  } catch (error) {
    console.log(error);
  }
}

export async function updateArtist(event) {
  event.preventDefault();
  console.log('update artist');

  document.querySelector('#dialog-form-container').close();

  const artist = {
    id: event.target.id,
    name: event.target.name.value,
    birthdate: event.target.birthdate.value,
    activeSince: event.target.activeSince.value,
    image: event.target.image.value,
    website: event.target.website.value,
    shortDescription: event.target.shortDescription.value,
  };

  artist.labels = selectedLabels.options; // array of selected labels
  artist.genres = selectedGenres.options;
  artist.albums = selectedAlbums.options;
  artist.songs = selectedSongs.options;

  try {
    const response = await fetch(`${endpoint}/artists/${artist.id}`, {
      method: 'PUT',
      body: JSON.stringify(artist),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const updatedArtist = await response.json();
    // update artist in DOM
    document.querySelector(`#artist_${artist.id}`).remove();
    showArtist(artist);
    scrollToTop();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteArtist(id) {
  try {
    const response = await fetch(`${endpoint}/artists/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // remove artist from DOM
    document.querySelector(`#artist_${id}`).remove();
  } catch (error) {
    console.log(error);
  }
}

// set favorite artists
export async function favoriteArtist(artist) {
  // if artist is favorite, set favorite to false
  if (artist.favorite !== null) {
    if (artist.favorite === true) {
      artist.favorite = false;
    } else {
      artist.favorite = true;
    }
  } else {
    artist.favorite = true;
  }
  // stupid sql dates
  const wrongBirthdate = artist.birthdate;
  const correctBirthdate = wrongBirthdate.split('').splice(0, 10).join('');
  artist.birthdate = correctBirthdate;

  try {
    const response = await fetch(`${endpoint}/artists/${artist.id}`, {
      method: 'PUT',
      body: JSON.stringify(artist),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const updatedArtist = await response.json();
    // update artist in DOM
    document.querySelector(`#artist_${artist.id}`).remove();
    showArtist(artist);
    scrollToTop();
  } catch (error) {
    console.log(error);
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
