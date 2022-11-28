/* открытие и закрытие popup */
const buttonEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__button-close');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

/* редактирование данных в popup */
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let aboutMeInput = formElement.querySelector('.popup__input_type_about-me');
let nameProfile = document.querySelector('.profile__title');
let aboutMeProfile = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutMeProfile.textContent = aboutMeInput.value;

  closePopup();
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);




