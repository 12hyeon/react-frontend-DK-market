import "./item.css";
import React from "react";
import {useState} from 'react'

// text가 일정한 길이면 아래줄이 되게 해야함
const item = [
  {
    id: 1,
    title: "교재1",
    price: "20000",
    text: "프로그래밍 언어(C언어, Java) 완전 새책이고 사용감 전혀 없습니다.\n각각 10000원에 팔아요! \n직거래 희망하고 보정동에서 거래 가능합니다~",
    img: "/교재.jpg",
    heart: "1",
    watch: "2"
  }
];
function Item(props) {
  const [name, setName] = useState("nickname")
  const [comment, setComment] = useState("")
  return (
    <div>
      <div class="watch">
        <ul>
          <li>
            <h2>상세 제품 페이지</h2>
          </li>
          <li>
            <div class="boxes">
              <img class="box-l" src="/" alt="제품 이미지"></img>
              <div class="box-r">
                <h3 id="title"><b>{item[0].title}</b></h3>
                <h3 id="item-price"><b>{item[0].price}원</b></h3>
                <div class="card-b-r">
                  <h5>
                    👀 {item[0].watch} | 💖 {item[0].heart}
                  </h5>
                </div>
                <input id="watch" type="button" value="관심"></input>
                <input id="call" type="button" value="연락하기"></input>
                <input id="click" type="button" value="구매신청"></input>
              </div>
            </div>
          </li>
          <li>
            <h4>물건 상세 설명</h4>
            <div id="item-text">{item[0].text}</div>
          </li>
          <li>
            <form id="comment">
              <h4 id="count">댓글 0 </h4>
              <input
                id="comment-input" name="answer"
                placeholder="댓글을 입력해 주세요."
                onChange={(event) => setComment(event.target.value)}
              ></input>
              <button id="submit" onClick={()=>alert("name : "+name+"\ncomment : "+comment)}>등록</button>
            </form>
          </li>
          <li>
            <input id="list" type="button" value="목록"></input>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Item;
