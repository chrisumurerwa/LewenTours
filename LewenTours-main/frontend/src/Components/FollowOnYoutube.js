import React from 'react'
import { LINKS } from '../Constants/links';

function FollowOnYoutube({className}) {
  return (
    <section
      id="followon_youtube"
      className={className ? className : ""}
    >
      <h1 className="header">follow on youtube</h1>
      <p>
        My{" "}
        <a
          href="https://www.youtube.com/@lewen22"
          rel="noreferrer"
          target="_blank"
        >
          YouTube channel
        </a>{" "}
        is one of the most followed travel blogs in the world. I publish one new
        video per week (hotel or flight review). Click{" "}
        <a
          href={ LINKS.YOUTUBE }
          rel="noreferrer"
          target="_blank"
        >
          Here
        </a>{" "}
        to subscribe to my Youtube channel.
      </p>
      <div className="youtube_samples">
        <div className="video_container">
          <h3>Visiting Kayiro in Egypt</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Jf3ehoqtsqQ?si=AqRkbMoA3sEF3FTE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default FollowOnYoutube