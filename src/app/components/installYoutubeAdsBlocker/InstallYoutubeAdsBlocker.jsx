import React from "react";
import "./installYoutubeAdsBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const InstallYoutubeAdsBlocker = () => {
  return (
    <div className="installYoutubeAdsBlocker">
      <Image
        src="/install-bg.svg"
        width={1817.37}
        height={1045.26}
        className="bg"
        alt="install-bg"
      />
      <div className="container">
        <h2>
          INSTALL <span> YOUTUBE ADS BLOCKER</span> NOW ON YOUR BROWSER TO ENJOY
          SEAMLESS BROWSING EXPERIENCE
        </h2>

        <div className="content">
          <ul>
            <li>
              Videos load faster with <span>free adblocker for chrome</span>
            </li>
            <li>Stop malware and virus.</li>
            <li>
              Continuous playlists with <span>Youtube adblock chrome</span>
            </li>
            <li>Works like a child lock.</li>
          </ul>
          <ul>
            <li>
              Enjoy unskippable videos with <span>Youtube chrome</span>
            </li>
            <li>
              Protect your data with<span> Best adblocker Youtube chrome</span>
            </li>
            <li> Have a safe browsing</li>
            <li>Watch your favorite movie without disturbance in youtube. </li>
            <li>Remove virus with this extension</li>
          </ul>
        </div>
        <Button/>
      </div>
    </div>
  );
};

export default InstallYoutubeAdsBlocker;
