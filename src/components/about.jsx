import styled from 'styled-components';
import Button from './button';
import Connect from './connect';

const borderRadiusValue = '0 4rem 0 0';
const About = () => (
  <Section className="p-6 flex flex-col justify-center items-center bg-white">
    <article>
      <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
        About Me
      </h1>
      <p className="text-lg text-left py-4">
        I’m a software developer! I can help you build a product ,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <Connect />
      <Button>Get my resume</Button>
    </article>
  </Section>
);

export default About;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
