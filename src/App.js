import React from "react";
import Carousel from "./Components/Carousel";

const items2 = [
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
    neque in faucibus placerat, odio mi commodo dui, ut lobortis massa tellus
    eget urna. Cras interdum urna lacus, et pulvinar est commodo in. Morbi
    feugiat vel nisl at consequat. Vestibulum vestibulum augue ac augue finibus,
  </p>,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <img src="https://picsum.photos/200/300" alt="lala" />,
];

const items = [
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
    neque in faucibus placerat, odio mi commodo dui, ut lobortis massa tellus
    eget urna. Cras interdum urna lacus, et pulvinar est commodo in. Morbi
    feugiat vel nisl at consequat. Vestibulum vestibulum augue ac augue finibus,
  </p>,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <img src="https://picsum.photos/200/300" alt="lala" />,
  <img src="https://picsum.photos/500/300" alt="lala" />,
  <img src="https://picsum.photos/1000/1000" alt="lala" />,
  <span
    style={{
      width: "80%",
      paddingBottom: "10%",
    }}
  >
    <Carousel items={items2} />
  </span>,
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
    neque in faucibus placerat, odio mi commodo dui, ut lobortis massa tellus
    eget urna. Cras interdum urna lacus, et pulvinar est commodo in. Morbi
    feugiat vel nisl at consequat. Vestibulum vestibulum augue ac augue finibus,
  </span>,
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <Carousel items={items} />
        <Carousel items={items} />
      </div>
    </div>
  );
}

export default App;
