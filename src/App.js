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
import Mypage from "./pages/mypage.js";
import Soldlist from "./pages/soldlist.js";
import Buylist from "./pages/buylist.js";
import Heartlist from "./pages/heartlist.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/write" element={<Create />} />
        <Route path="/user/mypage" element={<Mypage />} />
        <Route path="/user/mypage/soldlist" element={<Soldlist />} />
        <Route path="/user/mypage/buylist" element={<Buylist />} />
        <Route path="/user/mypage/heartlist" element={<Heartlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
