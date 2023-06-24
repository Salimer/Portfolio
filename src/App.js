import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Projects from './components/projects';
import About from './components/about';

function App() {
  return (
    <Container className="font-[Poppins] bg-bodyBackground">
      <Navbar />
      <Welcome />
      <Projects />
      <About />
    </Container>
  );
}

export default App;

const Container = styled.div``;
