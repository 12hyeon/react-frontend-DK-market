import './list.css';

import Container from '../components/container';
import React from "react";
import { useState } from "react";

function Buylist(props) {
  const items = [
    { id: 1, title: "교재1", price: "1234", img: "/img/bg.jpg" },
    { id: 2, title: "교재2", price: "54321", img: "/" },
    { id: 3, title: "교재3", price: "123456", img: "/" },
    { id: 4, title: "교재4", price: "21314", img: "/" },
    { id: 5, title: "교재5", price: "63463", img: "/" },
    { id: 6, title: "교재6", price: "92033", img: "/" },
  ];
  const [mode, setMode] = useState("HOME");
  const [id, setId] = useState(1);
  return(
    <>
      <h2 className='mypage'>🧡관심 목록🧡</h2>

      <div className='profile'>
        <div style={{marginTop: '100px'}}></div>
        <Container items={items} onChangeMode={(_id) => { setMode("READ"); setId(_id); }}></Container>
      </div>
    </>
  );
}

export default Buylist;