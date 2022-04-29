import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./views/Home";
import Projects from "./views/Projects"
import CV from "./views/CV"
import Contact from "./views/Contact"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
