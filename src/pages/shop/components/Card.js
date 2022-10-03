import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/styles/shop/Card.css';

const Card = ({ id, text, description, price, img }) => {
  return (
    <Link to={`/product/${id}`} className="card__wrapper">
      <figure className="card">
        <img className="card__image" alt={text} src={img} />
        <div className="card__overlay">
          <div className="card__content">
            <figcaption className="card__title text--highlighted">
              {text}
            </figcaption>
            <p className="card__description">{description}</p>
            <span className="card__price">{price}</span>
          </div>
        </div>
      </figure>
    </Link>
  );
};

export default Card;
