export function albumForm(type) {
    const update = 'Update Album';
    const create = 'Create Album';
    const title = '';
    if (type === 'update') {
        title = update;
    } else if (type === 'create') {
        title = create;
    }
    const albumForm = /*html*/ `
        <form id="album-form" class="form-album">
        <h2 class="album-form-title">${title}</h2>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required><br><br>

            <label for="releaseDate">Release Date:</label>
            <input type="date" id="releaseDate" name="releaseDate" required><br><br>

            <label for="form-artists">Artists:</label>
            <select id="form-artists" name="form-artists"></select>

            <br><br>

            <label for="form-genres">Genres:</label>
            <select id="form-genres" name="form-genres"></select>
            
            <br><br>

            <label for="form-labels">Labels:</label>
            <select id="form-labels" name="form-labels"></select>
        
            <br><br>

            <label for="form-songs">Songs:</label>
            <select id="form-songs" name="form-songs"></select>

            <br><br>

            <div>
                <p><strong>Selected Genres:</strong></p>
                <div id="selectedGenres"></div>
            </div>

            <div>
                <p><strong>Selected Labels:</strong></p>
                <div id="selectedLabels"></div>
            </div>

            <div>
                <p><strong>Selected Albums:</strong></p>
                <div id="selectedAlbums"></div>
            </div>

            <div>
                <p><strong>Selected Songs:</strong></p>
                <div id="selectedSongs"></div>

            </div>

            <br><br>

            <input id="subtmit-btn" type="submit" value="Submit">
            <input id="reset-btn" type="reset" value="Reset">
            <button id="cancel-btn" type="button">Cancel</button>
        </form>
    `;
    return albumForm
}