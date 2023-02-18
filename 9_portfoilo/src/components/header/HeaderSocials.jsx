import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
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
  );
}
