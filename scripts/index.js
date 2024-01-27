// @todo: Темплейт карточки, DOM узлы
const cardSection = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
function createCard (element, deleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = element.name;
  cardImage.alt = element.name;
  cardImage.src = element.link;
  
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  buttonDelete.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove()
}

// @todo: Вывести карточки на страницу
initialCards.forEach(element => cardSection.append(createCard(element, deleteCard)));