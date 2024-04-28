import projects from "@/lib/projects";
import Card3D from "./Card3D";
import { MotionDiv } from "./MotionDiv";

export default function CardGenerator() {
  return (
    <MotionDiv className="xl:grid xl:grid-cols-2 2xl:mx-48 xl:mx-20 flex flex-col">
      {projects.map((project, index) => {
        return (
          <MotionDiv
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
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
          </MotionDiv>
        );
      })}
    </MotionDiv>
  );
}
