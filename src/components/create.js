import "./create.css";
import {useState} from 'react'
import React from "react";

function Create(props) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("0")
  const [text, setText] = useState("")
  const [file, setFile] = useState("")
    
  return (
    <div className="create">
        <form>
          <h2>물건 등록 페이지</h2>
          <div>
            <input id="title" placeholder="제목을 입력해주세요" className="create__input" onChange={(event) => setTitle(event.target.value)}/>
            <input id="price" placeholder="가격을 입력해주세요" className="create__input"  onChange={(event) => setPrice(event.target.value)}/>
            <textarea
              id="text"  onChange={(event) => setText(event.target.value)}
              placeholder="물건 설명을 입력해주세요." className="create__text"/>
            <input
              type="file"
              id="real-input"
              class="image_inputType_file"
              onChange={(event) => setFile(event.target.value)}
              accept="img/*"
              multiple/>
          </div>
          <div><button type="submit" className="create__button"  onClick={()=>alert("title : "+title+"\nprice : "+price+"\ntext : "+text+"\nfile path : "+file)}>제품 올리기</button>
          </div>
        </form>
    </div>
  );
}
export default Create;
