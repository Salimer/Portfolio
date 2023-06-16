import styled from 'styled-components';
import './App.css';
import Navbar from './components/navbar';
import Welcome from './components/welcome';

function App() {
  return (
    <Container className="px-6 font-[Poppins]">
      <Navbar />
      <Welcome />
    </Container>
  );
}

export default App;

const Container = styled.div``;
