export function songsTable() {
  const songsTable = /*html*/ `
    <table id="songsTable">
    <thead>
        <tr>
            <th>Song Title</th>
            <th>Release Date</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Label</th>
        </tr>
    </thead>
    <tbody id="songsTable-container"></tbody>
    </table>
    `;
  return songsTable;
}

export function songTableRow(song) {
    console.log(song);
  const tableRow = /*html*/ `
        <tr id="song_${song.id}">
            <td>${song.title}</td>
            <td>${song.releaseDate}</td>
            <td>
                <ul>
                    ${song.artist
                    .map(artist => `<li>${artist}</li>`)
                    .join('')}
                </ul>
            </td>
            <td>
                <ul>
                    ${song.album
                    .map(album => `<li>${album}</li>`)
                    .join('')}
                </ul>
            </td>
            <td>
                <ul>
                    ${song.genre
                    .map(genre => `<li>${genre}</li>`)
                    .join('')}
                </ul>
            </td>
            <td>
                <ul>
                    ${song.label
                    .map(label => `<li>${label}</li>`)
                    .join('')}
                </ul>
            </td>
            <td>
                <ul>
                    ${song.bonus_track
                    .map(bonus_track => `<li>${bonus_track}</li>`)
                    .join('')}
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
        