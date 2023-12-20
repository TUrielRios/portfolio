
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.aboutContent}>
        <h1>Hi, I'm Tiziano</h1>
        <p>
        I am a proficient full-stack web developer from Buenos Aires, Argentina, with expertise in both PERN and MERN stacks. <br /><br /> My skill set includes HTML5, CSS3, JavaScript, TypeScript, React, Node, Sequelize, PostgreSQL, MongoDB, Next.js, Redux Toolkit, Express, and a variety of other cutting-edge technologies.
        My philosophy revolves around creating elegant and high-performance websites that prioritize clean code and user-centric design. I am dedicated to leaving a lasting impression by delivering seamless and memorable online experiences
        </p>
        <p>
          In my free time, I enjoy exploring new technologies, listening to music, and playing football.
        </p>
      </div>
    </section>
  );
}

export default About;
