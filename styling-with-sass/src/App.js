import React from "react";
import Button from "./components/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button color="gray" size="large">
          Button
        </Button>
        <Button color="gray">Button</Button>
        <Button color="gray" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button color="pink" size="large">
          Button
        </Button>
        <Button color="pink">Button</Button>
        <Button color="pink" size="small">
          Button
        </Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth outline>
          Button
        </Button>
        <Button color="gray" fullWidth>
          Button
        </Button>
        <Button
          color="pink"
          fullWidth
          size="small"
          onClick={() => {
            console.log("클릭되었다!!!!");
          }}
          onMouseMove={() => {
            console.log("마우스가 지나갓따!!!!");
          }}
        >
          Button
        </Button>
      </div>
    </div>
  );
}
export default App;
