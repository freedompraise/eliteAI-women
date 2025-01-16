import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  const link = "https://tinyurl.com/AiWomenRising";

  const handleRedirect = () => {
    window.open(link, "_blank");
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          Empower Yourself in the AI Industry and Apply Today!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join a growing community of women pioneering AI careers. Do not miss
          out!
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button onClick={handleRedirect} />{" "}
      </div>
    </section>
  );
};

export default CTA;
