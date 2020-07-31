import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function counActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

const initalState = {
  inputs: {
    username: '',
    email: '',
  },
  users: 
    [
      {
        id: 1,
        username: 'supercoder',
        useremail: 'supercoder@kakao.com',
        active: true,
      },
      {
        id: 2,
        username: 'ariel',
        email: 'ariel@gmail.com',
        active: false,
      },
      {
        id: 3,
        username: 'shakiss',
        email: 'shakiss@gmail.com',
        active: false,
      }
    ]
}

function App() {

  return (
    <>
      <CreateUser

      />
      <UserList
        users = {[]}
      />
      <div>활성 사용자 수: 0</div>
    </>
  );
}

export default App;
