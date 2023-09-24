export function artistsHeader() {
  const headerArtists = /*html*/ `
        <div class="header">
            <h1>Artists</h1>
            <div class="header_buttons">
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
            <div class="header_buttons">
                <button class="header_button" id="create-song-header-btn">Create Song</button>
            </div>
        </div>
    `;
  return headerSongs;
}
