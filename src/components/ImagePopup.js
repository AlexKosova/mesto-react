export default function ImagePopup (props) {
  return (
      <section className = {`popup  popup_background-color ${props.isOpened && 'popup_opened'}`} id="photo-popup">
      <div className='photo-popup'>
        <button className="popup__cancel-button" id="photo-popup__close" name="photo-popup__close" type="button" onClick={props.onClose}></button>
        <img className="photo-popup__image" src={props.card.link} alt={props.card.name}/>
        <p className="photo-popup__title">{props.card.name}</p>
      </div>
    </section>
  )
}