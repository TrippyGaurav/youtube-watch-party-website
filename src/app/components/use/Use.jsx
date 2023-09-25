import React from "react";
import "./use.scss";
import Image from "next/image";

const Use = () => {
  return (
    <div className="use">
      <Image
        src="./use-bg-1.svg"
        alt="youtube-logo"
        width={1817.37}
        height={1045.26}
        className="bg1"
      />
      <Image
        src="./use-bg-2.svg"
        alt="youtube-logo"
        width={1817.37}
        height={1045.26}
        className="bg2"
      />
      <div className="container">
        <div className="top">
          <div className="left">
            <h2>YOU CAN USE THIS EXTENTION IN VARIOUS WAYS</h2>
            <p>
              In this extension, you will get an option that will automatically
              block ads. You can also customize your favorite showtime
              experience on <span> Youtube without ads </span> and enjoy
              uninterrupted entertainment.
            </p>
          </div>
          <div className="right">
            <h2>WATCH YOUR FAVORITE CONTENT WITHOUT PAUSE IN YOUTUBE</h2>
            <p>
              You can enjoy your favorite program, without giving it a pause
              through this extension. The best part is that you can
              <span> block Youtube Ads chrome for free. </span> You can watch your
              favorite content on <span> Youtube without ads. </span>
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <div className="left">
              <h2>HOW DO I BLOCK UNLIMITED ADS ON YOUTUBE?</h2>
              <p>
                It&apos;s a simple and quick process. First, go to your browser and
                install <span>youtube ads blocker.</span> Then add this to your chrome
                extension and start using it. It will fully removes all the
                unwanted advertisements and will allow you to watch your
                favorite shows without any disturbance.
              </p>
            </div>
            <div className="right">
              <Image
                src="./youtube-logo.svg"
                alt="youtube-logo"
                fill
                className="image"
              />
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-bottom">
              <div className="left">
                <h2>HOW DOES IT FUNCTION IN BROWSER?</h2>
                <p>
                  It functions in popular browsers like{" "}
                  <span> Google Chrome and Firefox smoothly</span>, each browser
                  has its own features, performance, and user interface to
                  support which provides additional functionality such as
                  blocking ads and viruses.
                </p>
              </div>
              <div className="right">
                <h2>ENJOY THE FREEDOM WITH <span> AD FREE YOUTUBE </span></h2>
                <p>
                 <span> Ad free Youtube </span>enhances your YouTube experience by just not
                  only blocking ads but also reducing page load times,
                  protecting against the malware, adware, and offering the
                  additional benefits with <span> ad free youtube.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Use;
