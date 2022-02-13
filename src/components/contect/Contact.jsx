import React from "react";
import("./Contact.css");

export default function Contact() {
  return (
    <>
      <div id="contact" className="connect">
        <div className="container">
          <h1>Contact Me</h1>
          <p>
            Drop me a mail at <strong> vkkhambra786@gmail.com</strong>
          </p>
          <div className="links">
            <a
              href="https://github.com/vkkhambra786"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-khambra/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/vikasku10134583"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        No © copyright issues | Designed and developed by Vikas Khambra
      </div>
    </>
  );
}
