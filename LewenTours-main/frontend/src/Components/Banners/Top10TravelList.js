import React from 'react'

function Top10TravelList({image, title}) {
  return (
    <section id="top10banner">
        <div className="image_holder">
            <img src={ image } alt="Top 10 Travel List Banner" />
        </div>
        <h1>{ title }</h1>
    </section>
  )
}

export default Top10TravelList