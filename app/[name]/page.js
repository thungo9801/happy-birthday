"use client";
import useTheme from "@/hooks/useTheme";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import styles from "./Name.module.css";
// import messages from '@/utils/birthdayWishes'
import { Button, CopyLinkButton } from "@/components";
import JSConfetti from "js-confetti";
import * as emoji from "node-emoji";

const Wish = () => {
  const FileSaver = require("file-saver");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const name = pathname.substring(1);
  const colorNumber = searchParams.get("color");

  const color = colorNumber ? colorNumber : 0;
  const [downloading, setDownloading] = useState(false);
  const [downloadedOnce, setDownloadedOnce] = useState(false);

  const router = useRouter();

  const [timer, setTimer] = useState(2);
  const { setTheme } = useTheme();
  const emoji = require("emoji");

  var v_time = 0;
  var v_emoji = emoji.unifiedToHTML("😎");
  console.log(v_emoji);
  useEffect(() => {
    setTheme(color);
    const jsConfetti = new JSConfetti();
    if (downloading === false) {
      const id = setInterval(() => {
        setTimer(() => {
          v_time = RandomNumber(1, 12);
          //console.log('time', v_time)

          if (v_time == 1) {
            jsConfetti
              .addConfetti({
                emojis: ["😀", "🤣", "😍", "😛", "😘", "😁"],

                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 2) {
            jsConfetti
              .addConfetti({
                emojis: ["🧡", "❤️", "💙", "💚", "💛", "🤎"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 3) {
            jsConfetti
              .addConfetti({
                emojis: ["🤏", "👆", "👍", "🤚", "👌", "👊"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 4) {
            jsConfetti
              .addConfetti({
                emojis: ["🌸", "🏵️", "🌹", "🥀", "🌷", "🌼"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 5) {
            jsConfetti
              .addConfetti({
                emojis: ["🦄", "🐷", "🐏", "🐇", "🐼", "🐤"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 6) {
            jsConfetti
              .addConfetti({
                emojis: ["🛰️", "🚠", "🚀", "🛸", "⌛", "✈️"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 7) {
            jsConfetti
              .addConfetti({
                emojis: [],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 8) {
            jsConfetti
              .addConfetti({
                emojis: ["🎖️", "🏆", "🏅", "🥇", "🥈", "🥉"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 9) {
            jsConfetti
              .addConfetti({
                emojis: ["⚽", "⚾", "🥎", "🏀", "🏐", "🏈"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 10) {
            jsConfetti
              .addConfetti({
                emojis: ["💍", "📿", "💄", "💎", "👑", "🔔"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 11) {
            jsConfetti
              .addConfetti({
                emojis: ["📖", "📘", "📒", "📃", "💰", "📕"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          } else if (v_time == 12) {
            jsConfetti
              .addConfetti({
                emojis: ["🌈", "🌧️", "🌞", "🌀", "🌟", "⛄"],
                emojiSize: 15,
                confettiRadius: 6,
                confettiNumber: 70,
              })
              .then(() => jsConfetti.clearCanvas());
          }
        });
      }, 5000);

      return () => clearInterval(id);
    }
  }, [color, downloading]);

  useEffect(() => {
    if (downloading === true && downloadedOnce === false) {
      downloadImage();
    }
  }, [downloading, downloadedOnce]);

  const RandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const downloadImage = () => {
    if (downloadedOnce === true) {
      return;
    }

    const node = document.getElementById("image");

    if (node) {
      setDownloadedOnce(true);

      htmlToImage.toPng(node).then((blob) => {
        FileSaver.saveAs(blob, "birthday-wish.png");
        setDownloading(false);
      });
    }
  };

  const title = (name) => {
    const wish = "Happy Birthday Ngơi xinh gái!";
    const base_letter = [];
    const name_letter = [];

    for (let i = 0; i < wish.length; i++) {
      if (i < 15) {
        const letter = wish.charAt(i);
        base_letter.push(
          <span key={i} style={{ "--order": i + 1 }}>
            {letter}
          </span>
        );
      } else {
        const letter = wish.charAt(i);
        name_letter.push(
          <span key={i} style={{ "--order": i + 1 }}>
            {letter}
          </span>
        );
      }
    }

    return (
      <>
        {downloading ? (
          <h1
            className={styles.titleImg}
            style={{ "--wishLength": wish.length }}
          >
            <div>{base_letter.map((letter) => letter)}</div>
            <div>{name_letter.map((letter) => letter)}</div>
          </h1>
        ) : (
          <h1 className={styles.title} style={{ "--wishLength": wish.length }}>
            <div>{base_letter.map((letter) => letter)}</div>
            <div>{name_letter.map((letter) => letter)}</div>
          </h1>
        )}
      </>
    );
  };

  // if (downloading) {
  //     return (
  //         <div className={styles.containerImg} id='image' onClick={downloadImage}>
  //             {downloadImage()}
  //             <main className={styles.image}>
  //                 <div>
  //                     <div className={styles.main}>
  //                         {title(name)}
  //                     </div>

  //                     <div style={{ height: 40 }} />

  //                     <p className={styles.descImg}>
  //                         {messages[RandomNumber(0, messages.length)].value}
  //                     </p>
  //                 </div>
  //             </main>
  //         </div>
  //     )
  // }

  return (
    <div className={styles.container}>
      <canvas className={styles.canvas} id="canvas"></canvas>

      <main className={styles.animate}>
        <div>
          <div className={styles.main}>{title(name)}</div>
          {/* <p className={styles.desc}>
              {messages[RandomNumber(0, messages.length)].value}
            </p> */}
        </div>
        <img
          src="/media/hppd2.png"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 30,
            marginTop: 10,
          }}
        />
      </main>
    </div>
  );
};

export default Wish;
