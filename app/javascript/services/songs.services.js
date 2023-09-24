const endpoint = 'https://musicbase-backend-madeinchina.azurewebsites.net';

export async function getAllSongs() {
  try {
    const response = await fetch(`${endpoint}/songs`);
    const songs = await response.json();
    return songs;
  } catch (error) {
    console.log(error);
  }
}
