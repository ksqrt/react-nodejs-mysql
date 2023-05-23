const express = require('express');
const router = express.Router();
const db = require('../db/db');



// 유저 목록을 가져오는 API 엔드포인트 설정
router.get('/api/users', (req, res) => {
    const query = 'SELECT * FROM userTable'; // 유저 테이블의 이름에 따라 쿼리를 수정해주세요.
  
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching user list:', error);
        res.status(500).json({ error: 'Failed to fetch user list' });
      } else {
        res.json(results);
      }
    });
  });

  module.exports = router;