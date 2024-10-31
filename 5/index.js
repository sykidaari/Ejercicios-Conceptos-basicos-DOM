// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
];
const albumsList = document.body.appendChild(document.createElement('ul'));

albums.forEach((album) => {
  const listItem = albumsList.appendChild(document.createElement('li'));
  listItem.innerText = album;
});
