import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import SVG from "react-inlinesvg";

import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
//import CatherineSillerResume from './assets/Catherine_Siller_Resume.pdf'
import GithubIcon from "./assets/svg/github.svg";
import LinkedinIcon from "./assets/svg/linkedin.svg";
import favicon from "./assets/images/favicon.ico";

const TopLine = styled.div`
  background: linear-gradient(
    to bottom,
    #fcecfc 0%,
    #fba6e1 50%,
    #fd89d7 83%,
    #ff7cd8 100%
  );
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Section = styled.section`
  color: #444444;
  font-family: "Poppins", sans-serif;
  margin: 64px auto;
  overflow: hidden;
  text-align: center;
  width: 100%;

  > div.top {
    display: block;
    margin: 24px auto 0;
    text-align: center;

    h1 {
      font-size: 42px;
      font-weight: 500;
      margin: 16px 0 0;

      > span {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #0000;
        background-image: linear-gradient(
          90deg,
          #f79533 0%,
          #f37055 15%,
          #ef4e7b 30%,
          #a166ab 44%,
          #5073b8 58%,
          #1098ad 72%,
          #07b39b 86%,
          #6dba82 100%
        );
        background-size: cover;
      }
    }

    h2 {
      font-size: 28px;
      font-weight: 400;
    }

    p {
      font-size: 18px;
      margin: auto auto;
      max-width: 800px;
      word-wrap: break-word;

      &:not(:first-of-type) {
        padding-top: 16px;
      }
    }

    > img {
      border-radius: 50%;
      display: block;
      height: 150px;
      margin: auto auto 24px;
      width: 150px;
    }

    a:-webkit-any-link {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #0000;
      background-image: linear-gradient(
        90deg,
        #f79533 0%,
        #f37055 15%,
        #ef4e7b 30%,
        #a166ab 44%,
        #5073b8 58%,
        #1098ad 72%,
        #07b39b 86%,
        #6dba82 100%
      );
      background-size: cover;
    }

    > a:hover {
      animation: omg 3s infinite;
    }

    .icon {
      margin-right: 24px;
    }

    @-webkit-keyframes omg {
      0%,
      100% {
        color: #7ccdea;
        fill: #7ccdea;
      }
      16% {
        color: #0074d9;
        fill: #0074d9;
      }
      32% {
        color: #2ecc40;
        fill: #2ecc40;
      }
      48% {
        color: #ffdc00;
        fill: #ffdc00;
      }
      64% {
        color: #b10dc9;
        fill: #b10dc9;
      }
      80% {
        color: #ff4136;
        fill: #ff4136;
      }
    }

    @-moz-keyframes omg {
      0%,
      100% {
        color: #7ccdea;
        fill: #7ccdea;
      }
      16% {
        color: #0074d9;
        fill: #0074d9;
      }
      32% {
        color: #2ecc40;
        fill: #2ecc40;
      }
      48% {
        color: #ffdc00;
        fill: #ffdc00;
      }
      64% {
        color: #b10dc9;
        fill: #b10dc9;
      }
      80% {
        color: #ff4136;
        fill: #ff4136;
      }
    }

    @keyframes omg {
      0%,
      100% {
        color: #7ccdea;
        fill: #7ccdea;
      }
      16% {
        color: #0074d9;
        fill: #0074d9;
      }
      32% {
        color: #2ecc40;
        fill: #2ecc40;
      }
      48% {
        color: #ffdc00;
        fill: #ffdc00;
      }
      64% {
        color: #b10dc9;
        fill: #b10dc9;
      }
      80% {
        color: #ff4136;
        fill: #ff4136;
      }
    }
  }
`;

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catherine Siller's Portfolio</title>
        <link rel="canonical" href="http://www.catherine-siller.com/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <TopLine />
      <Header />
      <Section>
        <div className="top">
          <img
            alt="Catherine Siller"
            src={require("./assets/images/avatar.png")}
          />
          <a
            href="https://github.com/cathysiller"
            class="icon"
            target="_blank"
            rel="noreferrer"
            title="My GitHub"
            aria-label="My GitHub"
          >
            <SVG src={GithubIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/catherinesiller/"
            target="_blank"
            rel="noreferrer"
            title="My Linkedin"
            aria-label="Linkedin"
          >
            <SVG src={LinkedinIcon} />
          </a>
          <h1>
            Hi, I'm <span>Catherine Siller</span>
          </h1>
          <h2>Senior Software Developer</h2>
          <p>
            Previous senior software engineer at{" "}
            <a
              href="https://www.hulu.com/welcome"
              target="_blank"
              rel="noreferrer"
            >
              @Hulu
            </a>{" "}
            and
            <a href="https://www.mailgun.com/" target="_blank" rel="noreferrer">
              @Mailgun
            </a>
            . I also help small businesses build sustainable and enduring user
            experiences.
          </p>
          <p>
            Currently accepting freelance projects,{" "}
            <a href="#Contact">contact me!</a>
          </p>
        </div>
      </Section>

      <Section id="Projects">
        <Projects />
      </Section>

      <Section id="Skills">
        <Skills />
      </Section>

      <Section id="Contact">
        <h1>Contact Me</h1>

        <Form />
      </Section>

      <Section>
        <Footer />
      </Section>
    </>
  );
}

export default App;
