import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/e2c863021141761474bc")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);
  return [projects, setProjects];
};

export default useProjects;
