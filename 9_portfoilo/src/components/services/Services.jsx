import "./services.scss";
import { BiCheck } from "react-icons/bi";
export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-stack development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom web application development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content management systems (CMS) development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Design and hosting</p>
            </li>
          </ul>
        </article>
        {/* UI/UX section ends */}
        <article className="service">
          <div className="service__head">
            <h3>Technical Consultant</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Optimize web applications for performance, scalability, and
                security
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Training and mentorship to junior developers</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Reviews & Web Development Roadmap</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mentorship on use of programming languages, frameworks, and
                design patterns
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Recommendations to non-technical stakeholders in a clear and
                understandable way
              </p>
            </li>
          </ul>
        </article>
        {/* part 2 WebDevelopment section ends */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>CapCut and Reels</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tech Channels</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mentorship for content Creators</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Audience Builtup and Growth</p>
            </li>
          </ul>
          {/* Content Creation section ends */}
        </article>
      </div>
    </section>
  );
}
