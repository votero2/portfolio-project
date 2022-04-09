import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#f9ab00",
            },
            links: {
              enable: true,
              color: "#f9ab00",
              distance: 150,
            },
            move: {
              enable: true,
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
                opacity: 0.5,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
