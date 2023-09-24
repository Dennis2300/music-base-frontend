export function songsTable() {
  const songsTable = /*html*/ `
    <table id="songsTable">
    <thead>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Label</th>
        </tr>
    </thead>
    <tbody id="songsTableBody"></tbody>
    </table>
    `;
  return songsTable;
}

export function songTableRow(song) {
  // stupid sql dates
  const wrongReleaseDate = album.releaseDate;
  const correctReleaseDate = wrongReleaseDate.split('').splice(0, 10).join('');
  const formattedReleaseDate = correctReleaseDate
    .split('-')
    .reverse()
    .join('-');
  const releaseDate = formattedReleaseDate;
  const tableRow = /*html*/ `
        <tr id="song_${song.id}">
            <td>${song.title}</td>
            <td>
                <ul>
                    ${song.artists.map(artist => `<li>${artist}</li>`).join('')}
                </ul>
            </td>
            <td>${releaseDate}</td>
          
            <td>
                <ul>
                    ${song.albums.map(album => `<li>${album}</li>`).join('')}
                </ul>
            </td>
            <td>
                <ul>
                    ${song.genres.map(genre => `<li>${genre}</li>`).join('')}
                </ul>
            </td>
            <td>
                <ul>
                    ${song.labels.map(label => `<li>${label}</li>`).join('')}
                </ul>
            </td>
                <td>
                <button class="table_button" id="editSong_${
                  song.id
                }">Edit</button>
                <button class="table_button" id="deleteSong_${
                  song.id
                }">Delete</button>
                </tr>
                `;
  return tableRow;
}
