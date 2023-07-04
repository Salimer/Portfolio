import styled from 'styled-components';
import Connect from './connect';
import headlineShapes from '../assets/headline-shapes.svg';

const borderRadiusValue = '0 0 0 4rem';
const Welcome = () => (
  <Section id="headline" className="p-6 flex flex-col justify-center items-center pt-40 pb-32 bg-white md:p-56">
    <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
      I’m Salim.
      <br />
      Glad to see you!
    </h1>
    <p className="text-lg text-left py-4">
      I’m a software developer! I can help you build a product,
      feature, or website. Look through some of my work and experience!
      If you like what you see and have a project you need coded, don’t hesitate to contact me.
    </p>
    <Connect />
  </Section>
);

export default Welcome;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${headlineShapes});
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
