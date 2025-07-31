import React from 'react'

function YoutubeFrame() {
  return (
    <section className="youtube-video">
      <video autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dnqhrr6jk/video/upload/f_auto:video,q_auto/v1/Lewen%20Tours/thmftnuxllgr1pfiu9ck" />
      </video>
    </section>
  );
}

export default YoutubeFrame