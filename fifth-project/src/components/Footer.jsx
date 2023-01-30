import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineArrowUp,
} from "react-icons/ai";

import my from '../assets/react1.jpg';

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={my}
          alt="Founder"
        />

        <h2>Sahil Kumar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/SahilKu02860412" target={"blank"}>
            <AiFillTwitterSquare />
          </a>
          <a href="https://www.linkedin.com/in/sahil-kumar-923694233/?originalSubdomain=in" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Sahilkumar26244" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer