import React from "react";
import Carousel from "./Components/Carousel/Carousel";

const items2 = [
  <img src="https://picsum.photos/200/300" alt="picture" />,

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
    neque in faucibus placerat, odio mi commodo dui, ut lobortis massa tellus
    eget urna. Cras interdum urna lacus, et pulvinar est commodo in. Morbi
    feugiat vel nisl at consequat. Vestibulum vestibulum augue ac augue finibus,
  </p>,
  <img src="https://picsum.photos/500/300" alt="picture" />,
  <img src="https://picsum.photos/1000/1000" alt="picture" />,
  <img src="https://picsum.photos/200/300" alt="picture" />,
];

const items = [
  <img src="https://picsum.photos/500/300" alt="picture" />,
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
    neque in faucibus placerat, odio mi commodo dui, ut lobortis massa tellus
    eget urna. Cras interdum urna lacus, et pulvinar est commodo in. Morbi
    feugiat vel nisl at consequat. Vestibulum vestibulum augue ac augue finibus,
  </p>,

  <img src="https://picsum.photos/200/300" alt="picture" />,
  <img src="https://picsum.photos/500/300" alt="picture" />,
  <img src="https://picsum.photos/1000/1000" alt="picture" />,
  <img src="https://picsum.photos/200/300" alt="picture" />,
  <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>,
  <img src="https://picsum.photos/1000/1000" alt="picture" />,
  <img src="https://picsum.photos/200/300" alt="picture" />,
  <img src="https://picsum.photos/500/300" alt="picture" />,
  <img src="https://picsum.photos/1000/1000" alt="picture" />,
  <img src="https://picsum.photos/200/300" alt="picture" />,
  <img src="https://picsum.photos/500/300" alt="picture" />,
  <img src="https://picsum.photos/1000/1000" alt="picture" />,
  <span
    style={{
      width: "80%",
      marginBottom: "50px",
    }}
  >
    <Carousel swipeOff items={items2} />
  </span>,
  <img src="https://picsum.photos/200/300" alt="picture" />,
  <img src="https://picsum.photos/500/300" alt="picture" />,
  <img src="https://picsum.photos/1000/1000" alt="picture" />,

  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat,
    neque in faucibus placerat, odio mi commodo dui, ut lobortis massa tellus
    eget urna. Cras interdum urna lacus, et pulvinar est commodo in. Morbi
    feugiat vel nisl at consequat. Vestibulum vestibulum augue ac augue finibus,
  </span>,
];

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Dancing Script', cursive",
        }}
      >
        Carousel.
      </h1>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <div style={{ marginBottom: "5%" }}>
          <Carousel height="300px" items={items} />
        </div>
        <div style={{ marginBottom: "5%" }}>
          <Carousel items={items} />
        </div>
        <div style={{ marginBottom: "5%" }}>
          <Carousel items={items} />
        </div>
      </section>
      <div style={{ margin: "2%", marginBottom: "5%" }}>
        <Carousel height="80vh" width="95vw" items={items} />
      </div>
    </div>
  );
}

export default App;
