import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerGrid}>
      <div className={styles.footerCol}>
        <h2 className={styles.title}>Связь со мной:</h2>
        <div className={styles.socials}>
          <a
            href="https://t.me/den_khmell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./tglogo.png" alt="Telegram" />
            Telegram
          </a>
          <a
            href="https://hh.ru/resume/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./hhlogo.png" alt="HeadHunter" />
            HeadHunter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
