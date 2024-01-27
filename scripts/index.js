// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardSection = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

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

function deleteCard(cardElement) {
  cardElement.remove()
}

initialCards.forEach(element => cardSection.append(createCard(element, deleteCard)));