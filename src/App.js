import logo from "./logo.svg";
import "./App.css";
import Cube from "./Cube";
import Home from "./Components/Home";
import SectionTow from "./Components/SectionTow";

function App() {
  // console.log(document.readyState);
  return (
    <div className="App">
      <div className="body">
        <section className="one">
          <div className="model">
            <Cube />
          </div>
          <div className="landingBody">
            <Home />
          </div>
        </section>
        <section className="body">
          <SectionTow />
        </section>
      </div>
    </div>
  );
}

export default App;
