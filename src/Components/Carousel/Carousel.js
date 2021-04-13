import React, { useState, useRef } from "react";
import styles from "./styles";

function Carousel({ items = [], swipeOff, height = "60vh", width = "100%" }) {
  const list = items.map((item) => {
    let controller = "";
    if (swipeOff == true) {
      controller = "controller";
    }
    return {
      ...item,
      id: controller,
      props: {
        ...item.props,
        id: controller,
        draggable: false,
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
  const [down, setDown] = useState(false);
  const [InitPos, setInitPos] = useState();
  const [moving, setmoving] = useState(false);
  const [Current, setCurrent] = useState(0);
  const Position = useRef({
    Postion: null,
  });
  var pss;
  var crr;

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
    if (e.target.id == "controller") {
      Position.current.Postion = Current;
      return null;
    }
    setInitPos(e.clientX);
    setDown(true);
    Position.current.Postion = Current;
  };

  const HandleMove = (e) => {
    let move;
    move = e.clientX;
    if (e.target.id == "controller") {
      return null;
    }

    if (down) {
      setCurrent(move - InitPos);
      if (Current) {
        let position = Math.round(
          Current + e.currentTarget.getBoundingClientRect().x
        );
        Position.current.Postion = position;
        setmoving(true);
      }
    } else {
      Position.current.Postion = Current;
      setmoving(false);
      setDown(false);
      setCurrent();
    }
  };

  const HandleUp = (e) => {
    if (e.target.id == "controller") {
      return null;
    }
    setDown(false);
    if (Current && Math.abs(Current) > 100 && moving) {
      if (Current < -10) {
        if (index < list.length - 1) {
          setIndex(index + 1);
          setCurrent();
        } else {
          setIndex(0);
          setCurrent();
        }
      } else if (Current > 10) {
        if (index > 0) {
          setIndex(index - 1);
          setCurrent();
        } else {
          setIndex(list.length - 1);
          setCurrent();
        }
      }
    }
    setCurrent();

    setmoving(false);
    setDown(false);
    Position.current.Postion = Current;
  };

  const Touchdown = (e) => {
    pss = e.touches[0].clientX;
  };
  const Touchmove = (e) => {
    let move;
    move = e.touches[0].clientX;
    crr = move - pss;
    let position = Math.round(crr + e.currentTarget.getBoundingClientRect().x);
    Position.current.Postion = position;
  };
  const Touchup = (e) => {
    if (crr < -10) {
      if (index < list.length - 1) {
        setIndex(index + 1);
        setCurrent();
      } else {
        setIndex(0);
        setCurrent();
      }
    } else if (crr > 10) {
      if (index > 0) {
        setIndex(index - 1);
        setCurrent();
      } else {
        setIndex(list.length - 1);
        setCurrent();
      }
    }
  };
  return (
    <div>
      <div style={styles.container}>
        <div style={{ ...styles.carousel, height: height, width: width }}>
          <div
            style={{
              ...styles.slider,
              width: silderWidth + "%",
              touchAction: "none",
              transform: down
                ? "translateX(" + Position.current.Postion + "px)"
                : "translate(-" + index * transPos + "%)",
            }}
            onMouseMove={!mobile ? (e) => HandleMove(e) : null}
            onMouseDown={!mobile ? (e) => HandleDown(e) : null}
            onMouseUp={!mobile ? (e) => HandleUp(e) : null}
            onTouchStart={mobile ? (e) => Touchdown(e) : null}
            onTouchMove={mobile ? (e) => Touchmove(e) : null}
            onTouchEnd={mobile ? (e) => Touchup(e) : null}
          >
            {list.map((item, i) => {
              return (
                <section key={i + Math.random()} style={styles.section}>
                  {item}
                </section>
              );
            })}
          </div>
          <div>
            <span
              onClick={(e) => handlePos("left")}
              onPointerEnter={() => setLeft(true)}
              onPointerLeave={() => setLeft(false)}
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
              onPointerEnter={() => setRight(true)}
              onPointerLeave={() => setRight(false)}
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
      </div>
    </div>
  );
}

export default Carousel;
