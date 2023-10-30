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
    document
      .getElementById(this.containerId)
      .insertAdjacentHTML(
        'afterbegin',
        `<p id="options${value}"> ${value} </p>`
      );
  }

  get options() {
    return this.array;
  }
}
