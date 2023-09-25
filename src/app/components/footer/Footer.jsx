import React from "react";
import styles from "./footer.module.scss";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image
        src="/footer-bg.svg"
        alt="footer-bg"
        fill
        className="bg"
        style={{ position: "absolute", left: "-30%", top: "-20%" }}
      />
      <div className={styles.container}>
        <h2>Youtube Ad Blocker</h2>
        <p>
          YouTube is a fun website where you can watch and share all kinds of
          videos. While watching videos, ads show up in between them, just like
          on TV. These ads are annoying and disturbing. But now, you can enjoy
          your YouTube experience using the extension. By using it, you can
          watch your favorite content on Youtube without ads.
        </p>

        <Button />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular searches:</span>{" "}
              <a href="https://www.trueadblocker.net/" target="_blank">
                trueadblocker{" "}
              </a>{" "}
              , ad remover, ad killer, youtube ad skipper, ad free
              youtube,adblock for youtube app, blocking youtube,youtube ad
              blocker for android, ad free youtube, adblock for youtube app and
              ad blocker google chrome.
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
