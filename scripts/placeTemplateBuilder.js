/* Создаем шаблон карточки place как элемент списка */
/* Объявляем переменные и присваиваем классы */
const footerTag = document.querySelector('footer');
const placeTemplateElement = document.createElement('template');
placeTemplateElement.id = 'placeTemplate';
const placesItemElement = document.createElement('li');
placesItemElement.classList.add('places__item');
const placeElement = document.createElement('article');
placeElement.classList.add('place');
const placeImageElement = document.createElement('img');
placeImageElement.classList.add('place__image');
const placeInfoElement = document.createElement('div');
placeInfoElement.classList.add('place__info');
const placeTitleElement = document.createElement('h2');
placeTitleElement.classList.add('place__title');
const placeLikeElement = document.createElement('button');
placeLikeElement.classList.add('place__like');
placeLikeElement.setAttribute('type', 'button');
placeLikeElement.setAttribute('aria-label', 'Кнопка лайка');
/* Собираем шаблон */
footerTag.after(placeTemplateElement);
placeTemplateElement.append(placesItemElement);
placesItemElement.append(placeElement);
placeElement.append(placeImageElement, placeInfoElement);
placeInfoElement.append(placeTitleElement, placeLikeElement);
/* Можно <template> и в html-е написать, но надо научиться собирать шаблон. */
