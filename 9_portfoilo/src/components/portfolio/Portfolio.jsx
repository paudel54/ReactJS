import "./portfolio.scss";
import IMG1 from "../../assets/3_shoes_e_com.jpg";
import IMG2 from "../../assets/1_stock.jpg";
import IMG3 from "../../assets/2_online_course.jpg";
import IMG4 from "../../assets/4_income_tracker.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item item1">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Shoes e-commerce" />
          </div>
          <h3>E-Commerce -Men's Wear</h3>
          <a
            href="https://github.com/paudel54"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {/* <a href="https://github.com/paudel54" className="btn btn-primary">
              Live Demo
            </a> */}
        </article>
        {/* *********************************************** */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Finance Management tool" />
          </div>
          <h3>Finance Tracker </h3>
          <a
            href="https://github.com/paudel54"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {/* <a href="https://github.com/paudel54" className="btn btn-primary">
              Live Demo
            </a> */}
        </article>
        {/* ***************************************** */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="LMS" />
          </div>
          <h3>Learning Management System</h3>
          <a
            href="https://github.com/paudel54"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {/* <a href="https://github.com/paudel54" className="btn btn-primary">
              Live Demo
            </a> */}
        </article>
        {/* ******************************************** */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Shoes e-commerce" />
          </div>
          <h3>Finance Tracker -Mobile </h3>
          <a
            href="https://github.com/paudel54"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {/* <a href="https://github.com/paudel54" className="btn btn-primary">
              Live Demo
            </a> */}
        </article>
        {/* ************************************************************ */}
      </div>
    </section>
  );
}
