/* eslint-disable */


import "./App.css";
// import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import styled from "styled-components";
import Header from "./components/Header.js";
import Footer from "./components/footer.js";
import Create from "./components/create.js";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Home from "./pages/home.js";
// import Mypage from './pages/Mypage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/write" element={<Create />} />
        <Route path="/user/mypage" element={<div>마이페이지 페이지임</div>} />
=======
        <Route path='/' element={<div className="main-bg">메인페이지임</div>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/user/write' element={<div>글쓰기 페이지임</div>}/>
        <Route path='/user/mypage' element={<div>마이페이지 페이지임</div>}/>
>>>>>>> 3360c515cbec5c5ecfff7c2bcd5fdb143746907c
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
