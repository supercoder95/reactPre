import React, { useRef, useReducer, useMemo, useCallback } from 'react';
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

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    default:
      throw new Error('Unhandled action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value,
    })
  }, [])

  const onCreate = useCallback(() => { }, [])
  dispatch({})
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
      />
      <UserList
        users={users}
      />
      <div>활성 사용자 수: 0</div>
    </>
  );
}

export default App;
