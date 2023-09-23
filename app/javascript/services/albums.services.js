const endpoint = 'http://localhost:3000';

export async function getAllAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const albums = await response.json();

  if (response.ok) {
    return albums;
  }
  return console.log('Error getting albums');
}