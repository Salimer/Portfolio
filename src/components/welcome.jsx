import styled from 'styled-components';

const Welcome = () => (
  <Section className="flex flex-col justify-center items-center">
    <h1 className="text-2xl">
      I’m Salim
      <br />
      Glad to see you!
    </h1>
    <p className="text-lg">
      I’m a software developer! I can help you build a product ,
      feature or website Look through some of my work and experience!
      If you like what you see and have a project you need coded, don’t hesitate to contact me.
    </p>
    <h3>LET’S CONNECT</h3>
  </Section>
);

export default Welcome;

const Section = styled.section``;
