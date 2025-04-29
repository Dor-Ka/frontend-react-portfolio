import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Wrapper, Content } from './styles/styles';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from './styles/theme';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(prev => !prev);


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Wrapper>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
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
    </ThemeProvider>
  );
}

export default App;
