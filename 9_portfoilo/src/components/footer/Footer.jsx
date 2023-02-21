import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SANSRIT PAUDEL
      </a>
      <ul className="permalink">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="portfolio">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Socials */}
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/sansrit-paudel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/paudel54"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://twitter.com/2sansrit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImTwitter />
        </a>
      </div>
      {/* copyright */}
      <div className="footer__copyright">
        <small>There is always an easy and a hard way!</small>
      </div>
    </footer>
  );
}
