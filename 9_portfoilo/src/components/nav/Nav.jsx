import "./nav.scss";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiBook3Line } from "react-icons/ri";
import { MdWebStories } from "react-icons/md";
import { TbMessage } from "react-icons/tb";

export default function Nav() {
  return (
    <div>
      <a href="#home">
        <AiFillHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <RiBook3Line />
      </a>
      <a href="#services">
        <MdWebStories />
      </a>
      <a href="#contact">
        <TbMessage />
      </a>
    </div>
  );
}
