import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';
import TodoCreate from './Components/TodoCreate';

const GlobalStyle = createGlobalStyle`
 body{
   background: #e0ecef;
 }
`;

function App() {
  return <>
    <GlobalStyle />
    <TodoTemplate>
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </TodoTemplate>
  </>
}

export default App;
