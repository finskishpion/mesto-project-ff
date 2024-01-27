// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardSection = document.querySelector('.places__list');

function createCard (element, deleteCard) {
  const cardElement = document.querySelector('#card-template').content.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  cardElement.querySelector('.card__title').textContent = element.name;
  cardImage.alt = element.name;
  cardImage.src = element.link;
  
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
}

const deleteCard = (evt) => evt.target.parentElement.remove();

initialCards.forEach(element => cardSection.append(createCard(element, deleteCard)));