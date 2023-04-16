import "./about.scss";
import ME from "../../assets/me.gif";
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
            well-versed in a variety of programming languages, frameworks, and
            tools that are needed to develop and maintain complex web
            applications.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Get Connected!
          </a>
        </div>
      </div>
    </section>
  );
}
