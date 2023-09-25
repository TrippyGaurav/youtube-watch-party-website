import React from "react";
import "./header.scss";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="left">
            <h1>SKIP ANNOYING ADS WITH BLOCK YOUTUBE ADS</h1>
            <h2> It is one of the popular YouTube ad blocker Chrome.</h2>
            <p>
              YouTube is a fun website where you can watch and share all kinds
              of videos. While watching videos, ads show up in between them,
              just like on TV. These ads are annoying and disturbing. But now,
              you can enjoy your YouTube experience using the extension. By
              using it, you can watch your favorite content on{" "}
              <span>Youtube without ads.</span>
            </p>
            <Button/>
          </div>
          <div className="right">
            <Image
              src="./header-main.svg"
              alt="header-main"
              fill
              className="image"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
