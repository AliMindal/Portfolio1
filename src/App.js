import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("project.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects data={jsonData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
