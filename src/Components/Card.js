// import { useState } from "react";

// function Card({ id, image, info, price, name, removeTour }) {
//   const [readmore, setReadmore] = useState(false);
//   const description = readmore ? info :`${info.substring(0, 200)}....`;

//   function readmoreHandler() {
//     setReadmore(!readmore);
//   }

//   return (
//     <div className="card">
//       <img src={image} className="image"></img>

//       <div className="tour-info">

//         <div className="tour-details">
//           <h4 className="tour-price">₹ {price}</h4>
//           <h4 className="tour-name">{name}</h4>
//         </div>

//         <div className="description">
//           {description}
//           <span className="read-more" onClick={readmoreHandler}>
//             {readmore ? `Show less` : `Read more`}
//           </span>
//         </div>

//       </div>
//       <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>
//     </div>
//   );
// }

// export default Card;


import { useState } from "react";
import PropTypes from 'prop-types';
function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const [liked, setLiked] = useState(false); // Track if the user "liked" the tour

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  function toggleLike() {
    setLiked(!liked); // Toggle the "liked" state
  }

  // Function to categorize price
  const priceBadge = price > 5000 ? 'Premium' : price > 2000 ? 'Standard' : 'Budget';

  return (
    <div className="card">
      <img 
        src={image} 
        className="image" 
        alt={name} 
        loading="lazy" // Lazy loading for better performance
      />

      <div className="tour-info">

        <div className="tour-details">
          <h4 className="tour-price" style={{ color: price > 5000 ? '#ff5733' : price > 2000 ? '#ffc107' : '#28a745' }}>
            ₹ {price}
          </h4>
          <span className={`badge ${priceBadge.toLowerCase()}`}>{priceBadge}</span>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className={`description ${readmore ? 'expand' : 'collapse'}`}>
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show less` : `Read more`}
          </span>
        </div>

      </div>

      <div className="card-actions">
        <button onClick={toggleLike} className={`btn-like ${liked ? 'liked' : ''}`}>
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
        <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>
      </div>
    </div>
  );
}

// PropTypes validation
Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeTour: PropTypes.func.isRequired,
};

export default Card;
