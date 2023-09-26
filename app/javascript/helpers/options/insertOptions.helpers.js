import optionsService from '../../services/options.services.js';

function getDOMSelect(type, select) {
  let selectElement;
  if (type === 'filter') {
    selectElement = document.querySelector(`#filter-${select}`);
  } else if (type === 'form') {
    selectElement = document.querySelector(`#form-${select}`);
  }
  return selectElement;
}

export default class insertOptions {
  static async genres(type) {
    const select = getDOMSelect(type, 'genres');
    try {
      const genres = await optionsService.getGenres();
      genres.forEach(genre => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${genre.name}">${genre.name}</option>`
        );
      });
    } catch (error) {
      console.log('error getting genres');
    }
  }

  static async labels(type) {
    const select = getDOMSelect(type, 'labels');
    try {
      const labels = await optionsService.getLabels();
      labels.forEach(label => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${label.name}">${label.name}</option>`
        );
      });
    } catch (error) {
      console.log('error getting labels');
    }
  }

  static async albums(type) {
    const select = getDOMSelect(type, 'albums');
    try {
      const albums = await optionsService.getAlbums();
      albums.forEach(album => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${album.title}">${album.title}</option>`
        );
      });
    } catch (error) {
      console.log('error getting albums');
    }
  }

  static async songs(type) {
    const select = getDOMSelect(type, 'songs');
    try {
      const songs = await optionsService.getSongs();
      songs.forEach(song => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${song.title}">${song.title}</option>`
        );
      });
    } catch (error) {
      console.log('error getting songs');
    }
  }

  static async artists(type) {
    const select = getDOMSelect(type, 'artists');
    try {
      const artists = await optionsService.getArtists();
      artists.forEach(artist => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${artist.name}">${artist.name}</option>`
        );
      });
    } catch (error) {
      console.log('error getting artists');
    }
  }
}
