import React from "react";
import Carousel from "./Components/Carousel";

const items = [
  <p>lala</p>,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <span>bateekh</span>,
  <span>bateek2h</span>,
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "50%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flexWrap: "wrap",
        }}
      >
        <Carousel items={items} />
        <Carousel items={items} />
      </div>
    </div>
  );
}

export default App;
