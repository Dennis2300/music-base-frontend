

export function headerArtists(){
    const headerArtists = /*html*/`
        <div class="header">
            <h1>Artists</h1>
            <div class="header_buttons">
                <button class="header__button" id="createArtist">Create Artist</button>
            </div>
        </div>
    `;
    return headerArtists;
}

export function headerAlbums(){
    const headerAlbums = /*html*/`
        <div class="header">
            <h1>Albums</h1>
            <div class="header_buttons">
                <button class="header__button" id="createAlbum">Create Album</button>
            </div>
        </div>
    `;
    return headerAlbums;
}

export function headerSongs(){
    const headerSongs = /*html*/`
        <div class="header">
            <h1>Songs</h1>
            <div class="header_buttons">
                <button class="header__button" id="createSong">Create Song</button>
            </div>
        </div>
    `;
    return headerSongs;
}