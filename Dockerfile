# FROM node:16.13.0-alpine
# RUN mkdir -p /home/node/src
# COPY . /home/node/src
# COPY .env /home/node/src/.env
# WORKDIR /home/node/src
# RUN npm install
# EXPOSE 5000
# ENTRYPOINT [ "node", "index.js" ]


# Node.js 버전 지정
FROM node:16.13.0-alpine

# 작업 디렉토리 설정
WORKDIR /tecmint-app

# 소스 코드 복사
COPY package.json /tecmint-app
COPY package-lock.json /tecmint-app
COPY . /tecmint-app

# 패키지 설치
RUN npm install

# React 앱 빌드
RUN npm run build

# 포트 설정
EXPOSE 3000

# 시작 명령 설정
CMD node server.js
