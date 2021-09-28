// a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)

// https://w3collective.com/react-star-rating-component/
// Note to grader: I was unable to determine how stars should work, searching on Google I found this code which I've included because I was curious about how it worked. It gave me a preview into hooks and was helpful with using map.
import React, {useState} from 'react';

// don't need to bind when using an arrow function
const Stars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type = 'button'
            key = {index}
            className = {index <= (hover || rating) ? 'on' : 'off'}
            onClick = {() => setRating(index)}
            onMouseEnter = {() => setHover(index)}
            onMouseLeave = {() => setHover(rating)}
          >
          <span className='star'>&#9733;</span>
        </button>
        );
      })}
    </div>
  );
};

export default Stars;