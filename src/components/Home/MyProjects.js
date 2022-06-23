import React from "react";
import Project from "./Project";
import useProjects from "../../hooks/useProjects";

const MyProjects = () => {
  const [projects, setProjects] = useProjects();
  return (
    <div className="bg-secondary min-w-full py-4">
      <h2 className="text-4xl text-center font-bold pb-8">My Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 w-full px-4">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index}></Project>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
