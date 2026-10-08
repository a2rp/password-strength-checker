import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiRefreshCw, FiShield } from "react-icons/fi";
import { assessPassword } from "../../utils/passwordStrength.js";
import styles from "./styles.module.css";

const levelClasses = [styles.level0, styles.level1, styles.level2, styles.level3, styles.level4];

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(false);
  const result = assessPassword(password);

  const clearPassword = () => {
    setPassword("");
    setRevealed(false);
  };

  return (
    <section className={styles.checker} id="studio" aria-labelledby="checker-title">
      <div className={styles.toolIntro}>
        <p className={styles.sectionLabel}>PASSWORD / FIELD TEST</p>
        <h2 id="checker-title">Check the strength.</h2>
        <p>Enter a password to see a quick estimate and a few practical ways to improve it.</p>
      </div>
      <div className={styles.workspace}>
        <div className={styles.inputPanel}>
          <div className={styles.panelTop}><span>PRIVATE INPUT</span><span><FiLock aria-hidden="true" /> ONLY ON THIS DEVICE</span></div>
          <label htmlFor="password-field">Your password</label>
          <div className={styles.inputWrap}>
            <input id="password-field" type={revealed ? "text" : "password"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Type to check strength" autoComplete="off" autoCapitalize="off" spellCheck="false" aria-describedby="privacy-note" />
            <button className={styles.iconButton} type="button" onClick={() => setRevealed((current) => !current)} aria-label={revealed ? "Hide password" : "Show password"}>
              {revealed ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
            </button>
          </div>
          <div className={styles.inputMeta}><span>{result.length} characters</span>{password && <button type="button" onClick={clearPassword}><FiRefreshCw aria-hidden="true" /> Clear</button>}</div>
          <p className={styles.privacyNote} id="privacy-note"><FiShield aria-hidden="true" /> Nothing is uploaded, saved, or logged by this page.</p>
        </div>
        <div className={styles.resultPanel} aria-live="polite">
          <div className={styles.resultTop}><span>STRENGTH ESTIMATE</span><span className={styles.statusDot} /></div>
          <div className={styles.scoreRow}><strong className={levelClasses[result.score]}>{result.label}</strong><span>{result.checked ? `${result.score + 1} / 5` : "-"}</span></div>
          <div className={styles.meter} role="progressbar" aria-label="Password strength estimate" aria-valuemin="0" aria-valuemax="4" aria-valuenow={result.score}>
            {Array.from({ length: 5 }, (_, index) => <span className={index <= result.score && result.checked ? levelClasses[result.score] : ""} key={index} />)}
          </div>
          <p className={styles.suggestionsTitle}>{password ? "WAYS TO IMPROVE" : "A GOOD START"}</p>
          <ul className={styles.suggestions}>{result.suggestions.map((suggestion) => <li key={suggestion}>{suggestion}</li>)}</ul>
          <p className={styles.disclaimer}>A lightweight heuristic, not a breach check or a guarantee of account security.</p>
        </div>
      </div>
      <div className={styles.toolFoot}><span>LOCAL CHECK · NO PASSWORD STORAGE</span><a href="#guide">How this estimate works <span aria-hidden="true">↘</span></a></div>
    </section>
  );
};

export default PasswordChecker;
