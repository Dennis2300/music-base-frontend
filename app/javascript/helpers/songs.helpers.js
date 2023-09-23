import { songForm } from "../components/forms/song.form.js";
import { headerSongs } from "../components/globals/headers.js";
import { songTableRow, songsTable } from "../components/tables/song.tables.js";
import { getAllSongs } from "../services/songs.services.js";

export async function songPage(event) {
    console.log('Song page');
    event.preventDefault();
    
    let page = document.querySelector('#page');
    
    // clear page content
    page.innerHTML = '';
    
    // add header
    page.insertAdjacentHTML('beforeend', headerSongs());
    
    // add event listener to create song button
    document
        .querySelector('#create-song-header-btn')
        .addEventListener('click', () => openSongForm('create'));
    
    // add table
    page.insertAdjacentHTML('beforeend', songsTable());
    
    // add table data
    try {
        const songs = await getAllSongs();
        songs.forEach(song => showSong(song));
    } catch (error) {
        console.log(error);
    }
    
    // add footer
    // page.insertAdjacentHTML('beforeend', footer());  
}

function showSong(song) {
    document
        .querySelector('#songsTable-container')
        .insertAdjacentHTML('afterbegin', songTableRow(song));
        
    // document
    // .querySelector(
    //   `#editSong_${song.id}`).addEventListener('click', () => selectSong(song)
    // );
}

export function openSongForm(formType) {
    document.querySelector("#dialog").innerHTML = '';
    // check if form is create or update
    if (form === 'create') {
        document.querySelector("#dialog")
            .insertAdjacentHTML('beforeend', songForm('create'));
        document
            .querySelector('#song-form')
            .addEventListener('submit', createSong);
    } else if (formType === 'update') {
        document.querySelector("#dialog")
            .insertAdjacentHTML('beforeend', songForm('update'));
        document
            .querySelector('#song-form')
            .addEventListener('submit', updateSong);
    }
    document.querySelector('#cancel-btn').addEventListener('click', () => {
        document.querySelector("#dialog").closest();
    });

    document.querySelector("#dialog").showModal();
}