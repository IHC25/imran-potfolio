import React from "react";

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-secondary">
      <div class="hero-content text-center">
        <div class="max-w-full">
          <h1 className="text-5xl font-serif">
            Hello, I'm{" "}
            <span className="text-primary">Imran Hossain Chowdhury</span>!
          </h1>
          <h2 class="text-4xl font-bold">Learner - Coder - Web Developer</h2>
          <p class="py-6 text-dark">
            I'm a{" "}
            <span className="text-primary font-semibold">
              front-end web developer
            </span>{" "}
            from Sylhet, Bangladesh.
          </p>
          <button class="btn btn-primary">View My Work</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
