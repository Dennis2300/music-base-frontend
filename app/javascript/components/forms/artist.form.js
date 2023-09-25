export function artistForm(type) {
  const update = 'Update Artist';
  const create = 'Create Artist';
  let title = '';
  if (type === 'update') {
    title = update;
  } else if (type === 'create') {
    title = create;
  }
  const artistForm = /*html*/ `
        <form id="artist-form" class="form-artist">
        <h2 class="artist-form-title">${title}</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" required><br><br>

            <label for="activeSince">Active Since:</label>
            <input type="number" id="activeSince" name="activeSince" required><br><br>

            <label for="image">Image:</label>
            <input type="url" id="image" name="image" accept="image/*" ><br><br>

            <label for="website">Website:</label>
            <input type="url" id="website" name="website" required><br><br>

            <label for="shortDescription">Short Description:</label>
            <textarea id="shortDescription" name="shortDescription"></textarea><br><br>

            <label for="form-genres">Genres:</label>
            <select id="form-genres" name="form-genres"></select>
            
            <br><br>

            <label for="form-labels">Labels:</label>
            <select id="form-labels" name="form-labels"></select>
            
            <br><br>

            <label for="form-albums">Albums:</label>
            <select id="form-albums" name="form-albums"></select>

            <br><br>

            <label for="form-songs">Songs:</label>
            <select id="form-songs" name="form-songs"></select>

            <br><br>

            <div>
                <p><strong>Selected Genres:</strong></p>
                <div id="selected-genres"></div>
            </div>

            <div>
                <p><strong>Selected Labels:</strong></p>
                <div id="selected-labels"></div>
            </div>

            <div>
                <p><strong>Selected Albums:</strong></p>
                <div id="selected-albums"></div>
            </div>

            <div>
                <p><strong>Selected Songs:</strong></p>
                <div id="selected-songs"></div>

            </div>

            <br><br>
            
            <input id="submit-btn" type="submit" value="${title}">
            <button id="cancel-btn" type="button">Cancel</button>
        </form>
    `;
  return artistForm;
}
