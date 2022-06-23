import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleProject = () => {
  const [singleProject, setSingleProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.npoint.io/e2c863021141761474bc/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProject(data));
  }, [id]);
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-3xl text-center text-black font-bold py-3">
        Project Details
      </h2>
      <div className="card max-w-lg max-h-full bg-secondary shadow-xl w-4/5 mx-auto">
        <figure>
          <img src={singleProject.img} alt="profile" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">
            {singleProject.name}
          </h2>
          <p>{singleProject.description}</p>
          <h4 className="text-xl font-bold">Features</h4>
          <div>{singleProject.features}</div>
          <div>
            <div className="card-actions justify-start">
              {singleProject.github?.server ? (
                <>
                  <button className="btn btn-primary">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={singleProject.github?.client}
                    >
                      GitHub Client
                    </a>
                  </button>
                  <button className="btn btn-primary">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href={singleProject.github?.server}
                    >
                      GitHub Server
                    </a>
                  </button>
                </>
              ) : (
                <button className="btn btn-primary">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={singleProject.github?.client}
                  >
                    GitHub
                  </a>
                </button>
              )}
              <button className="btn btn-primary">
                <a rel="noreferrer" target="_blank" href={singleProject.live}>
                  Live Site
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
