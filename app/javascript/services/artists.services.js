const endpoint = 'http://localhost:3000';

export async function getAllArtists() {
  try {
    const response = await fetch(`${endpoint}/artists`);
    const artists = await response.json();
    return artists;
  } catch (error) {
    console.log(error);
  }
}

// set favorite artists
export async function favoriteArtist(artist) {
  // if artist is favorite, set favorite to false
  if (artist.favorite) {
    artist.favorite = false;
  } else {
    artist.favorite = true;
  }
  const response = await fetch(`${endpoint}/artists/${artist.id}`, {
    method: 'PUT',
    body: JSON.stringify(artist),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    console.log('Favorite updated');
  } else {
    console.log('Error updating favorite');
  }
}
