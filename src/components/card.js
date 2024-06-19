// @todo: Темплейт карточки, DOM узлы
export const cardSection = document.querySelector('.places__list');


// @todo: Функция создания карточки
export function createCard ({name, link}, deleteCard, openModalImage, hendleLikeCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
  cardElement.querySelector('.card__title').textContent = name;
  cardImage.alt = name;
  cardImage.src = link;
  
  const buttonDelete = cardElement.querySelector('.card__delete-button');
  buttonDelete.addEventListener("click", () => deleteCard(cardElement));

  cardImage.addEventListener('click', () => openModalImage(name, link));

  likeButton.addEventListener('click', () => hendleLikeCard(likeButton));
  
  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(cardElement) {
  cardElement.remove()
}

//функция лайка карточки
export function hendleLikeCard(button) {
  button.classList.toggle('card__like-button_is-active');
}
