import "../styles.css";
import React from "react";

// 예시
let watch = 2,
  love = 5;
function Card(props) {
  return (
    <div class="card">
      <div class="card-top">
        <img class="card-img-top" src="교재.jpg" alt="제품 이미지"></img>
      </div>
      <div class="card-body">
        <div class="card-b-l">
          <h3 class="card-title">
            {props.item.title}
            <br />
          </h3>
          <h3 id="card-price">{props.item.price}원</h3>
        </div>
        <div class="card-b-r">
          <h4>💖 {watch}</h4>
          <h4>👀 {love}</h4>
        </div>
      </div>
    </div>
  );
}
export default Card;
