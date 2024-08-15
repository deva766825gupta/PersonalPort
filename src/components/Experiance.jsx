import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.jpeg";
import react from "../../public/react.png"; // Added React logo import
import mongodb from "../../public/mongo.png"; // Added MongoDB logo import
import nodejs from "../../public/node.png"; // Added Node.js logo import
import express from "../../public/express.png"; // Added Express logo import

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 5,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 6,
      logo: nodejs,
      name: "Node.js",
    },
    {
      id: 7,
      logo: express,
      name: "Express.js",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="mb-4">
          I've a good understanding of these technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full md:w-52 md:h-52 shadow-md p-1 cursor-pointer hover:scale-110 transition-transform duration-300"
              key={id}
            >
              <img src={logo} className="w-36 rounded-full" alt={name} />
              <div className="text-center mt-2 font-medium">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
