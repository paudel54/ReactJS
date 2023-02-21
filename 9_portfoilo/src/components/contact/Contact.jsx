import { RiMailSendLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import "./contact.scss";
// emailjs
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_drgb6wn",
        "template_c5850zs",
        form.current,
        "8kzzeh8OfVXZC6h8i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Connect Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendLine className="contact__option-icon" />
            <h4>Email</h4>
            <h5>2sansrit@gmail.com</h5>
            <a
              rel="noreferrer"
              href="mailto:2sansrit@gmail.com"
              target="_blank"
            >
              Send an Email
            </a>
          </article>
          <article className="contact__option">
            <IoLogoLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Sansrit Paudel</h5>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/sansrit-paudel/"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsappSquare className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>DM</h5>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://wa.me/+9779866334933"
            >
              Click to Direct Message
            </a>
          </article>
        </div>
        {/* end of contact */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your's Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your's Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your's Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
