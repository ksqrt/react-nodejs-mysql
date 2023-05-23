const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const port = 3000;

const cors = require('cors');
const db = require('./db/db');
const sessionOption = require('./db/sessionOption');
const bodyParser = require("body-parser");
const loginRouter = require('./router/login');
const userListRouter = require('./router/userList');

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore(sessionOption);
app.use(session({  
  key: 'session_cookie_name',
  secret: '~',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));



// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// 리액트 라우팅 추가후 여기에도 추가해주세요~
app.get('/', (req, res) => {    
  req.sendFile(path.join(__dirname, '/build/index.html'));
});
app.get('/userList/userList', (req, res) => {    
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
app.get('/login/loginMain', (req, res) => {    
  res.sendFile(path.join(__dirname, '/build/index.html'));
});




// 로그인 라우터 가지고오기
app.use('/login',require('./router/login'));

// 유저 리스트 라우터 가지고오기
app.use('/userList',  require('./router/userList'));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
