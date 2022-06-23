import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="hero-content text-center">
        <div className="max-w-full">
          <h1 className="text-5xl font-serif">
            Hello, I'm{" "}
            <span className="text-primary">Imran Hossain Chowdhury</span>!
          </h1>
          <h2 className="text-4xl font-bold">
            Learner - Coder - Web Developer
          </h2>
          <p className="py-6 text-dark">
            I'm a{" "}
            <span className="text-primary font-semibold">
              front-end web developer
            </span>{" "}
            from Sylhet, Bangladesh.
          </p>
          <button
            onClick={() => {
              navigate("/projects");
            }}
            className="btn btn-primary"
          >
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
