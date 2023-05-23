## 개발설정

1. npm init 해서 종속성 설치

```
npm install
```
2. React 앱 빌드 
```
npm run build
```
3. node 서버 키는방법
```
node server.js
```
4. react 서버 키는방법

```
npm start
```

## 파일 구조

server.js : node js 서버입니다.

src: 리액트 입니다.  
    ㄴ components: 컴포넌트들을 포함하는 폴더입니다. 기능별로 하위폴더들이 있습니다.  ex) Login , Main  
    ㄴ App.js : 리액트의 라우팅을 정의해놓았습니다.
   

public: 정적 파일(이미지, CSS, JavaScript 등)을 포함하는 폴더입니다.  
 ㄴ 클라이언트 측에서 직접 접근할 수 있는 파일들을 이 폴더에 저장합니다.

router : server.js 의 라우터들이 들어가있는 폴더입니다.   
        ㄴ 라우터는 DB 에 쿼리문을 보내 json 데이터를 생성합니다.   
        ㄴ 생성된 json 데이터는 리액트가 fetch 해서 가져다 사용합니다.  

db: 데이터베이스 관련 파일들을 포함하는 폴더입니다.  
    ㄴ 라우터에 이 db 를 연결합니다.



