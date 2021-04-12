import React, { useState, useRef } from "react";

const styles = {
  container: {
    width: "100%",
    minWidth: "100px",
  },
  carousel: {
    border: "2px solid #ccc",
    height: "500px",
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
  },
  slider: {
    position: "absolute",
    height: "100%",
    display: "flex",
    transition: "all 0.5s",
  },
  section: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "grab",
    // overflow: "hidden",
  },
  left: {
    position: "absolute",
    top: "50%",
    left: "10px",
    cursor: "pointer",
    width: "35px",
    height: "35px",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "#E9EDF0",
    opacity: "0.2",
    transform: "translateY(-50%)",
  },
  arrowleft: {
    border: "solid #555E65",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(135deg)",
    margin: "35%",
  },

  right: {
    position: "absolute",
    top: "50%",
    right: "10px",
    cursor: "pointer",
    width: "35px",
    height: "35px",
    backgroundColor: "#E9EDF0",
    textAlign: "center",
    borderRadius: "50%",
    opacity: "0.2",
    transform: "translateY(-50%)",
  },
  arrowright: {
    border: "solid #555E65",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(-45deg)",
    margin: "35%",
  },
  controller: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translate(-50%)",
    listStyle: "none",
    display: "flex",
    padding: "0px",
    margin: "0px",
    flexBasis: "100%",
    width: "100%",
    flexWrap: "Wrap",
    justifyContent: "center",
  },
  controllerButton: {
    width: "8px",
    height: "8px",
    backgroundColor: "#E9EDF0",
    borderRadius: "50px",
    cursor: "pointer",
    margin: "5px",
  },
  selected: {
    background: "transparent",
  },
};

function Carousel({ items = [] }) {
  const list = items.map((item) => {
    return {
      ...item,
      props: { ...item.props, width: "100%", height: "100%" },
    };
  });
  const mobile = window.screen.width < 1300;
  const [transPos, setTransPos] = useState(100 / list.length);
  const [silderWidth, setSliderWidth] = useState(list.length * 100);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [index, setIndex] = useState(0);
  const [down, setDown] = useState(false);
  const [InitPos, setInitPos] = useState(null);
  const [moving, setmoving] = useState(false);
  const [Current, setCurrent] = useState();
  const Position = useRef({
    Postion: 0,
  });
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
    let pos;
    if (mobile) {
      pos = e.touches[0].clientX;
    } else {
      pos = e.clientX;
    }
    setInitPos(pos);
    setDown(true);
    Position.current.Postion = Current;
  };

  const HandleUp = (e) => {
    setDown(false);
    if (
      Current &&
      Math.abs(Current) > 100 &&
      Math.abs(Current) < 1000 &&
      moving
    ) {
      if (Current < -100) {
        if (index < list.length - 1) {
          setIndex(index + 1);
          setCurrent();
        } else {
          setIndex(0);
          setCurrent();
        }
      } else if (Current > 100) {
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

  const HandleMove = (e) => {
    let move;
    if (mobile) {
      move = e.touches[0].clientX;
      console.log("passed");
    } else {
      move = e.clientX;
    }
    if (down && Math.abs(move) > 50) {
      setCurrent(move - InitPos);

      if (Current && Math.abs(Current) > 10) {
        Position.current.Postion = Math.round(
          Current + e.currentTarget.getBoundingClientRect().x
        );
        setmoving(true);
      }
    } else {
      Position.current.Postion = Current;
      setmoving(false);
      setDown(false);
      setCurrent();
    }
  };

  const HandleTest = (e) => {
    console.log(e);
  };
  console.log(moving);
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.carousel}>
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
            onMouseLeave={!mobile ? () => HandleUp() : null}
            onTouchStart={mobile ? (e) => HandleDown(e) : null}
            onTouchMove={mobile ? (e) => HandleMove(e) : null}
            onTouchEnd={mobile ? (e) => HandleUp(e) : null}
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
              onPointerEnter={() => setLeft(true)}
              onPointerLeave={() => setLeft(false)}
              //   onMouseEnter={() => setLeft(true)}
              //   onMouseLeave={() => setLeft(false)}
              onClick={() => handlePos("left")}
              style={{
                ...styles.left,
                opacity: left ? "0.7" : "0.2",
                zIndex: 0,
              }}
            >
              <i style={styles.arrowleft}></i>
            </span>
            <span
              onPointerEnter={() => setRight(true)}
              onPointerLeave={() => setRight(false)}
              //   onMouseEnter={() => setRight(true)}
              //   onMouseLeave={() => setRight(false)}
              onClick={() => handlePos("right")}
              style={{ ...styles.right, opacity: right ? "0.7" : "0.2" }}
            >
              <i style={styles.arrowright}></i>
            </span>
            <ul style={styles.controller}>
              {list.map((item, i) => {
                return (
                  <li
                    onClick={() => {
                      setIndex(i);
                    }}
                    // onClick={(e) => HandleSelect(e)}
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
