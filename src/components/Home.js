import React from "react";
import image from "../tv.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="blue-tv"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className=" text-green-100 cursive leading-none lg:leading-snug home-name">
          Unexplainable
        </h1>
      </section>
    </main>
  );
};

export default Home;
