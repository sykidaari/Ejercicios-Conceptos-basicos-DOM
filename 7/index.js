// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor'];
const placesList = document
  .querySelector('[data-function="printHere"]')
  .appendChild(document.createElement('ul'));
places.forEach((place) => {
  const listItem = placesList.appendChild(document.createElement('li'));
  listItem.innerText = place;
});
