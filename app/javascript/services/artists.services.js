const endpoint = 'http://localhost:3000';

export async function getAllArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const artists = await response.json();

  if (response.ok) {
    return artists;
  }
  return console.log('Error getting artists');
}
