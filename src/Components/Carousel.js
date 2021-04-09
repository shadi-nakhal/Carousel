import React, { useState } from "react";

const styles = {
  container: {
    width: "100%",
    margin: "10px 10px",
    minWidth: "220px",
  },
  carousel: {
    border: "2px solid #ccc",
    height: "400px",
    overflow: "hidden",
    position: "relative",
  },
  slider: {
    height: "100%",
    display: "flex",
    transition: "all 0.5s",
  },
  section: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    bottom: "20px",
    left: "50%",
    transform: "translate(-50%)",
    listStyle: "none",
    display: "flex",
    padding: "0px",
    margin: "0px",
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

  const [transPos, setTransPos] = useState(100 / list.length);
  const [silderWidth, setSliderWidth] = useState(list.length * 100);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [index, setIndex] = useState(0);

  const handlePos = (e) => {
    switch (e) {
      case "right":
        if (index < list.length - 1) {
          setIndex(index + 1);
          return;
        } else {
          setIndex(0);
          console.log(index);
          break;
        }
      case "left":
        if (index > 0) {
          setIndex(index - 1);
          return;
        } else setIndex(list.length - 1);
    }
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.carousel}>
          <div
            style={{
              ...styles.slider,
              width: silderWidth + "%",
              transform: "translate(-" + index * transPos + "%)",
            }}
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
              onMouseEnter={() => setLeft(true)}
              onMouseLeave={() => setLeft(false)}
              onClick={() => handlePos("left")}
              style={{ ...styles.left, opacity: left ? "0.7" : "0.2" }}
            >
              <i style={styles.arrowleft}></i>
            </span>
            <span
              onMouseEnter={() => setRight(true)}
              onMouseLeave={() => setRight(false)}
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
