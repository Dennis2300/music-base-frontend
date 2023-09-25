export function albumTable() {
  const albumTable = /*html*/ `
    <table id="albumsTable">
      <thead>
          <tr>
          <th>Album Title</th>
          <th>Release Date</th>
          <th>Artists</th>
          <th>Genres</th>
          <th>Labels</th>
          <th>Songs</th>
          </tr>
      </thead>
      <tbody id="albumsTableBody"></tbody>
    </table>
    `;
  return albumTable;
}

export function albumTableRow(album) {
  // stupid sql dates
  const wrongReleaseDate = album.releaseDate;
  const correctReleaseDate = wrongReleaseDate.split('').splice(0, 10).join('');
  const formattedReleaseDate = correctReleaseDate
    .split('-')
    .reverse()
    .join('-');
  const releaseDate = formattedReleaseDate;

  const tableRow = /*html*/ `
                <tr id="album_${album.id}">
                    <td>${album.title}</td>
                    <td>${releaseDate}</td>
                    <td>
                        <ul>
                            ${album.artists
                              .map(artist => `<li>${artist}</li>`)
                              .join('')}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            ${album.genres
                              .map(genre => `<li>${genre}</li>`)
                              .join('')}
                        </ul>
                    </td>
                    <td>
                            <ul>
                            ${album.labels
                              .map(label => `<li>${label}</li>`)
                              .join('')}
                            </ul>
                    </td>
                    <td>
                            <ul>
                            ${album.songs
                              .map(song => `<li>${song}</li>`)
                              .join('')}
                            </ul>
                    </td>
                    <td>
                        <button class="table_button" id="editAlbum_${
                          album.id
                        }">Edit</button>
                        <button class="table_button" id="deleteAlbum_${
                          album.id
                        }">Delete</button>
                </tr>
    `;
  return tableRow;
}
