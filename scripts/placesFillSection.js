const initialPlaces = [
  {
    name: 'Кузнецкий Алатау',
    link: './img/content/kuzneckij-alatau.jpg'
  },
  {
    name: 'Озеро Байкал',
    link: './img/content/ozero-baykal.jpg'
  },
  {
    name: 'Красноярские столбы',
    link: './img/content/krasnoyarskie-stolbi.jpg'
  },
  {
    name: 'Перевал Кату-ярык',
    link: './img/content/pereval-katu-yarik.jpg'
  },
  {
    name: 'Телецкое озеро',
    link: './img/content/ozero-teleckoe.jpg'
  },
  {
    name: 'Шерегеш. Гора Зеленая',
    link: './img/content/sheregesh-gora-zelenaya.jpg'
  },
]

const placesListElement = document.querySelector('.places__list');

function addPlace(name, link) {
  const placeTemplateElement = document.querySelector('#placeTemplate').content;
  const placeElement = placeTemplateElement.querySelector('.places__item').cloneNode(true);

  placeElement.querySelector('.place__image').src = link;
  placeElement.querySelector('.place__image').alt = name;
  placeElement.querySelector('.place__title').textContent = name;

  placesListElement.prepend(placeElement);
}

/* Заполняем контентом */
initialPlaces.forEach(elem => addPlace(elem.name, elem.link));
