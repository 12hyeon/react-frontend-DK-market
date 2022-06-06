import "../styles.css";
import React from "react";
import { useState } from "react";

import Create from "../components/create";
import Footer from "../components/footer";
import Header from "../components/header";
import Container from "../components/container";
import Item from "../components/item";
import Card from "../components/card";

function Home() {
  const items = [
    { id: 1, title: "교재111111111", price: "1234", img: "/교재.jpg" },
    { id: 2, title: "교재222", price: "54321", img: "/" },
    { id: 3, title: "교재3", price: "123456", img: "/" }
  ];
  const [mode, setMode] = useState("READ");
  const [id, setId] = useState(1);

  if (mode == "HOME") {
    return (
      <div>
        <Header></Header>
        <div class="board">
          <div id="main">
            <h2>단국대학교 학생을 위한 중고마켓</h2>
          </div>
          <Container
            items={items}
            onChangeMode={(_id) => {
              setMode("READ");
              setId(_id);
            }}
          ></Container>
          <div id="btn-push">
            <a
              href={"/create/" + items.length}
              onClick={(event) => {
                event.preventDefault();
                setMode("CREATE");
              }}
            >
              제품 올리기
            </a>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  } else if (mode == "READ") {
    return (
      <div>
        <Header></Header>
        <Item item={items[id - 1]}></Item>
        <Footer></Footer>
      </div>
    );
  } else if (mode == "CREATE") {
    return (
      <div>
        <Header></Header>
        <Create id={items.length}></Create>
        <Footer></Footer>
      </div>
    );
  }
}
export default Home;
