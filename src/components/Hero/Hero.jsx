import React from "react";
import CV from "../../assets/cv.pdf";
import githubLDark from "../../assets/github-dark.svg";
import githubLight from "../../assets/github-light.svg";
import heroIcon from "../../assets/hero-img.png";
import linkedinDark from "../../assets/linkedin-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import twitterLight from "../../assets/twitter-light.svg";
import { useTheme } from "../../common/ThemeContext";
import styles from "./HeroStyles.module.css";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubLDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <React.Fragment>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img className={styles.hero} src={heroIcon} alt="my image" />
          <img
            onClick={toggleTheme}
            className={styles.colorMode}
            src={themeIcon}
            alt="color mode icon"
          />
        </div>
        <div className={styles.info}>
          <h1>
            Richener
            <br />
            Pintiatura
          </h1>
          <h2>Frontend Developer</h2>
          <span>
            <a href="https://twitter.com" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for developing modern React web apps for commercial
            businesses.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
