import styles from "./Footer.module.css";

function Footer() {
  const baseUrl = import.meta.env.BASE_URL;
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
            <img src={`${baseUrl}tglogo.png`} alt="Telegram" />
            Telegram
          </a>
          <a
            href="https://hh.ru/resume/049a87a7ff0820f72c0039ed1f6b484c466941"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${baseUrl}hhlogo.png`} alt="HeadHunter" />
            HeadHunter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

