let encabezado = document.querySelector('h1');

encabezado.textContent = 'Clase 23-06-25';

let imagen = document.querySelector('img');

imagen.setAttribute('src', 'img/tres.jpg');

let recuadro = document.querySelector('.cuadro');

recuadro.style.backgroundColor = 'blue';

const items = document.querySelectorAll(".item");
console.log(items);

items[0].style.color = "green";

items[1].style.color = "yellow";

items[2].style.color = "red";


let elementosLi = document.querySelectorAll('li');
elementosLi.forEach((li, index) => {
  if (index === 0) {
    li.style.fontFamily = 'Arial';
  } else if (index === 1) {
    li.style.fontFamily = 'Courier New';
  } else if (index === 2) {
    li.style.fontFamily = 'Georgia';
  }
});