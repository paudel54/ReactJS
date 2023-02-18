import "./about.scss";
import ME from "../../assets/me-about.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="side img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years </small>
            </article>
            {/* card2 */}
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>35+ Global</small>
            </article>
            {/* card # */}
            <article className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>21+ Completed</small>
            </article>
          </div>
          {/* Paragraph */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            libero illum unde, aspernatur nesciunt molestiae magnam voluptatibus
            commodi! Excepturi itaque rerum reprehenderit ratione quos! Laborum
            vero corporis explicabo nesciunt nobis.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Get Connected!
          </a>
        </div>
      </div>
    </section>
  );
}
