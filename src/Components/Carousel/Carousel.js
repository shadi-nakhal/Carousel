import React, { useState, useRef } from "react";
import "./styles.css";

function Carousel({
  children = [],
  swipeOff,
  height = "60vh",
  width = "100%",
}) {
  const mobile = window.screen.width < 1300;
  /*children is opaque data structure,
   so this makes sure its always an array and ready to map over */
  const makingList = Array.isArray(children) ? children : [children];

  /*Mapping children to add props */
  const list = makingList.map((item, index) => {
    let controller = "";
    let modifiedItem = item;
    if (swipeOff == true || item.props.swipeOff == true) {
      controller = "controller";
    }

    return {
      ...modifiedItem,
      props: {
        ...modifiedItem.props,
        onMouseDown: !mobile ? (e) => HandleDown(e) : null,
        onMouseMove: !mobile ? (e) => HandleMove(e) : null,
        onMouseUp: !mobile ? (e) => HandleUp(e) : null,
        onMouseLeave: !mobile ? (e) => handleLeaving(e) : null,
        onTouchStart: mobile ? (e) => HandleDown(e) : null,
        onTouchMove: mobile ? (e) => HandleMove(e) : null,
        onTouchEnd: mobile ? (e) => HandleUp(e) : null,
        id: controller,
        className: item.props.className
          ? item.props.className + " " + "inside"
          : "inside",
      },
    };
  });

  const [transPos, setTransPos] = useState(100 / list.length);
  const [silderWidth, setSliderWidth] = useState(list.length * 100);
  const [index, setIndex] = useState(0);
  const ref = useRef();

  var down = false;
  var InitPos = 0;
  var moving = false;
  var Current = 0;
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
    !mobile ? e.preventDefault() : null;
    if (e.target.id == "controller") {
      return null;
    }
    const track = ref.current;
    down = true;
    if (e.clientX) {
      InitPos = e.clientX;
    } else {
      InitPos = e.touches[0].clientX;
    }
    const transformMatrix = window
      .getComputedStyle(track)
      .getPropertyValue("transform");
    if (transformMatrix !== "none") {
      transform = Number(transformMatrix.split(",")[4].trim());
    }
  };

  const HandleMove = (e) => {
    const track = ref.current;
    if (down) {
      moving = true;
      let move;
      if (e.clientX) {
        move = e.clientX;
      } else {
        move = e.touches[0].clientX;
      }
      Current = move - InitPos;
      track.style.transform = `translateX(${Current + transform}px)`;
    }
  };

  const HandleUp = (e) => {
    if (e.target.id == "controller") {
      return null;
    }
    down = false;
    if (Current && Math.abs(Current) > 1 && moving) {
      if (Current < -1) {
        if (index < list.length - 1) {
          setIndex(index + 1);
          Current = 0;
        } else {
          setIndex(0);

          Current = 0;
        }
      } else if (Current > 1) {
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
    let x = e.clientX,
      y = e.clientY,
      elementMouseIsOver = document.elementFromPoint(x, y);
    if (
      elementMouseIsOver &&
      !elementMouseIsOver.classList.contains("inside") &&
      elementMouseIsOver.id !== "controller"
    ) {
      HandleUp(e);
    }
  };

  return (
    <div
      className="Carousel-Main"
      style={{
        height: height,
        width: width,
      }}
    >
      <div
        className="Carousel-Container"
        ref={ref}
        style={{
          width: `${silderWidth}%`,
          transform: "translate(-" + index * transPos + "%)",
          WebkitTransition: !mobile
            ? "-webkit-transform 50ms"
            : "-webkit-transform 00ms",
        }}
      >
        {list.map((child, i) => {
          return (
            <section
              style={{ userSelect: "none", width: "100%", height: "100%" }}
              key={i + Math.random}
            >
              {child}
            </section>
          );
        })}
      </div>
      <div>
        <span
          onClick={(e) => handlePos("left")}
          id="controller"
          className="Car-Left"
        >
          <i id="controller" className="Car-ArrowLeft"></i>
        </span>
        <span
          onClick={(e) => handlePos("right")}
          id="controller"
          className="Car-Right"
        >
          <i id="controller" className="Car-ArrowRight"></i>
        </span>
        <ul className="Car-Controller">
          {list.map((item, i) => {
            return (
              <li
                onClick={() => {
                  setIndex(i);
                }}
                id="controller"
                key={i + Math.random()}
                className="Car-ControllerButton"
                style={{
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
