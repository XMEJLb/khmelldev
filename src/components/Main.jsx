import React from "react";
import Footer from "./Footer";
import styles from "./Main.module.css";
import Projects from "./Projects";

const Main = React.forwardRef(function Main(props, ref) {
  return (
    <section className={styles.main} ref={ref}>
      <Projects />
      <Footer />
    </section>
  );
});

export default Main;
