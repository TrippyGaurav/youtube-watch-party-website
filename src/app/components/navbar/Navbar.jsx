"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {};
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <Image
                src="./navbar-logo.svg"
                alt="youtube-ad-blocker-logo"
                width={96}
                height={54}
              />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/">YOUTUBE AD BLOCKER</Link>
          </li>
          <li className={styles.link}>
            <Link href="#about">ABOUT YOUTUBE AD BLOCKER</Link>
          </li>
          <li className={styles.link}>
            <Link href="#frequently-asked-questions">FAQ</Link>
          </li>
          <li className={styles.link}>
            <Link href="/support">Support</Link>
          </li>
        </ul>

        <ul className={styles.links}>
          <li className={styles.link}>
            <button onClick={handleButtonClick}>
              Add to Chrome{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
              </svg>{" "}
            </button>
            {/* <Button /> */}
          </li>
        </ul>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="./navbar-logo.svg"
                alt="youtube-ad-blocker-logo"
                width={96}
                height={54}
              />
            </Link>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/">YOUTUBE AD BLOCKER</Link>
            </li>
            <li className={styles.link}>
              <Link href="#about">ABOUT YOUTUBE AD BLOCKER</Link>
            </li>
            <li className={styles.link}>
              <Link href="#frequently-asked-questions">FAQ</Link>
            </li>
            <li className={styles.link}>
              <Link href="/support">Support</Link>
            </li>
            <li className={styles.link}>
              <Button />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
