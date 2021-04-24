import React, { useState, useRef } from "react";
import styles from "./styles";

function Carousel({
  children = [],
  swipeOff,
  height = "60vh",
  width = "100%",
}) {
  /*Mapping children to add props */

  const list = children.map((item) => {
    let controller = "";
    if (swipeOff == true) {
      controller = "controller";
    }
    return {
      ...item,
      props: {
        ...item.props,
        onMouseDown: (e) => HandleDown(e),
        onMouseMove: (e) => HandleMove(e),
        onMouseUp: (e) => HandleUp(e),
        onMouseLeave: (e) => handleLeaving(e),
        id: controller,
        className: item.props.className + " " + "inside",
        width: "100%",
        height: "100%",
      },
    };
  });

  const mobile = window.screen.width < 1300;
  const [transPos, setTransPos] = useState(100 / list.length);
  const [silderWidth, setSliderWidth] = useState(list.length * 100);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [index, setIndex] = useState(0);

  var down = false;
  var InitPos = 0;
  var moving = false;
  var Current = 0;
  var Position = 0;
  var transform = 0;

  const handlePos = (e) => {
    switch (e) {
      case "right":
        if (index < list.length - 1) {
          setIndex(index + 1);
          return;
        } else {
          setIndex(0);
          break;
        }
      case "left":
        if (index > 0) {
          setIndex(index - 1);
          return;
        } else setIndex(list.length - 1);
    }
  };

  const HandleDown = (e) => {
    e.preventDefault();
    const track = e.target.parentElement;
    down = true;
    InitPos = e.clientX;
    const transformMatrix = window
      .getComputedStyle(track)
      .getPropertyValue("transform");
    if (transformMatrix !== "none") {
      transform = parseInt(transformMatrix.split(",")[4].trim());
    }
  };

  const HandleMove = (e) => {
    const track = e.target.parentElement;
    if (down) {
      moving = true;
      let move;
      move = e.clientX;
      Current = move - InitPos;
      console.log(Current);
      e.target.parentElement.style.transform = `translateX(${
        Current + transform
      }px)`;
    }
  };

  const HandleUp = (e) => {
    if (e.target.id == "controller") {
      return null;
    }
    down = false;
    if (Current && Math.abs(Current) > 1 && moving) {
      if (Current < -4) {
        if (index < list.length - 1) {
          setIndex(index + 1);
          Current = 0;
        } else {
          setIndex(0);

          Current = 0;
        }
      } else if (Current > 4) {
        if (index > 0) {
          setIndex(index - 1);

          Current = 0;
        } else {
          setIndex(list.length - 1);
          Current = 0;
        }
      }
    }
  };

  const handleLeaving = (e) => {
    var x = e.clientX,
      y = e.clientY,
      elementMouseIsOver = document.elementFromPoint(x, y);
    if (
      elementMouseIsOver &&
      !elementMouseIsOver.classList.contains("inside") &&
      elementMouseIsOver.id !== "controller"
    ) {
      console.log(elementMouseIsOver.id);
      HandleUp(e);
    }
  };

  return (
    <div
      // className="inside"
      style={{
        border: "2px solid #ccc",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        height: height,
        width: width,
        userSelect: "none",
        draggable: "false",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${list.length * 100}%`,
          touchAction: "none",
          transform: "translate(-" + index * transPos + "%)",
          transition: "all 0.1s",
          userSelect: "none",
          flexBasis: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          height: "100%",
        }}
      >
        {list.map((child) => child)}
      </div>
      <div>
        <span
          onClick={(e) => handlePos("left")}
          id="controller"
          style={{
            ...styles.left,
            opacity: left ? "1" : "0.7",
          }}
        >
          <i id="controller" style={styles.arrowleft}></i>
        </span>
        <span
          onClick={(e) => handlePos("right")}
          id="controller"
          style={{
            ...styles.right,

            opacity: right ? "1" : "0.7",
          }}
        >
          <i id="controller" style={styles.arrowright}></i>
        </span>
        <ul style={styles.controller}>
          {list.map((item, i) => {
            return (
              <li
                onClick={() => {
                  setIndex(i);
                }}
                id="controller"
                key={i + Math.random()}
                style={{
                  ...styles.controllerButton,
                  backgroundColor: index == i ? "#555E65" : "#E9EDF0",
                }}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;
