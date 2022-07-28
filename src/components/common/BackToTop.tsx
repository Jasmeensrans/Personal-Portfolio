import { useEffect, useState } from "react";
import {IconContext} from 'react-icons'
import { AiOutlineArrowUp } from "react-icons/ai";
export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <IconContext.Provider value={{ color: "BB4AFF", size: "2em" }}>
          <AiOutlineArrowUp />
          </IconContext.Provider>
          
        </button>
      )}
    </>
  );
}
