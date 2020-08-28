import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './Components/TodoTemplate';
import TodoHead from './Components/TodoHead';
import TodoList from './Components/TodoList';

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
    </TodoTemplate>
  </>
}

export default App;
