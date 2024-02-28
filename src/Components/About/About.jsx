import React, { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <section id="about" className={styles.aboutMe}>
              <button className={styles.languageButton} onClick={toggleLanguage}>
          {isSpanish ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      <div className={styles.aboutContent}>
        <h1>Hi, I'm Tiziano</h1>
        {isSpanish ? (
          <p>
            Soy un desarrollador web full-stack competente de Buenos Aires, Argentina, con experiencia en pilas PERN y MERN. <br /> <br />

            Mi conjunto de habilidades incluye HTML5, CSS3, JavaScript, TypeScript, React, Node, Sequelize, PostgreSQL, MongoDB, Next.js, Redux Toolkit, Express y una variedad de otras tecnologías de vanguardia. Mi filosofía gira en torno a crear sitios web elegantes y de alto rendimiento que priorizan el código limpio y el diseño centrado en el usuario. Estoy dedicado a dejar una impresión duradera entregando experiencias en línea fluidas y memorables. <br /> <br />

            Tengo una sólida experiencia en el desarrollo de WordPress, competente en el desarrollo de temas personalizados, personalización de plugins y optimización de sitios. Además, tengo experiencia en utilizar Elementor para crear sitios web de WordPress visualmente impresionantes y altamente personalizables. <br /> <br />

            Durante mi pasantía en el estudio de arquitectura de Francisco, contribuí a un proyecto importante, obteniendo experiencia práctica en desarrollo web en un contexto arquitectónico.

            Actualmente, trabajo en una agencia de marketing donde me especializo en crear sitios web a medida para empresas y negocios. En este rol, colaboro estrechamente con los clientes para comprender sus requisitos únicos y ofrecer soluciones personalizadas que superen las expectativas. <br /><br />

            En mi tiempo libre, disfruto explorar nuevas tecnologías, escuchar música y jugar al fútbol.
          </p>
        ) : (
          <p>
            I am a proficient full-stack web developer from Buenos Aires, Argentina, with expertise in both PERN and MERN stacks. <br /> <br />

            My skill set includes HTML5, CSS3, JavaScript, TypeScript, React, Node, Sequelize, PostgreSQL, MongoDB, Next.js, Redux Toolkit, Express, and a variety of other cutting-edge technologies. My philosophy revolves around creating elegant and high-performance websites that prioritize clean code and user-centric design. I am dedicated to leaving a lasting impression by delivering seamless and memorable online experiences. <br /> <br />

            I have a strong background in WordPress development, proficient in custom theme development, plugin customization, and site optimization. Additionally, I am experienced in utilizing Elementor to create visually stunning and highly customizable WordPress websites. <br /> <br />

            During my internship at Francisco's architecture studio, I contributed to a significant project, gaining hands-on experience in web development within an architectural context.

            Currently, I am employed at a marketing agency where I specialize in crafting bespoke websites for businesses and enterprises. In this role, I collaborate closely with clients to understand their unique requirements and deliver tailored solutions that exceed expectations. <br /><br />

            In my free time, I enjoy exploring new technologies, listening to music, and playing football.
          </p>
        )}

      </div>
    </section>
  );
}

export default About;

