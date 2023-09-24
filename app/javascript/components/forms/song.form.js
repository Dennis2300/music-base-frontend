export function songForm(type) {
  const update = 'Update Song';
  const create = 'Create Song';
  let title = '';
  if (type === 'update') {
    title = update;
  } else if (type === 'create') {
    title = create;
  }
  const songForm = /*html*/ `
    <form id="song-form" class="form-song">
        <h2 class="song-form-title">${title}</h2>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required><br><br>

        <label for="releaseDate">Release Date:</label>
        <input type="date" id="releaseDate" name="releaseDate" required><br><br>

        <label for="form-artists">Artists:</label>
        <select id="form-artists" name="form-artists"></select>

        <br><br>

        <label for="form-albums">Albums:</label>
        <select id="form-albums" name="form-albums"></select>

        <br><br>

        <label for="form-genres">Genres:</label>
        <select id="form-genres" name="form-genres"></select>

        <br><br>

        <label for="form-labels">Labels:</label>
        <select id="form-labels" name="form-labels"></select>

        <br><br>

        <label for="bonus_track">Bonus Track:</label>
        <select id="bonus_track" name="bonus_track"></select>

        <br><br>

        <div>
            <p><strong>Selected Artists:</strong></p>
            <div id="selectedArtists"></div>
        </div>

        <div>
            <p><strong>Selected Albums:</strong></p>
            <div id="selectedAlbums"></div>
        </div>

        <div>
            <p><strong>Selected Genres:</strong></p>
            <div id="selectedGenres"></div>
        </div>

        <div>
            <p><strong>Selected Labels:</strong></p>
            <div id="selectedLabels"></div>
        </div>

        <div>
            <p><strong>Selected Bonus Tracks:</strong></p>
            <div id="selectedBonusTracks"></div>
        </div>

        <br><br>

        <button type="submit" id="submit-btn">${title}</button>
        <button id="cancel-btn" type="button">Cancel</button>
    </form>
    `;
  return songForm;
}
