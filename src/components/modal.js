export function openModal(modal) {
    modal.classList.add('popup_is-animated');
    modal.classList.add('popup_is-opened');
    modal.addEventListener('click', closeModalOverlay);
    document.addEventListener('keydown', closeModalEsc);
}

export function closeModal(modal) {
    modal.classList.add('popup_is-animated');
    modal.classList.remove('popup_is-opened');
    modal.removeEventListener('click', closeModalOverlay);
    document.removeEventListener('keydown', closeModalEsc);
}

function closeModalEsc (evt) {
    if (evt.key === 'Escape') {
      const openedModal = document.querySelector('.popup_is-opened');
      closeModal(openedModal);
      }
    }
  
function closeModalOverlay (evt) {
    if(evt.target === evt.currentTarget) { 
      closeModal(evt.currentTarget);
    }
  }
  