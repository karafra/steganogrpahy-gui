import styles from "components/footer/scss/Footer.module.scss";
import React from 'react';
const Footer = () => {
  return(
    <div>
      <footer className={styles.container}>
        <small>
          <text>
            Made with <span role="img" aria-label="heart">❤️</span> by
            <span> </span>
            <a href="https://twitter.com/karafro" target="_blank"  rel="noopener noreferrer">
              @karafro
            </a>
            <span> </span>
            <a href="https://github.com/karafra/steg-gui" target="_blank" rel="noopener noreferrer">
               Source code on Github
            </a>
          .
          </text>
        </small>
      </footer>
    </div>
  )
}

export default Footer;
