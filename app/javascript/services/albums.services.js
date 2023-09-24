const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export async function getAllAlbums() {
  try {
    const response = await fetch(`${endpoint}/albums`);
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.log(error);
  }
}
