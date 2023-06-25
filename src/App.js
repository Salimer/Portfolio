import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <Container className="bg-bodyBackground">
      <Navbar />
      <Welcome />
      <Projects />
      <About />
      <Contact />
    </Container>
  );
}

export default App;

const Container = styled.div`
font-family: 'Poppins', sans-serif;
`;
