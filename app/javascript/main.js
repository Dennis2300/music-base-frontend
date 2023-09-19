window.addEventListener("load", initApp)

let inputCount = 1

function initApp() {
    console.log("JS is running!");
    document.querySelector("#add-song-btn").addEventListener("click",addMoreSongInputs)
}

function addMoreSongInputs() {
    inputCount++;

    const newSongTitleInput = document.createElement("input")
    newSongTitleInput.type = "text"
    newSongTitleInput.name = "songTitle"
    newSongTitleInput.placeholder = `Song Title ${inputCount}`

    document.querySelector("#song-title-container").appendChild(newSongTitleInput)

    const newSongDurationInput = document.createElement("input")
    newSongDurationInput.type = "number"
    newSongDurationInput.name = "songDuration"
    newSongDurationInput.min = "0"
    newSongDurationInput.max = "600"
    newSongDurationInput.step = "1"
    newSongDurationInput.placeholder = "Song Duration in Seconds"

    document.querySelector("#song-duration-container").appendChild(newSongDurationInput)

    const newSongReleasedate = document.createElement("input")
    newSongReleasedate.type = "date"
    newSongReleasedate.name = "releaseDate"

    document.querySelector("#song-releasedate-container").appendChild(newSongReleasedate)
}