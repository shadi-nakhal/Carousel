import React, { useState } from "react";

const styles = {
  container: {
    width: "50%",
    margin: "10px 10px",
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
    width: "600%",
    border: "1px solid red",
    transition: "all 0.5s",
    backgroundColor: "green",
  },
  section: {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },
  arrowleft: {
    border: "solid black",
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
  },
  arrowright: {
    border: "solid black",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(-45deg)",
    margin: "35%",
  },
};

const list = [
  { text: "Content for panel 1" },
  { text: "Content for panel 2" },
  { text: "Content for panel 3" },
  { text: "Content for panel 4" },
  { text: "Content for panel 5" },
  { text: "Content for panel 6" },
];

function App() {
  var [transPos, setTransPos] = useState();
  var [index, setIndex] = useState(0);
  const handlePos = (e) => {
    switch (e) {
      case "right":
        if (index < list.length - 1) {
          setIndex(index + 1);
          return console.log(index);
        } else {
          setIndex(0);
          console.log(index);
          break;
        }
      case "left":
        if (index > 0) {
          setIndex(index - 1);
          return console.log(index);
        } else setIndex(list.length - 1);
    }
  };

  return (
    <div>
      <div className="container" style={styles.container}>
        <div className="carousel" style={styles.carousel}>
          <div
            className="slider"
            style={{
              ...styles.slider,
              transform: "translate(-" + index * 17 + "%)",
            }}
          >
            {list.map((item) => {
              return <section style={styles.section}>{item.text}</section>;
            })}
          </div>
          <div style={styles.control}>
            <span
              className="Carleft"
              onClick={() => handlePos("left")}
              style={styles.left}
            >
              <i style={styles.arrowleft}></i>
            </span>
            <span
              className="Carright"
              onClick={(e) => handlePos("right")}
              style={styles.right}
            >
              <i style={styles.arrowright}></i>
            </span>
            <ul>
              <li className="selected"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
