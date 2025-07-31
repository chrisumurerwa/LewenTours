import React from 'react'
import { Link } from 'react-router-dom';

const Top10Component = () => {
  return (
    <section id="about_us_text" className="top10s">
      <h1>TOP 10 Travel Lists</h1>
      <p className="paragraph4">
        Every Monday, I publish a new top 10 travel list to inspire you and fuel
        yoru wanderlust. You can subscribe to my newsletter (3x/week) by
        entering your email address in the box on the right side (desktop) or
        bottom (tablet, smartphone) of this page.
        <br /> You can also follow me on <Link to="">Instagram</Link>,{" "}
        <Link to="">Facebook</Link>, <Link to="">Twitter</Link>, and/or YouTube.
      </p>
      <div className="images-list">
        <h3>Gorilla Trekking</h3>
        <div className="travel_group">
          <div className="travel_card">
            <img
              src="/images/Travels/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/Is-Rwanda-cheap-to-travel-to.jpg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/shutterstock_1035464182.jpg.webp"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/35174428511_73e9f81c21_k-1920x1280.jpg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
          <div className="travel_card">
            <img
              src="/images/Travels/cityscape-things-to-do-in-kigali-rwanda_44e57bd0bf.jpeg"
              alt=""
            />
            <p>
              best luxury hotels Italy Top 10 best luxury hotels & resorts in
              Italy
            </p>
          </div>
        </div>
        {/* <h3>Gorilla Trekking</h3>
        <h3>Game drive</h3>
        <h3>Genocide memorial sites</h3>
        <h3>Biking & Hiking</h3>
        <h3>City tour</h3>
        <h3>Scenery</h3>
        <h3>City tour</h3>
        <h3>Scenery</h3> */}
      </div>
    </section>
  );
}

export default Top10Component
