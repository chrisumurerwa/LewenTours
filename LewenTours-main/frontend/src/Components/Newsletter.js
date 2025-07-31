import React from 'react'

function NewsLetter(props) {
  return (
    <section id="newsletter" className={props.className?props.className:""}>
        <h1 className="header">Services</h1>
        <p>Gorilla Trekking</p>
        <p>Biking and hiking</p>
        <p>City tour</p>
        <p>National Park</p>
        <p>Accommodation</p>
    </section>
  );
}

export default NewsLetter