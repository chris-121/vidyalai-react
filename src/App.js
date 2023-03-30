import "./App.css";
import { useEffect } from "react";
import { fabric } from "fabric";
import "./PenAndEraser.css";
function App() {
  let canvas;
  useEffect(() => {
    canvas = new fabric.Canvas("canvas");
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 3;
    canvas.freeDrawingBrush.color = "red";
  }, []);
  function changeSize(e) {
    canvas.freeDrawingBrush.width = e.target.value;
  }
  function changeColor(color) {
    console.log(color);
    canvas.freeDrawingBrush.color = color;
  }
  function eraser() {
    canvas.freeDrawingBrush.color = "#ffffff";
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          id="brush-size"
          type="range"
          min="1"
          max="20"
          onChange={(e) => changeSize(e)}
        />
        <div
          className="round"
          onClick={() => changeColor("black")}
          style={{ backgroundColor: "black" }}
        ></div>
        <div
          className="round"
          onClick={() => changeColor("green")}
          style={{ backgroundColor: "green" }}
        ></div>
        <div
          className="round"
          onClick={() => changeColor("yellow")}
          style={{ backgroundColor: "yellow" }}
        ></div>
        <div
          className="round"
          onClick={() => changeColor("blue")}
          style={{ backgroundColor: "blue" }}
        ></div>
        <div
          className="round"
          onClick={() => changeColor("red")}
          style={{ backgroundColor: "red" }}
        ></div>
        <button onClick={eraser} style={{ backgroundColor: "lightblue" }}>
          Eraser
        </button>
      </div>
      <canvas id="canvas" />
    </>
  );
}

export default App;
