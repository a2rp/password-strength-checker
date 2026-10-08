import { FiArrowDown, FiLock, FiShield, FiZap } from "react-icons/fi";
import BackToTop from "./components/backToTop/index.jsx";
import PasswordChecker from "./components/passwordChecker/index.jsx";
import SiteFooter from "./components/siteFooter/index.jsx";
import SiteHeader from "./components/siteHeader/index.jsx";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.page} id="top">
    <SiteHeader />
    <main>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}><span /> A private first look at password strength</p>
          <h1 id="hero-title">A little harder<br />to <em>guess.</em></h1>
          <p className={styles.intro}>Get a quick, practical strength estimate without sending your password anywhere. Your keystrokes stay in this tab.</p>
          <div className={styles.heroActions}><a className={styles.primaryLink} href="#studio">Check a password <FiArrowDown aria-hidden="true" /></a><span><FiLock aria-hidden="true" /> Local check · Nothing saved</span></div>
          <div className={styles.heroLine}><span className={styles.lineNumber}>FIELD NOTE 001</span><span className={styles.lineRule} /><span>LONGER IS A GOOD PLACE TO START</span></div>
        </div>
        <div className={styles.heroCard} aria-label="Illustration showing privacy and a strength indicator" role="img">
          <div className={styles.cardHeader}><span>STRENGTH / SIGNAL</span><span>01 — 05</span></div>
          <div className={styles.emblem}><div className={`${styles.orbit} ${styles.orbitOuter}`} /><div className={`${styles.orbit} ${styles.orbitInner}`} /><div className={styles.shield}><FiShield aria-hidden="true" /><FiZap aria-hidden="true" /></div></div>
          <div className={styles.cardMeter}><span /><span /><span /><span /><span /></div>
          <div className={styles.cardFooter}><div><span>YOUR PASSWORD</span><b>NEVER LEAVES THIS TAB</b></div><FiLock aria-hidden="true" /></div>
          <span className={styles.cardStamp}>PRIVATE BY DESIGN</span>
        </div>
        <a className={styles.scrollCue} href="#studio"><span>OPEN THE CHECKER</span><FiArrowDown aria-hidden="true" /></a>
      </section>
      <PasswordChecker />
      <section className={styles.guide} id="guide" aria-labelledby="guide-title">
        <div className={styles.guideIntro}><p className={styles.kicker}>HOW THE ESTIMATE WORKS</p><h2 id="guide-title">Helpful feedback, with honest limits.</h2><p>Length and variety can make guessing harder. This quick estimate looks for a few familiar patterns so you can improve a password before you use it.</p></div>
        <div className={styles.guideGrid}>
          <article><span>01 / LENGTH</span><h3>Give it more room</h3><p>Longer passwords and passphrases tend to offer more combinations to guess. Aim for 12 or more characters.</p></article>
          <article><span>02 / PATTERNS</span><h3>Skip the obvious</h3><p>Common password words, keyboard walks, and long runs of the same character lower this estimate.</p></article>
          <article><span>03 / PRIVACY</span><h3>Keep it unique</h3><p>Use a distinct password for every account and store it in a trusted password manager.</p></article>
        </div>
        <p className={styles.limitNote}><FiShield aria-hidden="true" /> This is a lightweight browser heuristic. It does not check breached-password lists and cannot guarantee account security.</p>
        <div className={styles.guideFoot}><span>NO NETWORK REQUESTS FOR YOUR PASSWORD</span><a href="#studio">Return to the checker <span aria-hidden="true">↗</span></a></div>
      </section>
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
);

export default App;
