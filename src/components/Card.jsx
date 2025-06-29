import styles from "./Card.module.css";

function Card({ href, stack, src, title, info }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={styles.card}
    >
      <img src={src} alt="" />
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
    </a>
  );
}

export default Card;
