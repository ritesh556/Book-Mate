import React from 'react';
import '../../styles/star.scss'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Starrating = ({ rating }) => {
  // Convert the rating value to a float
  const starRating = parseFloat(rating);
  
  // Calculate the number of full stars and half stars
  const fullStars = Math.floor(starRating);
  const hasHalfStar = (starRating - fullStars) !== 0;
  
  // Render the stars
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`star-${i}`} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="star-half" />);
  }
  return (
    <div className='star'>
      {stars}
    </div>
  );
};

export default Starrating;
