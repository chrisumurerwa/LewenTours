import React from 'react'

const Stars = ({ color }) => {
  return (
    <span className={ color }>
      <i className="fa-solid fa-star" ></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-regular fa-star-half-stroke"></i>
    </span>
  );
}

export default Stars