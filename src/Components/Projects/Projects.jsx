// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

// Importa las imágenes de tus proyectos
import project1Image from '../../Images/estudio.png'; // Reemplaza con la ruta correcta
import project2Image from '../../Images/pokemon.png'; // Reemplaza con la ruta correcta

const projectsData = [
    {
      title: 'Architectural Studio Project',
      description: 'Work project for an architectural studio in Buenos Aires, Argentina. Developed entirely individually.',
      image: project1Image,
      link: 'https://defranciscoestudio.netlify.app', // Ruta a la página del proyecto
    },
    {
      title: 'WikiPokemon',
      description: 'Academic project about PokeDex. Developed entirely individually.',
      image: project2Image,
      link: 'https://wikipokemon.vercel.app', // Ruta a la página del proyecto
    },
    // Agrega más proyectos según sea necesario
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className={styles.projects}>
        <h2>See my work</h2>
        <div className={styles.projectList}>
          {projectsData.map((project, index) => (
            <Link key={index} to={project.link} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

export default Projects;
