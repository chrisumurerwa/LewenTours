import React from 'react'

const TravelTipsBanner = () => {
  return (
    <section id="tips_banner">
      <img src="/images/Banners/TravelTipsBanner.svg" alt="" />
      <div className="icons">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
      <a href="/travetips" className="submit_button">Visit Now</a>
    </section>
  );
}

export default TravelTipsBanner