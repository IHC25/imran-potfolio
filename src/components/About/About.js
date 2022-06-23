import React from "react";
import proPic from "../../assets/imran.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen py-4">
      <h2 className="text-3xl text-center text-black font-bold py-3">
        About Me
      </h2>
      <div className="card lg:card-side bg-secondary shadow-xl w-4/5 mx-auto">
        <figure>
          <img src={proPic} alt="profile" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Imran Hossain Chowdhury</h2>
          <p>
            A front-end web developer, good at HTML, CSS, Bootstrap CSS,
            Tailwind CSS, JS, React.js. I have also basic skills in Mongo DB,
            Node.js , Express.js. Also know the uses of tools like GitHub, VS
            Code, Firebase, Netlify etc. I am very much passionate about
            programming. Also I am able to learn new things and flexible at
            work.
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="btn btn-primary"
            >
              View My Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
