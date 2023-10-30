import favoriteStar from '../globals/favoriteStar.js';

export class ArtistTable {
  constructor() {
    this.artistTable = /*html*/ `
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Birthday</th>
            <th>Website</th>
            <th>Active Since</th>
            <th>Favorite</th>
            <th>Labels</th>
            <th>Genres</th>
            <th>Albums</th>
            <th>Songs</th>
          </tr>
        </thead>
        <tbody id="artistsTableBody"></tbody>
      </table>
    `;
  }

  getHTML() {
    return this.artistTable;
  }
}

export class ArtistRow {
  constructor(artist) {
    this.artist = artist;
  }

  formatBirthdate() {
    // Stupid SQL dates
    const wrongBirthdate = this.artist.birthdate;
    const correctBirthdate = wrongBirthdate.split('').splice(0, 10).join('');
    const formattedBirthdate = correctBirthdate.split('-').reverse().join('-');
    this.artist.birthdate = formattedBirthdate;
  }

  createRowHTML() { 
    this.formatBirthdate();

    return /*html*/ `
      <tr id="artist_${this.artist.id}">
        <td>${this.artist.name}
          <h4>${this.artist.favorite ? favoriteStar() : ''}</h4>
        </td>
        <td>${this.artist.birthdate}</td>
        <td>${this.artist.website}</td>
        <td>${this.artist.activeSince}</td>
        <td>${this.artist.favorite}</td>
        <td>
          <ul>
            ${this.artist.labels.map(label => `<li>${label}</li>`).join('')}
          </ul>
        </td>
        <td>
          <ul>
            ${this.artist.genres.map(genre => `<li>${genre}</li>`).join('')}
          </ul>
        </td>
        <td>
          <ul>
            ${this.artist.albums.map(album => `<li>${album}</li>`).join('')}
          </ul>
        </td>
        <td>
          <ul>
            ${this.artist.songs.map(song => `<li>${song}</li>`).join('')}
          </ul>
        </td>
        <td>
          <button class="table_button" id="editArtist_${this.artist.id}">Edit</button>
          <button class="table_button" id="deleteArtist_${this.artist.id}">Delete</button>
          <button class="table_button" id="favoriteArtist_${this.artist.id}">Favorite</button>
        </td>
      </tr>
    `;
  }
}
