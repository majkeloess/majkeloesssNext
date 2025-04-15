import { ProjectList } from "@/components/projects";
import { TechnologyList } from "@/components/tech-list";
import type { Metadata } from "next";
import { Navigation } from "@/components/nav";

export const metadata: Metadata = {
  title: "projects",
};

export default function Projects() {
  return (
    <div className="bg-black">
      <Navigation title="projects" />
      <div className="flex flex-col justify-center align-middle gap-12 mx-2 xl:mx-24 mb-24">
        <TechnologyList />
        <ProjectList />
      </div>
    </div>
  );
}
