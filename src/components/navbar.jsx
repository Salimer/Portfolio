import styled from 'styled-components';

const Navbar = () => (
  <Section className="flex justify-between">
    <div className="">
      <h1>logo</h1>
    </div>
    <nav>
      <h2 href="#">nav</h2>
    </nav>
  </Section>
);

export default Navbar;

const Section = styled.header`

`;
