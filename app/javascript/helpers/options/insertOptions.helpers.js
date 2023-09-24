import optionsService from '../../services/options.services';

export default class insertOptions {
  static async insertOptions_Genres(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-genres');
    } else if (type === 'form') {
      select = document.querySelector('#form-genres');
    }
    const genres = await optionsService.getGenres();
    genres.forEach(genre => {
      select.insertAdjacentHTML(
        'beforeend',
        `<option value="${genre.id}">${genre.name}</option>`
      );
    });
  }

  static async insertOptions_Labels(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-labels');
    } else if (type === 'form') {
      select = document.querySelector('#form-labels');
    }
    const labels = await optionsService.getLabels();
    labels.forEach(label => {
      select.insertAdjacentHTML(
        'beforeend',
        `<option value="${label.id}">${label.name}</option>`
      );
    });
  }

  static async insertOptions_Albums(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-albums');
    } else if (type === 'form') {
      select = document.querySelector('#form-albums');
    }
    const albums = await optionsService.getAlbums();
    albums.forEach(album => {
      select.insertAdjacentHTML(
        'beforeend',
        `<option value="${album.id}">${album.name}</option>`
      );
    });
  }

  static async insertOptions_Songs(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-songs');
    } else if (type === 'form') {
      select = document.querySelector('#form-songs');
    }
    const songs = await optionsService.getSongs();
    songs.forEach(song => {
      select.insertAdjacentHTML(
        'beforeend',
        `<option value="${song.id}">${song.name}</option>`
      );
    });
  }

  static async insertOptions_Artists(type) {
    let select;
    if (type === 'filter') {
      select = document.querySelector('#filter-artists');
    } else if (type === 'form') {
      select = document.querySelector('#form-artists');
    }
    const artists = await optionsService.getArtists();
    artists.forEach(artist => {
      select.insertAdjacentHTML(
        'beforeend',
        `<option value="${artist.id}">${artist.name}</option>`
      );
    });
  }
}
