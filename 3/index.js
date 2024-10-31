// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countriesList = document.body.insertBefore(
  document.createElement('ul'),
  document.querySelector('[data-function="printHere"]')
);

// ? Con países en DOM
// * countries.forEach((country) => {
// * const listItem = countriesList.appendChild(document.createElement('li'));
// * listItem.innerText = country;
// * console.log(country);
// * });

// ? Sin países en DOM
countries.forEach((country) => {
  const listItem = countriesList.appendChild(document.createElement('li'));
  console.log(country);
});

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector('.fn-remove-me').remove();
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const carsUL = document
  .querySelector('[data-function="printHere"]')
  .appendChild(document.createElement('ul'));
cars.forEach((car) => {
  const listItem = carsUL.appendChild(document.createElement('li'));
  listItem.innerText = car;
});

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
const countriesDiv = document.body.appendChild(document.createElement('div'));
countries2.forEach((country) => {
  countryDiv = countriesDiv.appendChild(document.createElement('div'));
  const cTitle = countryDiv.appendChild(document.createElement('h4'));
  const cImg = countryDiv.appendChild(document.createElement('img'));
  cTitle.innerText = country.title;
  cImg.src = country.imgUrl;
});

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
button = document.body.appendChild(document.createElement('button'));
button.innerText = 'DELETE!!! :)';
button.addEventListener('click', () => {
  countriesDiv.lastElementChild.remove();
});
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
const allDivs = document.body.querySelectorAll('div');
allDivs.forEach((div) => {
  button = div.appendChild(document.createElement('button'));
  button.innerText = 'DESTROY!!! >:D';
  button.addEventListener('click', () => {
    div.remove();
  });
});
