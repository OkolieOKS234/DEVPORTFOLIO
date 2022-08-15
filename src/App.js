import "./App.css";
import Companies from "./Companies";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Projects from "./Projects";

function App() {
  return (
    <body className="App">
      <Navbar />
      <Hero />
      <Companies />
      <Projects />
      <Overview />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
