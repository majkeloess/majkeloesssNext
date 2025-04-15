import projects from "@/lib/projects";
import type { Project } from "@/lib/types";
import animations from "@/lib/motion";
import { MotionUl } from "./motion/MotionUl";
import { MotionLi } from "./motion/MotionLi";

import Link from "next/link";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <MotionLi
      variants={animations.listItem}
      className="flex flex-col md:flex-row gap-4 w-full px-8"
    >
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">{project.projectName}</h2>
          <div className="flex space-x-2">
            <Link
              href={project.projectGh}
              target="_blank"
              className="p-2 hover:text-blue-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <IconBrandGithub size={20} />
            </Link>
            {project.projectPage && (
              <Link
                href={project.projectPage}
                target="_blank"
                className="p-2 hover:text-blue-400 transition-colors"
                aria-label="Live Project"
              >
                <IconExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-1">
          {project.projectDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.icons.map((icon) => (
            <div
              key={icon}
              className="text-xs bg-gray-800 rounded-full px-3 py-1"
            >
              {icon}
            </div>
          ))}
        </div>

        <div className="h-[1px] mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400" />
      </div>
    </MotionLi>
  );
};

export const ProjectList = () => {
  return (
    <MotionUl
      variants={animations.parentList}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8"
    >
      {projects.map((project) => (
        <ProjectItem key={project.projectName} project={project} />
      ))}
    </MotionUl>
  );
};
