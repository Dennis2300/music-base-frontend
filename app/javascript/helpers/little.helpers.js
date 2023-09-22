

export async function insertSelectOptionsGenres(){

    const genres = await fetch('http://localhost:3000/genres')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))

    const select = document.querySelector('#filter-genres');

    genres.forEach(genre => {
        select.insertAdjacentHTML('beforeend', `<option value="${genre.name}">${genre.name}</option>`)
    });
}

export async function insertSelectOptionsLabels(){

    const labels = await fetch('http://localhost:3000/labels')
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))

    const select = document.querySelector('#filter-labels');

    labels.forEach(label => {
        select.insertAdjacentHTML('beforeend', `<option value="${label.name}">${label.name}</option>`)
    });
}

