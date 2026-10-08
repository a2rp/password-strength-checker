import { FiGithub, FiShield } from "react-icons/fi";
import styles from "./styles.module.css";

const SiteHeader = () => (
  <header className={styles.header}>
    <div className={styles.bar}>
      <a className={styles.brand} href="#top" aria-label="Password Strength Checker home">
        <span className={styles.brandMark}><FiShield aria-hidden="true" /></span>
        <span>Password <b>Check</b></span>
      </a>
      <nav className={styles.navigation} aria-label="Main navigation">
        <a href="#studio">Checker</a>
        <a href="#guide">How it works</a>
      </nav>
      <a className={styles.repository} href="https://github.com/a2rp/password-strength-checker" target="_blank" rel="noreferrer">
        <FiGithub aria-hidden="true" /> <span>Repository</span>
      </a>
    </div>
  </header>
);

export default SiteHeader;


