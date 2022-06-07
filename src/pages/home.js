import "../styles.css";
import React from "react";
import { useState } from "react";

import Create from "../components/create";
import Footer from "../components/footer";
import Container from "../components/container";
import Item from "../components/item";
import Card from "../components/card";

function Home() {
  const items = [
    { id: 1, title: "교재1", price: "1234", img: "/교재.jpg" },
    { id: 2, title: "교재222", price: "54321", img: "/" },
    { id: 3, title: "교재3", price: "123456", img: "/" }
  ];
  const [mode, setMode] = useState("HOME");
  const [id, setId] = useState(1);

  if (mode === "HOME") {
    return (
      <div>
        <div className="main-bg">메인페이지임</div>
        <div class="board">
          <Container
            items={items}
            onChangeMode={(_id) => {
              setMode("READ");
              setId(_id);
            }}
          ></Container>
        </div>
      </div>
    );
  } else if (mode === "READ") {
    return (
      <div>
        <Item item={items[id - 1]}></Item>
      </div>
    );
  }
}
export default Home;