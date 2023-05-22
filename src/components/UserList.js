import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/users'); // 서버에서 유저 목록 데이터를 가져오는 API 엔드포인트로 요청합니다.
      const userList = await response.json();
      setUsers(userList);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
