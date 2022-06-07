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
      <h1><b>[ DKU마켓 상품 ]</b></h1>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}
export default Container;
