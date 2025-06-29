import introVideo from "../assets/intro.mp4";
import loopVideo from "../assets/loop.mp4";
import { useRef, useState } from "react";
import styles from "./Intro.module.css";

export default function Intro({ onArrowClick }) {
  const [showLoop, setShowLoop] = useState(false);
  const introRef = useRef(null);
  const loopRef = useRef(null);

  // Когда первое видео закончилось — показываем loop-видео
  const handleIntroEnd = () => {
    setShowLoop(true);
    // сразу ставим loop-видео на play (на всякий случай)
    loopRef.current && loopRef.current.play();
  };

  return (
    <section className={styles.intro}>
      {/* Вступительное видео — только пока не showLoop */}
      <video
        className={styles.videoBg}
        style={{ opacity: showLoop ? 0 : 1, transition: "opacity 0.6s" }}
        ref={introRef}
        autoPlay
        muted
        playsInline
        src={introVideo}
        onEnded={handleIntroEnd}
      />
      {/* Зацикленное видео — только после окончания intro */}
      <video
        className={styles.videoBg}
        style={{ opacity: showLoop ? 1 : 0, transition: "opacity 0.6s" }}
        ref={loopRef}
        loop
        autoPlay={showLoop} // чтобы не начиналось до окончания первого
        muted
        playsInline
        src={loopVideo}
      />
      <h1 className={styles.title}>Khmelldev</h1>
      <img
        src="arrow2.png"
        className={styles.bigArrow}
        onClick={onArrowClick}
      />
    </section>
  );
}
