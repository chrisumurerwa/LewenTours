import React from 'react'

function TipsSection() {
  return (
    <section className="tips_text">
      <h1 className="header">Travel Guidelines</h1>
      <p className="paragraph4">
        The following 10 tips will help you plan your upcoming trip:
      </p>
      <ul className="unordered_list">
        <li>
          Inform yourself (and stay updated) about the most recent safety and
          security situation of your destination by consulting the website of
          the government of your home country. If your country does not have
          one, you can always consult the up-to-date travel advice on the
          excellent websites of the{" "}
          <a
            href="https://www.gov.uk/foreign-travel-advice"
            rel="noreferrer"
            target="_blank"
          >
            UK Government
          </a>
          , the{" "}
          <a
            href="http://www.state.gov/travel/"
            rel="noreferrer"
            target="_blank"
          >
            USA Department of State
          </a>
          , and the{" "}
          <a
            href="http://www.smartraveller.gov.au/zw-cgi/view/Advice/"
            rel="noreferrer"
            target="_blank"
          >
            Australian Government
          </a>
        </li>
        <li>
          Apply in time for travel documents (international passport & visa)
          when applicable. This information can also be found on the website of
          the government of your home country (cf. links above).
        </li>
        <li>
          Apply in time for ESTA (Electronic System for Travel Authorization)
          when you travel to/via USA, or for an eTA when you travel to/via
          Canada.
        </li>
        <li>
          Inform yourself about the health situation in the country that you
          want to visit. When applicable, visit your doctor in time for
          immunizations (allow up to 6 weeks for any vaccinations to take
          effect) and other travel-related medical treatments. You can find all
          necessary information on the website of the USA Centre for Disease
          Control and Prevention or the website of the world-famous Belgian
          Institute of Tropical Medicine.
        </li>
        <li>
          Educate yourself about food and drinking safety when traveling to
          developing countries, in order to minimize the risk for traveler’s
          diarrhea. Know what to do in case that you would develop diarrhea
          despite taking precautionary measures.
        </li>
        <li>
          Pack you luggage in time! Make use of my packing list, so that you can
          buy missing items in advance.
        </li>
        <li>
          Prepare your finances. Make sure that all your credit cards are valid
          and have a high enough credit limit. Know the phone number of your
          credit card company in case you would encounter unexpected problems.
          Many places still don't accept credit cards or checks, so be sure to
          order and bring travelers' checks or cash (foreign currency) in this
          scenario.
        </li>
        <li>
          Plan your itinerary in advance. A helpful source to start looking for
          the perfect itinerary are the online travel guides of Rough Guides,
          Lonely Planet, and - my favorite - the Frommer's guides (suggested
          itineraries are listed per
        </li>
        <li>
          Know what the weather will be like at your travel destinations. Don’t
          get caught unprepared, and always double-check the weather forecast
          the day before your departure. The best weather forecast websites are
          the weather channel, wunderground, and – my favorite – accuweather.
        </li>
        <li>
          Book your flights and accommodations in advance to avoid extra costs
          and huge disappointment. If you want, you can always use the links on
          my blog to book your holiday. Before booking, be sure to read the
          following tips: tips for getting the best deal at a (luxury) hotel.
          tips for booking the cheapest plane ticket.
        </li>
      </ul>
    </section>
  );
}

export default TipsSection