export function artistsHeader() {
  const headerArtists = /*html*/ `
          <div class="header">
              <h1>Artists</h1>
              <div class="header_buttons">
                ${filterHeader()}
                <button class="header_button" id="create-artist-header-btn">Create Artist</button>
              </div>
          </div>
      `;
  return headerArtists;
}

export function albumsHeader() {
  const headerAlbums = /*html*/ `
          <div class="header">
              <h1>Albums</h1>
              ${filterHeader()}
              <div class="header_buttons">
                  <button class="header_button" id="create-album-header-btn">Create Album</button>
              </div>
          </div>
      `;
  return headerAlbums;
}

export function songsHeader() {
  const headerSongs = /*html*/ `
          <div class="header">
              <h1>Songs</h1>
              ${filterHeader()}
              <div class="header_buttons">
                  <button class="header_button" id="create-song-header-btn">Create Song</button>
              </div>
          </div>
      `;
  return headerSongs;
}

function filterHeader() {
  const headerFilter = /*html*/ `
    <!------------Filter Artists by Labels------------>
      <label for="filter-labels">Filter labels</label>
      <select name="filter-labels" id="filter-labels">
        <option value="all">All</option>
      </select>

      <!------------Filter Artists by genres------------>
      <label for="filter-genres">Filter genres</label>
      <select name="filter-genres" id="filter-genres">
        <option value="all">All</option>
      </select>

      <!------------Sort Artists by different options------------>
      <label for="sort">Sort by</label>
      <select name="sort" id="sort">
        <option value="all">All</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    `;
  return headerFilter;
}
