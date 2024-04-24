import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Desarrollo Frontend"
        subTitle="Diseño y desarrollo de interfaces de usuario atractivas y receptivas utilizando tecnologías como React, Next.js y Redux Toolkit."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Backend y APIs"
        subTitle="Creación de robustos servidores backend y APIs utilizando Node.js, Express y Sequelize. APIs RESTful para la comunicación entre frontend y backend."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Desarrollo móvil"
        subTitle="Desarrollo nativo con React Native y Flutter para iOS y Android. Diseño y desarrollo de aplicaciones móviles funcionales y visualmente atractivas."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Rendimiento"
        subTitle="Mejora continua del rendimiento de aplicaciones web y móviles para garantizar una experiencia de usuario rápida y eficiente."
      />
    </div>
  );
};

export default MyServices;
