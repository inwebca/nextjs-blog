import Image from "next/image";

import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/max.png"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Olivier</h1>
      <p>Welcome to my blog</p>
    </section>
  );
}

export default Hero;
