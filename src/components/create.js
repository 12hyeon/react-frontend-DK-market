import "./create.css";
import {useState} from 'react'
import React from "react";

function Create(props) {
  const [title, setTitle] = useState("")

  return (
    <div className="create">
        <form>
        <h2>물건 등록 페이지</h2>
        <div>
            <input id="title" placeholder="제목을 입력해주세요" value={title} className="create__input"/>
            <input id="price" placeholder="가격을 입력해주세요" className="create__input"/>
            <textarea
              id="text"
              placeholder="물건 설명을 입력해주세요." className="create__text"/>
          <input
            type="file"
            id="real-input"
            class="image_inputType_file"
            accept="img/*"
            required
            multiple/>
          <input type="button" value="사진업로드" />
          </div>
          <div><button type="submit" className="create__button">제품 올리기</button>
          </div>
        </form>
    </div>
  );
}
export default Create;

/*

    <div class="box">
      <div class="push">
        <ul>
          <li>
            <h1>물건 등록 페이지</h1>
          </li>
          <li>
            <input id="title" placeholder="제목을 입력해주세요"></input>
          </li>
          <li>
            <input id="price" placeholder="가격을 입력해주세요"></input>
          </li>
          <li>
            <textarea
              id="text"
              placeholder="물건 설명을 입력해주세요."
            ></textarea>
          </li>
          <hr />
          <li>
            <input
              type="file"
              id="real-input"
              class="image_inputType_file"
              accept="img/*"
              required
              multiple
            ></input>
            <button class="browse-btn">사진업로드</button>
          </li>
          <li>
            <button value="제품 올리기"></button>
          </li>
        </ul>
      </div>
    </div>
    */