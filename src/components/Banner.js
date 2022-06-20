import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h2>Movie title</h2>
        <button>Play</button>
        <button>My list</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est
          sapiente, laborum consequuntur necessitatibus molestiae enim
          voluptatum cumque, voluptas nobis debitis accusantium quo fuga
          expedita magnam inventore perspiciatis. Reprehenderit, rem.
        </p>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
