// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement('div');
document.body.appendChild(div);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// * const divWithText = document.createElement('div');
// * let paragraph = document.createElement('p');

// * document.body.appendChild(divWithText);
// * divWithText.appendChild(paragraph);

// * const divWithText2 = document.createElement('div');
// * document.body
// *  .appendChild(divWithText2)
// *  .appendChild(document.createElement('p'));

document.body
  .appendChild(document.createElement('div'))
  .appendChild(document.createElement('p'));

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const divWithPs = document.body.appendChild(document.createElement('div'));
for (let i = 0; i < 7; i++) {
  const p = document.createElement('p');
  divWithPs.appendChild(p);
}

// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
document.body.appendChild(
  document
    .createElement('p')
    .appendChild(document.createTextNode('Soy dinámico!'))
);
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
document
  .querySelector('.fn-insert-here')
  .appendChild(document.createTextNode('Wubba Lubba dub dub'));

// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
AppsUl = document.body.appendChild(document.createElement('ul'));
for (let i = 0; i < apps.length; i++) {
  const app = document.createElement('li');
  app.innerText = apps[i];
  AppsUl.appendChild(app);
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
document.querySelectorAll('.fn-remove-me').forEach((element) => {
  element.remove();
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const newP = document.createElement('p');
document.body.insertBefore(newP, document.querySelectorAll('div')[1]);
newP.appendChild(document.createTextNode('Voy en medio!'));
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
const divsC = document.querySelectorAll('div.fn-insert-here');
divsC.forEach((div) => {
  div.appendChild(document.createTextNode('Voy dentro!'));
});
