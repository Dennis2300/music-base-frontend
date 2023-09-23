export function createformArtist(){
    const createformArtist = /*html*/`
        <form id="createformArtist" class="createforms">
            <h2>Add Music Artist</h2>
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

            <div>
                <p><strong>Selected Genres:</strong></p>
                <div id="selectedGenres"></div>
            </div>

            <div>
                <p><strong>Selected Labels:</strong></p>
                <div id="selectedLabels"></div>
            </div>

            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
            <button type="button">Cancel</button>
        </form>
    `;
    return createformArtist;
}