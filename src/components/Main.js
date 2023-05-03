import React from "react";
import Card from './Card';
import api from "../utils/Api";

export default function Main (props) {

  const [cards, setCard] = React.useState([]);
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, items]) => {
      setUserName (userData.name);
      setUserDescription (userData.about);
      setUserAvatar (userData.avatar);
      setCard(items)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <main>
      <section className="profile">
        <img className="profile__photo" src={userAvatar} alt="фото профиля"/>
        <button 
        className="profile__photo-edit-button" onClick={props.onAvatarClick}>
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" aria-label="редактировать профиль" onClick={props.onEditProfileClick} type="button"></button>
          <p className="profile__description">{userDescription}</p> 
        </div>
        <button className="profile__add-button" onClick={props.onPlaceClick} type="button" aria-label="добавить фото"></button>
      </section>

      <section className="elements">
          {cards.map((data) => {
            return (
            <Card 
            card = {data} 
            key = {data._id}
            onClick = {props.onCardClick}/>
            )
          })}
      </section>
    </main>
  )
}