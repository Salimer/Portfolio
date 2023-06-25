import styled from 'styled-components';
import Button from './Button';
import Connect from './connect';
import DropdownMenu from './dropdown';

const borderRadiusValue = '0 4rem 0 0';
const About = () => {
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open('https://docs.google.com/document/d/1PyB0_12bv3lvoj88u92PmLHuWKKQPP9ZVmoHLwB7a3o/edit?usp=sharing');
  };
  return (
    <Section className="p-6 flex flex-col justify-center items-center bg-white md:flex-row">
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
        <Button button handleClick={handleResumeClick}>Get my resume</Button>
      </article>
      <article className="md:flex-col w-full">
        <DropdownMenu title="Languages" items={['JavaScript', 'HTML', 'CSS']} />
        <DropdownMenu title="Frameworks" items={['React', 'Vue', 'Angular']} />
        <DropdownMenu title="Tools" items={['Git', 'GitHub', 'VS Code']} />
      </article>
    </Section>
  );
};

export default About;

const Section = styled.section`
  border-radius: ${(props) => props.borderRadius};
`;

Section.defaultProps = {
  borderRadius: borderRadiusValue,
};
