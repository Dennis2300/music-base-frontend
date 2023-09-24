const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export default class insertOptions {
  static async insertOptions_Genres(type) {
    let select;
    try {
      const response = await fetch(`${endpoint}/genres`);
      const genres = await response.json();

      if (type === 'filter') {
        select = document.querySelector('#filter-genres');
      } else if (type === 'form') {
        select = document.querySelector('#form-genres');
      }
      genres.forEach(genre => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${genre.name}">${genre.name}</option>`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async insertOptions_Labels(type) {
    let select;
    try {
      const response = await fetch(`${endpoint}/labels`);
      const labels = await response.json();

      if (type === 'filter') {
        select = document.querySelector('#filter-labels');
      } else if (type === 'form') {
        select = document.querySelector('#form-labels');
      }
      labels.forEach(label => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${label.name}">${label.name}</option>`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async insertOptions_Albums(type) {
    let select;
    try {
      const response = await fetch(`${endpoint}/albums`);
      const albums = await response.json();

      if (type === 'filter') {
        select = document.querySelector('#filter-albums');
      } else if (type === 'form') {
        select = document.querySelector('#form-albums');
      }
      albums.forEach(album => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${album.title}">${album.title}</option>`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async insertOptions_Songs(type) {
    let select;
    try {
      const response = await fetch(`${endpoint}/songs`);
      const songs = await response.json();

      if (type === 'filter') {
        select = document.querySelector('#filter-songs');
      } else if (type === 'form') {
        select = document.querySelector('#form-songs');
      }
      songs.forEach(song => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${song.title}">${song.title}</option>`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async insertOptions_Artists(type) {
    let select;
    try {
      const response = await fetch(`${endpoint}/artists`);
      const artists = await response.json();

      if (type === 'filter') {
        select = document.querySelector('#filter-artists');
      } else if (type === 'form') {
        select = document.querySelector('#form-artists');
      }
      artists.forEach(artist => {
        select.insertAdjacentHTML(
          'beforeend',
          `<option value="${artist.name}">${artist.name}</option>`
        );
      });
    } catch (error) {
      console.log(error);
    }
  }
}
