import React from "react"
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from "./Components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body{
  background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>안녕하세여</TodoTemplate>
    </>
  );
}

export default App;
