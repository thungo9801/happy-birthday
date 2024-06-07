"use client";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";
import useTheme from "../hooks/useTheme";
import { useState, useRef } from "react";
import { Button } from "../components";
import Wish from "./[name]/page";

export default function Home() {
  const { themes, setTheme, currentTheme } = useTheme();
  const [value, setValue] = useState("");
  const Router = useRouter();

  const [isShow, setIsShow] = useState(false);

  const audioRef = useRef<any>();

  const handleInput = (e: any) => {
    e.preventDefault();
    setIsShow(true);
    audioRef.current.play();
  };

  return (
    <main className={styles.container}>
      {isShow ? (
        <Wish />
      ) : (
        <div className={styles.main}>
          <div>
            <form className={styles.form} onSubmit={handleInput}>
              <Button
                className={styles.button}
                type="submit"
                text="Xem lời nhắn từ Như Thạo!"
              />
            </form>
          </div>
          <img
            src="media/hpbd1.jpeg"
            style={{
              width: "100%",
              height: "auto",
              marginTop: 30,
              borderRadius: 30,
            }}
          />
        </div>
      )}
      <audio ref={audioRef} id="player" repeat>
        <source src="media/hbd.mp3" />
      </audio>
    </main>
  );
}
