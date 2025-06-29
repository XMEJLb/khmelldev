import styles from "./Projects.module.css";
import Card from "./Card";

function Projects() {
  const projects = [
    {
      href: "https://t.me/fastconnectlink_bot",
      src: "richard.webp",
      title: "VPN telegram bot",
      stack: "Node.js, Telegraf.js, SQLite",
      info: "Автоматизированная продажа и управление VPN-доступом на основе VLESS и x-ui. Интеграция с базой SQLite, генерация ссылок  для подключения, ЛК, интеграция платежки (ЮKassa).",
    },
    {
      href: "#",
      src: "tonybw.png",
      title: "Cube contest (скоро)",
      stack: "React, React-native, Redux",
      info: "Приложение для проведения контестов по скоростной сборке Кубика-Рубика. \n\nТаблицы, результаты, генерация скрамблов.",
    },
    {
      href: "#",
      src: "rasmusbw.png",
      title: "Sravni-nastolki (скоро)",
      stack: "React, Node.js, SQLite",
      info: "Сайт, позволяющий сравнивать цены настольных игр во всех магазинах и маркетплейсах.",
    },
  ];

  return (
    <div className={styles.projects}>
      <h2 className={styles.projectsTitle}>Мои проекты:</h2>
      <div className={styles.cardsGrid}>
        {projects.map((el) => (
          <Card key={el.title} {...el} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
