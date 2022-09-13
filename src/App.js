import React from 'react'
import styled from 'styled-components'
import {Helmet} from "react-helmet";
import SVG from 'react-inlinesvg'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import CatherineSillerResume from './assets/Catherine_Siller_Resume.pdf'
import GithubIcon from './assets/svg/github.svg'
import LinkedinIcon from './assets/svg/linkedin.svg'
import favicon from './assets/images/favicon.ico'

const TopLine = styled.div`
  background: linear-gradient(to bottom, #fcecfc 0%,#fba6e1 50%,#fd89d7 83%,#ff7cd8 100%);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`

const Contact = styled.div`
  display: inline-flex;
`

const Button = styled.div`
  border: 2px solid #1098AD;
  display: block;
  cursor: pointer;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 16px;
  text-transform: lowercase;
`

const Section = styled.section`
  color: #444444;
  font-family: "Poppins",sans-serif;
  margin: 0 auto;
  max-width: 800px;
  padding-top: 24px;
  text-align: center;
  width: 100%;

  > div.top {
    display: block;
    margin: 24px auto 0;
    text-align: center;

    h1 {
      font-size: 56px;
      font-weight: 500;
      margin: 16px 0 0;

      > span {
        -webkit-background-clip: text;
        -webkit-text-fill-color: #0000;
        background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
        background-size: cover;
      }
    }

    h2 {
      font-size: 32px;
      font-weight: 700;
    }

    p {
      font-size: 18px;
      margin: 0 32px;

      &:not(:first-of-type) {
        margin-top: 8px;
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
      background-image: linear-gradient(90deg, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);
      background-size: cover;
    }

    > a:hover {
      animation: omg 3s infinite;
    }

    .icon {
      margin-right: 8px;
    }

    @-webkit-keyframes omg {
      0%, 100% { color: #7ccdea; fill: #7ccdea; }
      16%      { color: #0074D9; fill: #0074D9; }
      32%      { color: #2ECC40; fill: #2ECC40;}
      48%      { color: #FFDC00; fill: #FFDC00;}
      64%      { color: #B10DC9; fill: #B10DC9;}
      80%      { color: #FF4136; fill: #FF4136;}
    }

    @-moz-keyframes omg {
      0%, 100% { color: #7ccdea; fill: #7ccdea; }
      16%      { color: #0074D9; fill: #0074D9; }
      32%      { color: #2ECC40; fill: #2ECC40;}
      48%      { color: #FFDC00; fill: #FFDC00;}
      64%      { color: #B10DC9; fill: #B10DC9;}
      80%      { color: #FF4136; fill: #FF4136;}
    }

    @keyframes omg {
      0%, 100% { color: #7ccdea; fill: #7ccdea; }
      16%      { color: #0074D9; fill: #0074D9; }
      32%      { color: #2ECC40; fill: #2ECC40;}
      48%      { color: #FFDC00; fill: #FFDC00;}
      64%      { color: #B10DC9; fill: #B10DC9;}
      80%      { color: #FF4136; fill: #FF4136;}
    }
  }
`

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
          src={require('./assets/images/avatar.png')}
        />
        <a href="https://github.com/cathysiller" class="icon" target="_blank" rel="noreferrer" title="My GitHub" aria-label="My GitHub">
          <SVG src={GithubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/catherinesiller/" target="_blank" rel="noreferrer" title="My Linkedin" aria-label="Linkedin">
          <SVG src={LinkedinIcon} />
        </a>
        <h1>Hi! I'm <span>Catherine Siller</span></h1>
        <h2>A Front End Software Developer</h2>
        <p>
          Front end software developer currently <a href="https://twitter.com/hulu" target="_blank" rel="noreferrer">@Hulu</a>, previously 
          <a href="https://twitter.com/Mail_Gun" target="_blank" rel="noreferrer">@Mailgun</a>. I love all things web that are modern, fast, and pretty. Keeping it cute on the web and irl.</p>
        <p>Currently accepting freelance projects, <a href="mailto:catsiller12@gmail.com">email me!</a></p>
      </div>
    </Section>

    <Section id='projects'>
      <Projects />
    </Section>

    <Section id='skills'>
      <Skills />
    </Section>

    <Section id='contact'>
      <h1>Contact</h1>
      <Contact>
        <Button>
          <a href="mailto:catsiller12@gmail.com">Email Me!</a>
        </Button>
      </Contact>
    </Section>

    <Section>
      <Footer />
    </Section>
    </>
  );
}

export default App;
