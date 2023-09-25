"use client";

import React, { useState } from "react";
import styles from "./accordian.module.scss";
import Image from "next/image";
import Button from "../button/Button";

const questions = [
  {
    id: 1,
    ques: "What are third-party trackers in this best ad blocker chrome?    ",
    ans: "Trackers are like tiny pieces of code that gather details about how you use the internet. They can be added by the website you're currently on or by a completely different website you've never visited before. The ones from other websites are known as third-party trackers. These trackers collect information to create a profile of your interests and show you specific advertisements. For example: after looking at a website that sells coffee makers, you start seeing ads for coffee makers everywhere you go online. That is why this extension protects you from these third party trackers. By installing this tool in your browser will give you privacy on your search habits. Enjoy unstoppable streaming in this extension.    ",
  },
  {
    id: 2,
    ques: "How can i prevent malware in chrome youtube ad blocker?    ",
    ans: "To protect your browser from malware, the only solution is to install the extension now. The adblock for youtube chrome is free of cost. It gives you power to block the unwanted content.    ",
  },
  {
    id: 3,
    ques: "What type of ads can adblocker for youtube block?    ",
    ans: "adblock for youtube firefox blocks all kinds of ads, including banner ads, pop ups and video ads.     ",
  },
  {
    id: 4,
    ques: "Is youtube blocks ads on chrome free? ",
    ans: "Yes, it is Best free adblock for chrome. By simply installing the extension you can block all unwanted ads from your browser.    ",
  },
  {
    id: 5,
    ques: "How to block ads on Youtube?    ",
    ans: "If you don’t know how to block ads on Youtube, we will help you, all you have to do is download the youtube adblocker chrome and install it to your browser. Now, enjoy your favourite showtime  as it will remove ads from Youtube. You can also block ads to enjoy unlimited videos without having annoying ads. ",
  },
  {
    id: 6,
    ques: " Is adblock plus chrome extension  safe to use?    ",
    ans: "Yes this is perfectly safe to use. As by downloading this best free adblocker it will automatically block all the malware and gives the faster loadings. But it is advised to use this best free adblocker with other security measure such as antivirus software. This adblock google chrome is free to use. So, enjoy your favorite shows in adblock google chrome.    ",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
      console.log("Show");
    } else {
      setShowAnswer(questionId);
      console.log("er");
    }
  };

  return (
    <div className={styles.accordian} id="frequently-asked-questions">
      <Image
        src="/accor-bg.svg"
        width={1817.37}
        height={1045.26}
        style={{ position: "absolute", top: "-20%", left: "-10%" }}
        alt="accordian-bg"
      />
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles.img}>
                  <Image src="/add.svg" width={50} height={50} alt="add-logo" />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
