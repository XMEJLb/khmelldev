import React, { useRef } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";

function App() {
  const mainRef = useRef(null);

  const handleArrowClick = () => {
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Intro onArrowClick={handleArrowClick} ref={mainRef} />
      <Main ref={mainRef} />
    </>
  );
}

export default App;
