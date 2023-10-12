export default class selectedOptions {
  constructor(containerId) {
    this.containerId = containerId;
    this.array = [];
  }

  /**
   * @param {EventListenerOrEventListenerObject} value
   */
  set option(value) {
    if (this.array.includes(value)) {
      console.log('Option already selected');
      this.array.splice(this.array.indexOf(value), 1);
      document.getElementById(`options${value}`).remove();
      return; // exit function
    }

    this.array.push(value);

    // insert option in DOM
    this.container = document.getElementById(this.containerId);
    if (!this.container) {
      throw console.error(`Element with id ${this.containerId} does not exist`);
    }

    this.container.insertAdjacentHTML(
      'afterbegin',
      `<p id="options${value}"> ${value} </p>`
    );
  }

  get options() {
    return this.array;
  }
}
