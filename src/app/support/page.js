"use client";

import React from "react";
import emailjs from "@emailjs/browser";
import styles from "./support.module.scss";

const Page = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j42pesf",
        "template_3a3h1wk",
        e.target,
        "a7OWNl4A-g13LzcHW"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          alert("Something went wrong!, Please try again");
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.item}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your name"
              name="email"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="10"
              name="message"
              placeholder="Enter your message....."
              required
            ></textarea>
          </div>
          <div className={styles.item}>
            <button type="submit" className="btn">
              {" "}
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
