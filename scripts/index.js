const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupNewPlace = document.querySelector('.popup__new-place');
const buttonCreate = document.querySelector('.popup__button-create');
const buttonClose = document.querySelector('.popup__button-close');
const buttonCloseNewPlace = document.querySelector('.popup__button-close-new-place');
let formElement = document.querySelector('.popup__form');
const formElementNewPlace = document.querySelector('.popup__form-new-place');
let nameInput = formElement.querySelector('.popup__input_type_name');
let aboutMeInput = formElement.querySelector('.popup__input_type_about-me');
let titleInput = formElement.querySelector('.popup__input_type_title');
let linkInput = formElement.querySelector('.popup__input_type_link');
let nameProfile = document.querySelector('.profile__title');
let aboutMeProfile = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#element').content;


/* открытие и закрытие popup */
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  aboutMeInput.value = aboutMeProfile.textContent;
}

function openPopupNewPlace() {
  popupNewPlace.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function closePopupNewPlace() {
  popupNewPlace.classList.remove('popup_opened');
}

/* редактирование данных в popup */
function formSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  aboutMeProfile.textContent = aboutMeInput.value;

  closePopup();
}

const initialCards = [
  {
    name: 'Рыба-клоун',
    link: 'https://images.unsplash.com/photo-1613779907266-f85db34edae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80'
  },
  {
    name: 'Много рыбок',
    link: 'https://images.unsplash.com/photo-1576436445430-43d6d7c9aea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Кораллы',
    link: 'https://images.unsplash.com/photo-1515555585025-54136276b6e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Рифы',
    link: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Черепаха',
    link: 'https://images.unsplash.com/photo-1496196614460-48988a57fccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
  },
  {
    name: 'Заплыв на глубину',
    link: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  }
];

const createCard = (element) => {
  return `<article class="element">
    <button class="element__trash" type="button"></button>
    <img alt="фото" class="element__image" src="${element.link}">
    <div class="element__content">
      <h2 class="element__title">${element.name}</h2>
      <button class="element__like" type="button"></button>
    </div>
  </article>`
}

const renderCard = (name, link) => {
  cardsContainer.insertAdjacentHTML('beforeend', createCard(name, link));
}

initialCards.forEach((name, link) => {
  renderCard(name, link);
})

/* const addCard = (evt) => {
  evt.preventDefault();
  const cardImage = linkInput.value;
  const cardTitle = titleInput.value;

  renderCard(cardImage, cardTitle);
  closePopup();
} */


/* const renderCard (name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = name;
  cardElement.querySelector('.element__image').src = link;
}
initialCards.forEach(function (element) {

  cardsContainer.append(cardElement);
});
 */


/* initialCards.forEach(function (element) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;

  cardsContainer.append(cardElement);
}); */


buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
buttonAdd.addEventListener('click', openPopupNewPlace);
buttonCloseNewPlace.addEventListener('click', closePopupNewPlace);
formElement.addEventListener('submit', formSubmitHandler);
formElementNewPlace.addEventListener('submit', addCard);



