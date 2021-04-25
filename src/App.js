import React from "react";
import Carousel from "./Components/Carousel/Carousel";

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
          <Carousel height="300px">
            <img src="https://picsum.photos/1000/400" alt="picture" />
            <img src="https://picsum.photos/800/400" alt="picture" />
            <img src="https://picsum.photos/600/400" alt="picture" />
            <img src="https://picsum.photos/700/300" alt="picture" />
            <img src="https://picsum.photos/800/400" alt="picture" />

            <p style={{ paddingTop: "4%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              volutpat, neque in faucibus placerat, odio mi commodo dui, ut
              lobortis massa tellus eget urna. Cras interdum urna lacus, et
              pulvinar est commodo in. Morbi feugiat vel nisl at consequat.
              Vestibulum vestibulum augue ac augue finibus,
            </p>
            <img src="https://picsum.photos/900/300" alt="picture" />
            <img src="https://picsum.photos/500/300" alt="picture" />
          </Carousel>
        </div>
        <div
          style={{
            marginBottom: "5%",
            display: "flex",
            flexDirection: "row",
            gap: "2%",
          }}
        >
          <div>
            <Carousel height="300px">
              <img src="https://picsum.photos/900/400" alt="picture" />
              <img src="https://picsum.photos/1000/400" alt="picture" />
              <img src="https://picsum.photos/600/400" alt="picture" />
              <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
              <img src="https://picsum.photos/700/400" alt="picture" />
              <img src="https://picsum.photos/800/400" alt="picture" />

              <p style={{ paddingTop: "4%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat, neque in faucibus placerat, odio mi commodo
                dui, ut lobortis massa tellus eget urna. Cras interdum urna
                lacus, et pulvinar est commodo in. Morbi feugiat vel nisl at
                consequat. Vestibulum vestibulum augue ac augue finibus,
              </p>
              <img src="https://picsum.photos/500/400" alt="picture" />
              <img src="https://picsum.photos/750/400" alt="picture" />
            </Carousel>
          </div>
          <div>
            <Carousel height="300px">
              <img src="https://picsum.photos/700/300" alt="picture" />
              <img src="https://picsum.photos/800/400" alt="picture" />
              <img src="https://picsum.photos/1000/400" alt="picture" />

              <img src="https://picsum.photos/500/400" alt="picture" />
              <img src="https://picsum.photos/500/300" alt="picture" />
              <img src="https://picsum.photos/600/400" alt="picture" />

              <p style={{ paddingTop: "4%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat, neque in faucibus placerat, odio mi commodo
                dui, ut lobortis massa tellus eget urna. Cras interdum urna
                lacus, et pulvinar est commodo in. Morbi feugiat vel nisl at
                consequat. Vestibulum vestibulum augue ac augue finibus,
              </p>
              <img src="https://picsum.photos/900/300" alt="picture" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
