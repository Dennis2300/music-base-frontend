import favoriteStar from '../globals/favoriteStar.js';

export function artistTable() {
  const artistTable = /*html*/ `
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
  return artistTable;
}

export function artistTableRow(artist) {
  // stupid sql dates
  const wrongBirthdate = artist.birthdate;
  const correctBirthdate = wrongBirthdate.split('').splice(0, 10).join('');
  const formattedBirthdate = correctBirthdate.split('-').reverse().join('-');
  artist.birthdate = formattedBirthdate;

  const tableRow = /*html*/ `
            <tr id="artist_${artist.id}">
                <td>${artist.name}
                <h4>${artist.favorite ? favoriteStar() : ''}</h4>
                </td>
                <td>${artist.birthdate}</td>
                <td>${artist.website}</td>
                <td>${artist.activeSince}</td>
                <td>${artist.favorite}</td>
                <td>
                    <ul>
                        ${artist.labels
                          .map(label => `<li>${label}</li>`)
                          .join('')}
                    </ul>
                </td>
                <td>
                    <ul>
                        ${artist.genres
                          .map(genre => `<li>${genre}</li>`)
                          .join('')}
                    </ul>
                </td>
                <td>
                    <ul>
                        ${artist.albums
                          .map(album => `<li>${album}</li>`)
                          .join('')}
                    </ul>
                </td>
                <td>
                    <ul>
                        ${artist.songs.map(song => `<li>${song}</li>`).join('')}
                    </ul>
                </td>
                <td>
                    <button class="table_button" id="editArtist_${
                      artist.id
                    }">Edit</button>
                    <button class="table_button" id="deleteArtist_${
                      artist.id
                    }">Delete</button>
                    <button class="table_button" id="favoriteArtist_${
                      artist.id
                    }">Favorite</button>
                </td>
            </tr>
            `;
  return tableRow;
}
