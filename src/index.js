import './pages/index.css';
import { initialCards } from './components/cards.js';
import { cardSection, createCard, deleteCard, hendleLikeCard} from './components/card.js';
import { openModal, closeModal } from './components/modal.js';


// @todo: Вывести карточки на страницу
initialCards.forEach(element => cardSection.append(createCard(element, deleteCard, openModalImage, hendleLikeCard)));

const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonNewCard = document.querySelector('.profile__add-button');
const closeModalbuttons = document.querySelectorAll('.popup__close');
const modalProfile = document.querySelector('.popup_type_edit');
const modalNewCard = document.querySelector('.popup_type_new-card');
const modalImage = document.querySelector('.popup_type_image');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const modalImageLink = document.querySelector('.popup__image');
const modalImageName = document.querySelector('.popup__caption');
const formEditProfile = document.forms.edit_profile;
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;
const formNewCard = document.forms.new_place;
const newCardName = formNewCard.elements.place_name;
const newCardLink = formNewCard.elements.link;


//открытие формы профиля
buttonEditProfile.addEventListener('click', () => {
  openModal(modalProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

//открыти формы добавления карточки
buttonNewCard.addEventListener('click', () => openModal(modalNewCard));

//открытие картинки
function openModalImage(name, link) {
  openModal(modalImage);
  modalImageLink.src = link;
  modalImageLink.alt= name;
  modalImageName.textContent = name;
}

//закрытие попапа
closeModalbuttons.forEach((item) => {
  item.addEventListener('click', () => {
    const modal = item.closest('.popup');
    closeModal(modal);
  });
});

// обработчик «отправки» формы профиля
function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(modalProfile);
}

formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

//добавление карточки
function addCard(evt) {
  evt.preventDefault();
  const newCard = createCard(
    {name: newCardName.value, link: newCardLink.value},
    deleteCard,
    openModalImage,
    hendleLikeCard
  );
  cardSection.prepend(newCard);
  formNewCard.reset();
  closeModal(modalNewCard);
}

formNewCard.addEventListener('submit', addCard);
