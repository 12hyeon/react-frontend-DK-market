import "../styles.css";
import React from "react";

// text가 일정한 길이면 아래줄이 되게 해야함
const item = [
  {
    id: 1,
    title: "교재1111111",
    price: "1234",
    text: "~~~~~~~~~~~~~~~~~~~~~~",
    img: "/교재.jpg",
    heart: "1",
    watch: "2"
  }
];
function Item(props) {
  return (
    <div>
      <div class="watch">
        <ul>
          <li>
            <h1>상세 물건 페이지</h1>
          </li>
          <li>
            <div class="boxes">
              <img class="box-l" src="/" alt="제품 이미지"></img>
              <div class="box-r">
                <h2>{item[0].title}</h2>
                <h2 id="item-price">{item[0].price}원</h2>
                <div class="card-b-r">
                  <h4>
                    watch {item[0].watch} | heart {item[0].heart}
                  </h4>
                </div>
                <input type="button" value="관심"></input>
                <input type="button" value="연락하기"></input>
                <input type="button" value="구매신청"></input>
              </div>
            </div>
          </li>
          <li>
            <h4>물건 상세 설명</h4>
            <div id="item-text">{item[0].text}</div>
          </li>
          <li>
            <div id="comment">
              <h3 id="count">댓글 0 </h3>
              <input
                id="comment-input"
                placeholder="댓글을 입력해 주세요."
              ></input>
              <button id="submit">등록</button>
            </div>
          </li>
          <li>
            <input type="button" value="목록"></input>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Item;
