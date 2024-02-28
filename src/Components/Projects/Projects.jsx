import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

// Importa las imágenes de tus proyectos
import project1Image from '../../Images/estudio.png'; // Reemplaza con la ruta correcta
import project3Image from '../../Images/bellagio.png'; // Reemplaza con la ruta correcta
import project4Image from '../../Images/tsbrowshes.png'; // Reemplaza con la ruta correcta

const projectsData = [
  {
    title_en: 'Architectural Studio Project',
    title_es: 'Proyecto de Estudio de Arquitectura',
    description_en: 'Full stack work project for an architectural studio in Buenos Aires, Argentina. Developed entirely individually. Technologies used: React, Redux, Node, PostgreSQL, Express, JavaScript',
    description_es: 'Proyecto de trabajo full stack para un estudio de arquitectura en Buenos Aires, Argentina. Desarrollado completamente de forma individual. Tecnologías utilizadas: React, Redux, Node, PostgreSQL, Express, JavaScript',
    image: project1Image,
    link: 'https://defranciscoestudio.com', // Ruta a la página del proyecto
  },
  {
    title_en: 'Bellagio Dental Implant Center website',
    title_es: 'Sitio web de Centro de Implantes Dentales Bellagio',
    description_en: 'Laboral project about a dental center client from USA. Developed entirely individually with Wordpress and Elementor.',
    description_es: 'Proyecto laboral sobre un cliente de centro dental de EE. UU. Desarrollado completamente individualmente con Wordpress y Elementor.',
    image: project3Image,
    link: 'https://www.bellagiodental.com/', // Ruta a la página del proyecto
  },
  {
    title_en: 'Esthetics Center website',
    title_es: 'Sitio web de Centro de Estética',
    description_en: 'Laboral project about a Esthetics center. Developed entirely individually with Wordpress and Elementor.',
    description_es: 'Proyecto laboral sobre un centro de estética. Desarrollado completamente individualmente con Wordpress y Elementor.',
    image: project4Image,
    link: 'https://tsbrowshes.com/', // Ruta a la página del proyecto
  },
  // Agrega más proyectos según sea necesario
];

const Projects = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  return (
    <section id="projects" className={styles.projects}>
      <button className={styles.languageButton} onClick={toggleLanguage}>
      {isSpanish ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      <h2>{isSpanish ? 'Mira mi trabajo' : 'See my work'}</h2>


      <div className={styles.projectList}>
        {projectsData.map((project, index) => (
          <Link key={index} to={project.link} className={styles.projectCard}>
            <img src={project.image} alt={isSpanish ? project.title_es : project.title_en} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{isSpanish ? project.title_es : project.title_en}</h3>
              <p>{isSpanish ? project.description_es : project.description_en}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
