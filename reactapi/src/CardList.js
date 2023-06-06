
import React, { useState, useRef } from 'react';
import './CardList.css';
import Card from './Card';

function CardList({ cards }) {
  const [showAllCards, setShowAllCards] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const cardContainerRef = useRef(null);

  const handleScrollLeft = () => {
    setVisibleCards((prevVisibleCards) => {
      const nextVisibleCards = prevVisibleCards - 4;
      return nextVisibleCards < 0 ? 0 : nextVisibleCards;
    });
    setShowAllCards(false);
  };

  const handleScrollRight = () => {
    setVisibleCards((prevVisibleCards) => {
      const nextVisibleCards = prevVisibleCards + 4;
      return nextVisibleCards > cards.length ? prevVisibleCards : nextVisibleCards;
    });
    setShowAllCards(false);
  };

  const renderCards = () => {
    let cardsToShow;
  
    if (showAllCards) {
      cardsToShow = cards.slice(0, visibleCards);
    } else {
      const startIndex = visibleCards - 4;
      const endIndex = visibleCards;
      cardsToShow = cards.slice(startIndex, endIndex);
    }
  
    return cardsToShow.map((card, index) => (
      <Card
        key={card.id}
        cardDetail={card}
        isLastCard={index === cardsToShow.length - 1}
      />
    ));
  };
  
  return (
    <div className="card-container">
      <button
        className="arrow-button left"
        onClick={handleScrollLeft}
        disabled={visibleCards <= 4}
      >
        &lt;
      </button>
      <div className="cards-horizontal" ref={cardContainerRef}>
        {renderCards()}
      </div>
      <button
        className="arrow-button right"
        onClick={handleScrollRight}
        disabled={visibleCards >= cards.length}
      >
        &gt;
      </button>
    </div>
  );
}

export default CardList;
