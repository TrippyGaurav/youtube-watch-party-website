import React from "react";
import "./aboutYoutubeAdBlocker.scss";
import Image from "next/image";
import Button from "../button/Button";

const AboutYoutubeAdBlocker = () => {
  return (
    <div className="aboutYoutubeAdBlocker" id="about">
      <Image
        src="/howToadd-bg.svg"
        width={2091.29}
        height={1195.05}
        className="bg"
        alt="how-to-add"
      />
      <div className="container">
        <div className="content">
          <div className="left">
            <h2>ABOUT YOUTUBE ADBLOCKER</h2>
            <p>
              Are you tired of seeing ads while watching videos on YouTube? Say
              goodbye to those interruptions with our special tool called
              <span>Youtube Ad Blocker</span>. It{" "}
              <span> remove ads from youtube </span> so that you can have a
              better experience and enjoy your favorite content without ads. So,
              no more ads at the beginning, in the middle, or as banners on the
              screen. This <span>adblock free </span>is easy to use. Just
              install it and turn it on, and you won&#39;t see any more ads
              while watching YouTube videos. This <span>adblock 360 </span>is
              such a helpful extension to block ads and enjoy no ads youtube by{" "}
              <span>blocking youtube</span> unwanted ads. Thus, this{" "}
              <span>ad remover</span> or <span>ad killer</span> is the best way
              to keep you focused on your favorite content.
            </p>
            <p>
              Youtube adblocker blocks all annoying ads on youtube, hulu,
              spotify and twitch. But if you want a separate adblocker of these
              extension then we have true adblocker, hulu adblocker, spotify
              adblocker and twitch adblocker.
            </p>
          </div>
          <div className="right">
            <Image src="/about.svg" fill alt="about-logo" className="image" />
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default AboutYoutubeAdBlocker;
