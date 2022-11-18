import React from "react";
// import ContactForm from "./ContactForm/ContactForm";
import "./Content.css";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Telegram from "@mui/icons-material/Telegram";
import CV from "../asets/Kovalenko_CV.pdf";
import { Download } from "@mui/icons-material";
import Image from "../asets/prog4.png";

function Content() {
  return (
    <div className="content">
      <div className="contacts">
        <div className="contactsBlocks">
          <img src={Image} alt="my cv card"/>
          <h2>Kovalenko Valentin</h2>
          <span>Frontend Developer</span>
          <div className="border"></div>
        </div>
        <div className="contactsBlocks">
          <h2>Location</h2>
          <span>Ukraine, Shostka</span>
          <span>Ready to remote work</span>
          <div className="border"></div>
        </div>
        <div className="contactsBlocks">
          <h2>Experience</h2>
          <span>November 2022 - Current</span>
          <div className="border"></div>
        </div>
        <div className="contactsBlocks">
          <h2>Contacts</h2>

          {/* <ContactForm /> */}
        </div>
        <div className="socialMedia">
          <div className="github">
            <a href="https://github.com/ValentinProg">
              <Github />
            </a>
          </div>
          <div className="linkedin">
            <a href="https://linkedin.com/in/valkovalenko">
              <LinkedIn/>
            </a>
          </div>

          <div className="teleram">
            <a href="https://t.me/ValentinKovalenko">
              <Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="mainHeader">
          <h2>About</h2>
          <div className="mainButtons">
            <a href={CV} download="Kovalenko_CV">
              <button>
                <Download />
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="mainSkills">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, Javascript</li>
            <li>React</li>
            <li>Zustand</li>
            <li>Git/GitHub, REST APIs</li>
          </ul>
        </div>
        <div>
          <h2>Work Experience</h2>
          <span>
            Frontend Developer
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#797979"
              class="bi bi-dot"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
            </svg>
            AquaLux Systems
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#797979"
              class="bi bi-dot"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
            </svg>
            Fulltime
            <svg
              width="25"
              height="25"
              viewBox="0 0 16 6"
              xmlns="http://www.w3.org/2000/svg"
              fill="#797979"
              class="bi bi-dot"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
            </svg>
            <span className="workData">Aug 2022 - Oct 2022</span>
          </span>
          <ul>
            <li>
              Created user interfaces and configured the logic of user
              interaction
            </li>
            <li>
              Utilized HTML, CSS, and React to create 10+ responsive landing
              pages for company
            </li>
            <li>Developed of the data storage logic with Zustand</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
