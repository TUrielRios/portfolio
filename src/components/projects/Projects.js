import React from "react";
import {
  workImgOne,
  workImgFive,

  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Mis" subTitle="Proyectos" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">

        <a href="https://defranciscoestudio.com/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Aplicación web"
            category="JavaScript, PostgreSQL, Node, Express, React, Redux"
            image={workImgOne}
          />
        </a>
        
        <a href="https://www.dev2.websites3-dharmamarketingagency.com/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="Página web"
            category="Wordpress, HTML, CSS, PHP"
            image={workImgFive}
          />
          </a>
        </div>
        <div className="px-6">


          <ProjectsCard
            title="Aplicación móvil"
            category="React Native, Expo"
            image={workImgEight}
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
