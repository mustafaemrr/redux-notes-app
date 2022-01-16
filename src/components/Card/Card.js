import React from 'react'
import './Card.scss';

function Card({description, color}) {
  return (
    <div className={`card ${color}`}>
      {description}
    </div>
  )
}

export default Card
