import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import "./Content.css";
import Github from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Telegram from "@mui/icons-material/Telegram";
import Gmail from "@mui/icons-material/Google";
import CV from "../asets/CV.pdf";
import { Download } from "@mui/icons-material";
import  Image  from "../asets/prog1.png";

function Content() {
  return (
    // <div className="wrapper">
      <div className="content">
        <div className="contacts">
          <div className="contactsBlocks">
            <img src={Image}  />
            <h2>Kovalenko Valentin</h2>
            <span>Frontend Developer</span>
          </div>
          <div className="contactsBlocks">
            <h2>Location</h2>
            <span>Ukraine, Shostka</span>
          </div>
          <div className="contactsBlocks">
            <h2>Experience</h2>
            <span>November 2022 - Current</span>
          </div>
          <div className="contactsBlocks">
            <h2 >Contacts</h2>
            <span>November 2022 - Current</span>
            {/* <ContactForm /> */}
          </div>
          <div className="socialMedia">
            <a href="https://github.com/ValentinProg">
              <Github />
            </a>
            <a href="https://t.me/ValentinKovalenko">
            <LinkedIn />
            </a>
            <a href="https://t.me/ValentinKovalenko">
            <Telegram />
            </a>
            {/* <Gmail /> */}
          </div>
        </div>
        <div className="main">
          <div className="mainHeader">
            <h2>About</h2>
            <div className="mainButtons">
              <a href={CV} download={CV}>
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
              <li>HTML, CSS, Javascript, Typescript</li>
              <li>React, Web3</li>
              <li>Redux, GraphQL</li>
              <li>Git/GitHub, REST APIs, Jira, Scrum</li>
            </ul>
          </div>
          <div>
            <h2>Work Experience</h2>
            <span>
              Frontend Developer Tech Band Fulltime Feb 2021 - Current
            </span>
            <ul>
              <li>
                Created user interfaces and configured the logic of user
                interaction
              </li>
              <li>Developed responsive and mobile versions of web pages</li>
              <li>
                Implemented interaction of React applications with smart
                contracts and Web3.js library
              </li>
              <li>
                Worked in an agile environment, with daily standups, spent 2
                hours every two weeks planning sprints and sprint retrospectives
              </li>
              <li>Wrote documentation for developed projects</li>
              <li>
                Tested and debugged more of 10 projects with various development
                teams
              </li>
              <li>
                Worked with quality assurance to get new pages/products tested,
                and addressed any issues
              </li>
            </ul>
            <span>
              Frontend Developer AquaLux Systems Fulltime Nov 2020 - Feb 2021
            </span>
            <ul>
              <li>
                Utilized HTML, CSS, and React to create 30+ responsive landing
                pages for company
              </li>
              <li>Developed of the data storage logic with Redux</li>
              <li>Corrected and rewrote legacy code to modern standards</li>
            </ul>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Content;
