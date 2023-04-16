import "./nav.scss";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiBook3Line } from "react-icons/ri";
import { MdWebStories } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#/"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiBook3Line />
      </a>
      <a
        href="#services"
        onClick={() => {
          setActiveNav("#services");
        }}
        className={activeNav === "#services" ? "active" : ""}
      >
        <MdWebStories />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <TbMessage />
      </a>
    </nav>
  );
}
