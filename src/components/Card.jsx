import styles from "./Card.module.css";

function Card({ href, stack, src, title, info }) {
  const baseUrl = import.meta.env.BASE_URL;
  const imgSrc = src && !src.startsWith("http") ? `${baseUrl}${src}` : src;
  const isLink = Boolean(href);

  const content = (
    <>
      <img src={imgSrc} alt="" loading="lazy" aria-hidden="true" />
      <h3>{title}</h3>
      <h4>{stack}</h4>
      <div>
        {info.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </div>
    </>
  );

  if (!isLink) {
    return (
      <div className={`${styles.card} ${styles.cardDisabled}`} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={styles.card}
    >
      {content}
    </a>
  );
}

export default Card;
