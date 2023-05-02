import React from 'react';
import './App.css';


import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App () {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  function handleEditProfileClick () {
    setEditProfilePopupOpen(true)
    document.addEventListener('keydown', handleCloseByEscape)
    document.addEventListener('click', handleCloseByOverlay)
  }

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  function handleAddPlaceClick () {
    setAddPlacePopupOpen(true)
    document.addEventListener('keydown', handleCloseByEscape);
    document.addEventListener('click', handleCloseByOverlay)
  }

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  function handleEditAvatarClick () {
    setEditAvatarPopupOpen(true)
    document.addEventListener('keydown', handleCloseByEscape);
    document.addEventListener('click', handleCloseByOverlay)
  }

  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false)
  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
    document.addEventListener('keydown', handleCloseByEscape);
    document.addEventListener('click', handleCloseByOverlay)
  }

  function closeAllPopups () {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false)
    setSelectedCard('');
    document.removeEventListener('keydown', handleCloseByEscape);
    document.removeEventListener('click', handleCloseByOverlay);
  }

  function handleCloseByEscape (evt) {
    if (evt.key === 'Escape') {
      closeAllPopups()
    }
  }

  function handleCloseByOverlay (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups()
    }
  }
  

  return (
    <div className="page">
      <Header />
      <Main
      isEditProfilePopupOpen = {false}
      isAddPlacePopupOpen = {false}
      isEditAvatarPopupOpen = {false}
      onAvatarClick = {handleEditAvatarClick}
      onPlaceClick = {handleAddPlaceClick}
      onEditProfileClick = {handleEditProfileClick}
      onCardClick = {handleCardClick}
      />
      <Footer />
      <PopupWithForm title="Редактировать профиль" buttonText="Сохранить" name="editProfile" isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} onByEscape={handleCloseByEscape} onOverlayClick = {handleCloseByOverlay}>
        <form name="editProfile" noValidate>
          <input required className="popup__input" type="text" placeholder="Введите имя" minLength="2" maxLength="40" name="userName" id="userNameInput" />
          <span className="error" id="userNameInput-error"></span>
          <input required className="popup__input" type="text" placeholder="Немного информации о себе" minLength="2" maxLength="200" name="userJobInput" id="userJobInput" />
          <span id="userJobInput-error" className="error"></span>
        </form>
      </PopupWithForm>

      <PopupWithForm title="Новое место" buttonText="Создать" name="newPost" isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} onByEscape={handleCloseByEscape} onOverlayClick = {handleCloseByOverlay}>
        <form name="newPost" noValidate>
          <input required className="popup__input" type="text" minLength="2" maxLength="30" placeholder="Название" name="postTitleInput" id="postTitleInput" />
          <span id="postTitleInput-error" className="error"></span>
          <input required className="popup__input" type="url" placeholder="Ссылка на картинку" name="postLinkInput" id="postLinkInput" />
          <span id="postLinkInput-error" className="error"></span>
        </form>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" buttonText="Сохранить" name="editPhotoForm" isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} onByEscape={handleCloseByEscape} onOverlayClick = {handleCloseByOverlay}>
        <form name="editPhotoForm" noValidate>
          <input required className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на аватар" name="photoLinkInput" id="photoLinkInput"/>
          <span id="photoLinkInput-error" className="error"></span>
        </form>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" buttonText="Да" name="confirmDeletion" onClose={closeAllPopups} onByEscape={handleCloseByEscape} onOverlayClick = {handleCloseByOverlay}>
      </PopupWithForm>

      <ImagePopup 
      card = {selectedCard} 
      onClose = {closeAllPopups} 
      isOpened = {isImagePopupOpen}/>

    </div>)
}

export default App
