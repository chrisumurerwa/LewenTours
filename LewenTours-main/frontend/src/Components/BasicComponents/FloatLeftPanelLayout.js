import React, { useContext } from 'react'
import Context from '../../Context/Context';

const FloatLeftPanelLayout = ({left_panel, right_pannel}) => {
   const { setMainTitle } = useContext(Context);
  
  function SetMainContent(category) {
    // clicking event for left side of the page
    const categories = document.querySelectorAll("#accomodations .sticky_card a");
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove("active");
    }

    // by default I assume to have 3 left categories
    category.classList.add("active");
    switch (category.innerHTML) {
        // category one
      case left_panel.link1.name:
        setMainTitle(left_panel.link1.name);
        left_panel.setData(left_panel.link1.data);
        break;

      case left_panel.link2.name:
        setMainTitle(left_panel.link2.name);
        left_panel.setData(left_panel.link2.data);
        break;

      case left_panel.link3.name:
        setMainTitle(left_panel.link3.name);
        left_panel.setData(left_panel.link3.data);
        break;

      default:
        left_panel.setData([]);
    }
  }

  return (
    <section id="accomodations">
      <div className="accomodation_container">
        <div className="sticky_card">
          <h2 className="title">{ left_panel.title }</h2>
          <a
            href="#Hotels"
            className="link active"
            onClick={(event) => SetMainContent(event.target)}
          >
            {left_panel.link1.name}
          </a>
          <a
            href="#Apartments"
            className="link"
            onClick={(event) => SetMainContent(event.target)}
          >
            {left_panel.link2.name}
          </a>
          <a
            href="#top"
            className="link"
            onClick={(event) => SetMainContent(event.target)}
          >
            {left_panel.link3.name}
          </a>
        </div>
        <div className="main_content">
            {right_pannel}
        </div>
      </div>
    </section>
  );
}

export default FloatLeftPanelLayout