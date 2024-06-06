"use client";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
import { Button } from "../components";

export default function Home() {
  const { themes, setTheme, currentTheme } = useTheme();
  const [value, setValue] = useState("");
  const Router = useRouter();

  const handleInput = (e: any) => {
    e.preventDefault();
    const id = currentTheme.id;

    const value = "ngoi";
    if (id == 0) Router.push(value);
    else Router.push(`/${value}?color=${id}`);
  };

  return (
    <main className={styles.container}>
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

      {/* <div className={styles.themeWrapper}>
        <form
          className={styles.theme}
          id="theme-input"
          onChange={(e) => setTheme((e.target as HTMLElement).id)}
        >
          {themes.map((item) => (
            <input
              key={item.id.toString()}
              type="radio"
              className={item.name}
              id={item.id.toString()}
              name="theme"
              value={item.color}
              defaultChecked={currentTheme.id == item.id}
            />
          ))}
        </form>
      </div> */}
    </main>
  );
}
