"use client";
import { motion } from "framer-motion";
import projects from "@/lib/projects";
import Card3D from "./Card3D";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CardGenerator() {
  return (
    <motion.div className="xl:grid xl:grid-cols-2 2xl:mx-48 xl:mx-20 flex flex-col">
      {projects.map((project, index) => {
        const ref = useRef(null);
        const inView = useInView(ref, { once: true });

        return (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
            transition={{
              delay: index % 2 == 0 ? 0.5 : 0.75,
              duration: 1,
              type: "spring",
            }}
            key={index}
          >
            <Card3D
              icons={project.icons}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectPhoto={project.projectPhoto}
              projectGh={project.projectGh}
              projectPage={project.projectPage}
              index={index}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
