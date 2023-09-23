const endpoint = 'http://localhost:3000';

export async function getAllSongs() {
 try {
  const response = await fetch(`${endpoint}/songs`);
  const songs = await response.json();
  return songs;
 } catch (error) {
  console.log(error);
 }
}