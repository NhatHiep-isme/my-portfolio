import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro id="intro" />
      <About id="about" />
      <Projects id="project" />
      <Skills id="skill" />
      <Experience id="experience" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
