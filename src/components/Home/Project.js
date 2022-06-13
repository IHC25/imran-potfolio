import React from "react";

const Project = ({ project }) => {
  const { name, img, shortInfo } = project;
  console.log(name);
  return (
    <div class="card w-96 px-8">
      <figure>
        <img className="rounded" src={img} alt="" />
      </figure>
      <div class="card-body bg-accent">
        <h2 class="card-title">{name}</h2>
        <p>{shortInfo}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
