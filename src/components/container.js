import "../styles.css";
import React from "react";
import Card from "../components/card";

function Container(props) {
  const list = [];
  for (let i = 0; i < props.items.length; i++) {
    let t = props.items[i];
    list.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
          }}
        >
          <Card item={t}></Card>
        </a>
      </li>
    );
  }
  return (
    <div class="container">
      <h2>최근 등록된 상품</h2>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}
export default Container;
