
import React, { useState } from 'react';
import './Card.css';


function Card({ cardDetail }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`front ${isHovered ? 'hovered' : ''}`}>
        <h3>{cardDetail.title}</h3>
        <img src={cardDetail.source} alt={cardDetail.title} />
      </div>
      {isHovered && (
        <div className="back">
          <p>{cardDetail.description}</p>
        </div>
      )}
    </div>
  );
}

export default Card;

