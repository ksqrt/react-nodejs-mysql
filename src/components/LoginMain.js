// import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Login from '../components/Login/Login';
import Signin from '../components/Login/Signin';

function LoginMain() {
  const [mode, setMode] = useState("");

//   useEffect(()=>{
//     setMode("LOGIN")
//   },[])

    // 처음에 로그인이 되어있는지 안되어있는지 확인
  useEffect(() => {
    fetch("http://localhost:3000/login/authcheck")
    // fetch("/authcheck")
      .then((res) => res.json())
      .then((json) => {
        if (json.isLogin === "True") {
          setMode("WELCOME");
        } else {
          setMode("LOGIN");
        }
      });
  }, []);

  let content = null;

  if (mode === "LOGIN") {
    content = <Login setMode={setMode}></Login>;
  } else if (mode === "SIGNIN") {
    content = <Signin setMode={setMode}></Signin>;
  } else if (mode === "WELCOME") {
    content = (
      <>
        <h2>메인 페이지에 오신 것을 환영합니다</h2>
        <p>로그인에 성공하셨습니다.</p>
        <a href="/logout">로그아웃</a>
      </>
    );
  }

  return (
    <>
      <div className="background">
        {content}
      </div>
    </>
  );
}

export default LoginMain;