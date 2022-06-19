import React from "react";
import { send } from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const contactInfo = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    send(
      "service_qviv8rk",
      "template_xxv517o",
      contactInfo,
      "nLeZ_YkzKaTpM7E3K"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className="bg-secondary px-10 py-14 ">
      <div className="text-center pb-14 text-neutral">
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-black">
          Contact Me
        </p>
        <h1 className="text-4xl">Stay connected</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 justify-items-center gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input w-full max-w-md border-neutral"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input w-full max-w-md border-neutral"
            required
          />
          <input
            className="input w-full input-lg max-w-md border-neutral"
            placeholder="Your message"
            type="text"
            name="message"
            required
          ></input>
          {/* btn btn-primary text-white */}
          <input
            type="submit"
            className="btn btn-primary text-white"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
