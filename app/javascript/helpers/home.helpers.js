export default function homePage() {
  console.log('Home page');

  const page = document.querySelector('#page');

  // clear page content
  page.innerHTML = '';

  page.insertAdjacentHTML(
    'beforeend',
    /*html*/ `

                <h1 class="text-center">Welcome to the Music App</h1>

                <h2 class="text-center">Here you can find your favorite artists, albums and songs
                click on the links in the navigation bar to get started</h2>  
                `
  );
}
