export function artistForm(type) {
  const update = 'Update Artist';
  const create = 'Create Artist';
  const titel = '';
  if (type === 'update') {
    titel = update;
  } else if (type === 'create') {
    titel = create;
  }
  const artistForm = /*html*/ `
        <form id="artist-form" class="form-artist">
        <h2 class="artist-form-title">${titel}</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" required><br><br>

            <label for="activeSince">Active Since:</label>
            <input type="number" id="activeSince" name="activeSince" required><br><br>

            <label for="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required><br><br>

            <label for="website">Website:</label>
            <input type="url" id="website" name="website" required><br><br>

            <label for="shortDescription">Short Description:</label>
            <textarea id="shortDescription" name="shortDescription"></textarea><br><br>

            <label for="genres">Genres:</label>
            <select id="genres" name="genres"></select>
            
            <br><br>

            <label for="labels">Labels:</label>
            <select id="labels" name="labels"></select>
            
            <br><br>

            <label for="albums">Albums:</label>
            <select id="albums" name="albums"></select>

            <br><br>

            <label for="songs">Songs:</label>
            <select id="songs" name="songs"></select>

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
            
            <input id="submit-btn" type="submit" value="Submit">
            <input id="reset-btn" type="reset" value="Reset">
            <button id="cancel-btn" type="button">Cancel</button>
        </form>
    `;
  return artistForm;
}
