import React from 'react'

function NewsLetter(props) {
  return (
    <section id="newsletter" className={props.className?props.className:""}>
        <h1 className="header">Services</h1>
        <p>We assist our clients in bookings</p>
        <p>Flights</p>
        <p>Hotels</p>
        <p>Apartments</p>
        {/* <p>Accommodation</p> */}
    </section>
  );
}

export default NewsLetter