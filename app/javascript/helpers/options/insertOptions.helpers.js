import optionsService from '../../services/options.services.js';

export default class insertOptions {
  static async insertOptions_Genres(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-genres');
    } else if (type === 'form') {
      select = document.querySelector('#form-genres');
    }

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

  static async insertOptions_Labels(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-labels');
    } else if (type === 'form') {
      select = document.querySelector('#form-labels');
    }

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

  static async insertOptions_Albums(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-albums');
    } else if (type === 'form') {
      select = document.querySelector('#form-albums');
    }

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

  static async insertOptions_Songs(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-songs');
    } else if (type === 'form') {
      select = document.querySelector('#form-songs');
    }

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

  static async insertOptions_Artists(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-artists');
    } else if (type === 'form') {
      select = document.querySelector('#form-artists');
    }
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
