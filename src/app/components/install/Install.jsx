"use client";

import React from "react";
import "./install.scss";
import Image from "next/image";

const Install = () => {
  const handleButtonClick = () => {
    const redirectURL =
      "https://chrome.google.com/webstore/detail/youtube-adblocker/nihjoknbdeopkanoegafjcbbeaidemke?hl=en&authuser=0";
    window.open(redirectURL, "_blank");
  };
  return (
    <div className="install">
      <div className="container">
        <div className="left">
          <Image src="/firefox.svg" className="image" fill alt="firefox-logo" />
        </div>
        <div className="right">
          <h2>
            HOW TO INSTALL THE <span>AD BLOCKER FIREFOX </span>FEATURE?
          </h2>

          <p>
            These are the simple steps to download the youtube adblocker firefox
            browser extension
          </p>
          <ul>
            <li>Go to your browser</li>
            <li>Search for youtube adblocker</li>
            <li>Download the extension</li>
            <li>Add to chrome</li>
          </ul>
          <p>
            After completing these steps, it will automatically start running on
            your browser.
          </p>
          <button onClick={handleButtonClick}>
            {" "}
            <Image
              src="/ri_firefox-fill.svg"
              width={30}
              height={30}
              alt="firefox-logo"
            />
            Add to Firefox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Install;
