import React, { useState } from 'react';

function Login(props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>로그인</h2>

      <div className="form">
        <p><input className="login" type="text" name="username" placeholder="아이디" onChange={event => {
          setId(event.target.value);
        }} /></p>
        <p><input className="login" type="password" name="pwd" placeholder="비밀번호" onChange={event => {
          setPassword(event.target.value);
        }} /></p>

        <p><input className="btn" type="submit" value="로그인" onClick={() => {
          const userData = {
            userId: id,
            userPassword: password,
          };
          // fetch("/login", {
          fetch("http://localhost:3000/login/login", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((res) => res.json())
            .then((json) => {
              if (json.isLogin === "True") {
                props.setMode("WELCOME");
              } else {
                alert(json.isLogin);
                }
                });
                }} /></p>
                </div>  <p>계정이 없으신가요? <button onClick={() => {
    props.setMode("SIGNIN");
  }}>회원가입</button></p>
</>);
}

export default Login;