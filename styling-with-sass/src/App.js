import React from "react";
import Button from "./components/Button";
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">LARGE</Button>
        <Button>MEDIUM</Button>
        <Button size="small">SMALL</Button>
      </div>
    </div>
  );
}
export default App;
