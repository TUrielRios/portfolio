
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.aboutContent}>
        <h1>Hi, I'm Tiziano</h1>
        <p>
          I'm a web developer specializing in PERN and MERN stack. My skills include HTML5, CSS3, JavaScript, TypeScript, React, Node, Sequelize,PostgreSQL,MongoDB,Next.js,Redux Toolkit,Express and more.
          I believe in creating clean, efficient, and user-friendly websites that leave a lasting impression.
        </p>
        <p>
          Outside of coding, I enjoy exploring new technologies, listening to music, and collaborating on exciting projects.
        </p>
      </div>
    </section>
  );
}

export default About;
