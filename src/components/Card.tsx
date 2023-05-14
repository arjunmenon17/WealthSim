import React from 'react';
import './Card.css';

interface Props {
  image: string;
  title: string;
  description: string;
  caption: string;
}

const Card: React.FC<Props> = ({ image, title, description, caption }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img className="card-image" src={image} alt={title} />
        <div className="caption">{caption}</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
