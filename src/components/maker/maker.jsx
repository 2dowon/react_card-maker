import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "dowon",
      company: "soma",
      title: "Front-end Engineer",
      email: "dwon424@gmail.com",
      message: "go for it",
      theme: "dark",
      fileName: "dowon",
      fileURL: null,
    },
    {
      id: "2",
      name: "dowon",
      company: "soma",
      title: "Front-end Engineer",
      email: "dwon424@gmail.com",
      message: "go for it",
      theme: "light",
      fileName: "dowon",
      fileURL: "",
    },
    {
      id: "3",
      name: "dowon",
      company: "soma",
      title: "Front-end Engineer",
      email: "dwon424@gmail.com",
      message: "go for it",
      theme: "colorful",
      fileName: "dowon",
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
