import React from "react";
import "./howToAdd.scss";
import Image from "next/image";
import Button from "../button/Button";

const data = [
  {
    id: 1,
    icon: "/icon-park-outline_ad.svg",
    heading: "SAFE MONEY ON YOUR MOBILE DATA EXPENSES BY USING THE EXTENSION",
    desc: "When you use your mobile data to watch YouTube, it consumes a large amount of data because there are numerous advertisements that appear during the videos. But with the adblocker for Google Chrome, you won't waste any data on advertising. You can enjoy watching your favorite show without any interruptions by using this extension.",
  },
  {
    id: 2,
    icon: "/jam_task-list.svg",
    heading:
      "SPEED UP YOUR BROWSING EXPERIENCE BY USING THE AD BLOCKER CHROME EXTENTION",
    desc: "Ads and pop-ups not only create disturbance but also slow down your internet connection. If you want to maintain top speed and enjoy faster loading of your favorite websites without unwanted ads, use this extension. As this prevents all the harmful adverts from your browser.",
  },
  {
    id: 3,
    icon: "/ant-design_safety-outlined.svg",
    heading: "BLOCK DANGEROUS WEBSITES",
    desc: "Don't worry about phishing, malicious websites, and malware anymore. With this browser extension, you won&#39;t accidentally visit dangerous websites as it instantly blocks your access and prevents any potential attacks.",
  },
];

const HowToAdd = () => {
  return (
    <div className="how-to-add">
      <Image
        src="/howToadd-bg.svg"
        width={2091.29}
        height={1195.05}
        className="bg"
        alt="how-to-add-bg"
      />
      <div className="top-container">
        <div className="top">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <Image
                src={item.icon}
                alt={item.heading}
                width={67}
                height={67}
              />
              <h3>{item.heading}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="middle">
          <h2>
            IT&apos;S A FREE EXTENTION TO <span>BLOCK YOUTUBE ADS FIREFOX</span>{" "}
            AND CHROME
          </h2>
          <p>
            When you visit a YouTube page on Firefox or in Chrome, the{" "}
            <span> youtube ads blocker firefox </span>scans the webpage and
            identifies the elements associated with ads. It then prevents them
            from loading or displaying on the page. This effectively removes or
            hides the ads from your view, and lets you enjoy the video content
            without interruptions.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-container-top">
          <div className="top">
            <div className="left">
              <h3>HOW TO TAKE CONTROL ON YOUTUBE BROWSER EXTENSION</h3>
              <p>
                There are various way to take control on your youtube ad blocker
                chrome extension
              </p>
            </div>
            <div className="right">
              <Button/>
            </div>
          </div>
        </div>

        <div className="bottom-container-bottom">
          <div className="left">
            <Image src="/firefox.svg" alt="firefox" fill className="img" />
            <h2>FOR YOUTUBE ADS FIREFOX</h2>
            <p>
              Install the extension from the<span> youtube ads firefox </span>
              Add-ons store.
            </p>
            <p>
              Adjust the settings by going to the browser&#39;s menu, selecting
              &quot;Add- ons,&quot; and customizing the{" "}
              <span>adblolck for youtube firefox</span> options.
            </p>
            <p>By following these steps, you can ads on your browser.</p>
          </div>
          <div className="right">
            <Image src="/chrome.svg" alt="firefox" fill className="img" />
            <h2>FOR YOUTUBE ADS CHROME</h2>
            <p>
              Install the extension from the <span>free ad blocker chrome</span>{" "}
              Web Store.
            </p>
            <p>
              Right-click on the extension icon in the toolbar and choose
              &quot;Options&quot; or &quot;Settings&quot; to configure its
              settings.
            </p>
            <p>
              By following these steps, you can have control over the extension
              on both Firefox and Chrome browsers and watch{" "}
              <span>ad free youtube</span>
              movies and series.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAdd;
