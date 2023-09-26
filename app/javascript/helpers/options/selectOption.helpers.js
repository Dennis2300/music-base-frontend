export default class selectedOption {
  static genre() {
    const genre = document.querySelector('#form-genres').value;
    const selectedOptions = document.querySelectorAll('#selected-genres p');

    let optionAlreadySelected = false;

    selectedOptions.forEach(option => {
      if (option.innerText === genre) {
        console.log('Genre already selected');
        option.remove();
        optionAlreadySelected = true;
      }
    });

    if (!optionAlreadySelected) {
      document
        .querySelector('#selected-genres')
        .insertAdjacentHTML('beforeend', `<p>${genre}</p>`);
    }
  }

  static label() {
    const label = document.querySelector('#form-labels').value;
    const selectedOptions = document.querySelectorAll('#selected-labels p');

    let optionAlreadySelected = false;

    selectedOptions.forEach(option => {
      if (option.innerText === label) {
        console.log('Label already selected');
        option.remove();
        optionAlreadySelected = true;
      }
    });

    if (!optionAlreadySelected) {
      document
        .querySelector('#selected-labels')
        .insertAdjacentHTML('beforeend', `<p>${label}</p>`);
    }
  }

  static album() {
    const album = document.querySelector('#form-albums').value;
    const selectedOptions = document.querySelectorAll('#selected-albums p');

    let optionAlreadySelected = false;

    selectedOptions.forEach(option => {
      if (option.innerText === album) {
        console.log('Album already selected');
        option.remove();
        optionAlreadySelected = true;
      }
    });

    if (!optionAlreadySelected) {
      document
        .querySelector('#selected-albums')
        .insertAdjacentHTML('beforeend', `<p>${album}</p>`);
    }
  }

  static song() {
    const song = document.querySelector('#form-songs').value;
    const selectedOptions = document.querySelectorAll('#selected-songs p');

    let optionAlreadySelected = false;

    selectedOptions.forEach(option => {
      if (option.innerText === song) {
        console.log('Song already selected');
        option.remove();
        optionAlreadySelected = true;
      }
    });

    if (!optionAlreadySelected) {
      document
        .querySelector('#selected-songs')
        .insertAdjacentHTML('beforeend', `<p>${song}</p>`);
    }
  }

  static artist() {
    const artist = document.querySelector('#form-artists').value;
    const selectedOptions = document.querySelectorAll('#selected-artists p');

    let optionAlreadySelected = false;

    selectedOptions.forEach(option => {
      if (option.innerText === artist) {
        console.log('Artist already selected');
        option.remove();
        optionAlreadySelected = true;
      }
    });

    if (!optionAlreadySelected) {
      document
        .querySelector('#selected-artists')
        .insertAdjacentHTML('beforeend', `<p>${artist}</p>`);
    }
  }
}
