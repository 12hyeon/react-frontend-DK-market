import axios from 'axios';
import React, {useEffect,useState} from 'react'
import { useDispatch } from "react-redux";
import "./LoginRegister.css"

const Signup = () => {
  // const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [userId, setId] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  //typing 하면 onChange 를 발생시켜 state를 바꿔주어 value를 바꾼다.
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onIdHandler = (event) => {
      setId(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onPhoneHandler = (event) => {
      setPhone(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onSubmit = () => {
    // page refresh를 막아준다
    // event.preventDefault()

    alert(`제출되었습니다. : 
      ${name},
      ${userId}, 
      ${email},
      ${phone}, 
      ${password}`
    );

    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
    }

  const data = {
    "name": `${name}`, 
    "userId": `${userId}`, 
    "email": `${email}`, 
    "phone": `${phone}`, 
    "password": `${password}`,
  };
  console.log(data);
  axios({
      url: '/user/signup',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      data: data,
  }).then((res) => {
      console.log(res);
  }).catch((err) => {
      console.log(err);
  });
  }

  return (
    <div className="loginregister">

        <h2>✨회원가입을 해주세요.</h2>
        <input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className="loginregister__input"/>
        <input name="userId" type="text" placeholder="아이디" value={userId} onChange={onIdHandler} className="loginregister__input"/>
        <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className="loginregister__input"/>
        <input name="phone" type="text" placeholder="전화번호" value={phone} onChange={onPhoneHandler} className="loginregister__input"/>
        <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className="loginregister__input"/>
        <input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className="loginregister__input"/>
        <button onClick={onSubmit} className="loginregister__button">계정 생성하기</button>

    </div>
  );
}

export default Signup;
