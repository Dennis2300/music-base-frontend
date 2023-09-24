const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export default class optionsService {
  static async getGenres() {
    try {
      const response = await fetch(`${endpoint}/genres`);
      const genres = await response.json();
      return genres;
    } catch (error) {
      console.log('error getting genres from API');
    }
  }

  static async getLabels() {
    try {
      const response = await fetch(`${endpoint}/labels`);
      const labels = await response.json();
      return labels;
    } catch (error) {
      console.log('error getting labels from API');
    }
  }

  static async getAlbums() {
    try {
      const response = await fetch(`${endpoint}/albums`);
      const albums = await response.json();
      return albums;
    } catch (error) {
      console.log('error getting albums from API');
    }
  }

  static async getSongs() {
    try {
      const response = await fetch(`${endpoint}/songs`);
      const songs = await response.json();
      return songs;
    } catch (error) {
      console.log('error getting songs  from API');
    }
  }

  static async getArtists() {
    try {
      const response = await fetch(`${endpoint}/artists`);
      const artists = await response.json();
      return artists;
    } catch (error) {
      console.log('error getting artists from API');
    }
  }
}
