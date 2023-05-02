export default function PopupWithForm (props) {
  return (
  <div className={`popup ${props.isOpened && 'popup_opened'}`}>
    <div className={`popup__container popup_type_${props.name}`}>
      <button className="popup__cancel-button" onClick={props.onClose} type="button"></button>
      <h3 className="popup__title">{props.title}</h3>
      {props.children}
      <button className="popup__save-button" aria-label={props.buttonText} type="submit">{props.buttonText}
      </button>
    </div>
  </div>
  )
}

