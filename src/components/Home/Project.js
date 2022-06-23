import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project, index }) => {
  const { name, img, shortInfo } = project;
  const navigate = useNavigate();
  const handleShowDetails = (index) => {
    navigate(`/projects/${index}`);
  };
  return (
    <div className="card w-full px-8 py-2">
      <figure>
        <img className="rounded" src={img} alt="" />
      </figure>
      <div className="card-body bg-accent">
        <h2 className="card-title">{name}</h2>
        <p>{shortInfo}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleShowDetails(index)}
            className="btn btn-primary"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
