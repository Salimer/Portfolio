import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Connect from './connect';
import DropdownMenu from './dropdown';

const borderRadiusValue = '0 4rem 0 0';
const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullText(!showFullText);
  };

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen1(false);
    setIsOpen2(true);
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(true);
  };
  const handleResumeClick = (e) => {
    e.preventDefault();
    window.open('https://docs.google.com/document/d/1PyB0_12bv3lvoj88u92PmLHuWKKQPP9ZVmoHLwB7a3o/edit?usp=sharing');
  };
  return (
    <Section id="about-me" className="p-6 flex flex-col justify-center items-center bg-white md:flex-row md:p-32">
      <article>
        <h1 className="text-4xl text-left w-full font-bold leading-relaxed">
          About Me
        </h1>
        <p className="text-lg text-left py-4">
          Hi there! I’m Salim, an aspiring full-stack developer currently enrolled
          in Microverse’s program. With a background in
          Electrical Engineering and Engineering Business Management, I bring a
          unique skill set and a passion for continuous learning.
          {showFullText ? (
            <>
              <br />
              <br />
              From a young age, I’ve been fascinated by software development, even customizing
              my Android phone with custom ROMs. I specialize in React, Redux, Ruby
              on Rails, and Python. I’m currently honing my skills at Microverse, collaborating
              globally on coding projects through pair programming.
              <br />
              <br />
              I’m proud to have placed third in the 6th Arab Open Championship for Robotics.
              Additionally, I hold an honors degree in Electrical Engineering and a master’s
              degree from Warwick University, UK.
              <br />
              <br />
              On my YouTube channel, I share programming tutorials, and I’m fluent in Arabic
              and English. Currently, I’m also learning Turkish. I thrive on making new connections,
              so feel free to reach out! 😃
            </>
          ) : null}
        </p>
        <button className="underline pb-10" type="button" onClick={handleReadMoreClick}>
          {showFullText ? 'Read Less' : 'Read More'}
        </button>

        <Connect />
        <Button button handleClick={handleResumeClick}>Get my resume</Button>
      </article>
      <article className="md:flex-col md:pl-5 w-full">
        <DropdownMenu title="Languages" items={['JavaScript', 'HTML', 'CSS']} isOpen={isOpen1} toggleDropdown={toggleDropdown1} />
        <DropdownMenu title="Frameworks" items={['React', 'Vue', 'Angular']} isOpen={isOpen2} toggleDropdown={toggleDropdown2} />
        <DropdownMenu title="Tools" items={['Git', 'GitHub', 'VS Code']} isOpen={isOpen3} toggleDropdown={toggleDropdown3} />
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
