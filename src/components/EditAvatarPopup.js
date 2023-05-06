import React, { useRef } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup ({
  isOpened,
  onClose,
  onOverlayClick,
  onUpdateAvatar
}) {

  const currentUser = React.useContext(CurrentUserContext);
  const [buttonText, setButtonText] = React.useState('Сохранить')

  React.useEffect(() => {
    setButtonText('Сохранить');
    inputRef.current.value = ''
  }, [isOpened])

  const inputRef = useRef('');

  function handleSubmit (e) {
    e.preventDefault();
    setButtonText('Сохраняем...')
    onUpdateAvatar(inputRef.current.value);
  };

  return (
    <PopupWithForm
      title="Обновить аватар" 
      buttonText={buttonText} 
      name="editPhotoForm" 
      isOpened={isOpened} 
      onClose={onClose}
      onOverlayClick = {onOverlayClick}
      onSubmit={handleSubmit}
    >
      <input required ref={inputRef} className="popup__input popup__input_type_avatar" type="url" placeholder="Ссылка на аватар" name="photoLinkInput" id="photoLinkInput"/>
      <span id="photoLinkInput-error" className="error"></span>
    </PopupWithForm>
  )
}