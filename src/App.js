import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper, Content } from './styles/styles';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Navbar />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>
          <Footer />
        </Wrapper>
      </Router>
    </>
  );
}

export default App;
