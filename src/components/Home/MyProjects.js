import React, { useEffect, useState } from "react";
import Project from "./Project";
const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("myProjects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);
  return (
    <div className="bg-secondary min-w-full">
      <h2 className="text-4xl text-center font-bold pb-8">My Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 w-full px-4">
        {projects.map((project) => (
          <Project project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
