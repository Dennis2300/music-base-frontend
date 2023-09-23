export async function insertFilterOptions_Genres() {
  const response = await fetch('http://localhost:3000/genres');
  const genres = await response.json();

  const select = document.querySelector('#filter-genres');

  genres.map(genre => {
    select.insertAdjacentHTML(
      'beforeend',
      `<option value="${genre.name}">${genre.name}</option>`
    );
  });
}

export async function insertFilterOptions_Labels() {
  const response = await fetch('http://localhost:3000/labels');
  const labels = await response.json();

  const select = document.querySelector('#filter-labels');

  labels.forEach(label => {
    select.insertAdjacentHTML(
      'beforeend',
      `<option value="${label.name}">${label.name}</option>`
    );
  });
}
