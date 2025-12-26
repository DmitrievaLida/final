import React from "react";
import "./GiftCard.css";

const GiftCard = ({ image, price }) => {

  // Функция для обработки клика по кнопке
  const handleBuyClick = () => {
    alert(`Вы выбрали подарочную карту стоимостью ${price}`);
  };

  return (
    <div className="gift-card">
      <img src={image} alt="Подарочная карта" className="gift-card__image" />
      <div className="gift-card__info">
        <span className="gift-card__price">{price}</span>
        <button 
          className="gift-card__button" 
          onClick={handleBuyClick} // добавляем обработчик события
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default GiftCard;