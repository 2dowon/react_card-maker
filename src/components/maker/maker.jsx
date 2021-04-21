import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  const createOrupdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrupdateCard}
          updateCard={createOrupdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
