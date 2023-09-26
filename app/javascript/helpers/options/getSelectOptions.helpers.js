export default class getSelectedOptions {
  static genres() {
    const selectedGenres = document.querySelectorAll('#selected-genres p');
    const genres = [];
    selectedGenres.forEach(genre => {
      genres.push(genre.innerText);
    });
    return genres;
  }

  static labels() {
    const selectedLabels = document.querySelectorAll('#selected-labels p');
    const labels = [];
    selectedLabels.forEach(label => {
      labels.push(label.innerText);
    });
    return labels;
  }

  static albums() {
    const selectedAlbums = document.querySelectorAll('#selected-albums p');
    const albums = [];
    selectedAlbums.forEach(album => {
      albums.push(album.innerText);
    });
    return albums;
  }

  static songs() {
    const selectedSongs = document.querySelectorAll('#selected-songs p');
    const songs = [];
    selectedSongs.forEach(song => {
      songs.push(song.innerText);
    });
    return songs;
  }

  static artist() {
    const selectedArtists = document.querySelectorAll('#selected-artists p');
    const artists = [];
    selectedArtists.forEach(artist => {
      artists.push(artist.innerText);
    });
    return artists;
  }
}
