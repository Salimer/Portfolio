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
          Hello! I’m Salim, a recent graduate of Microverse’s Full-Stack development
          program with a unique background
          in Electrical Engineering and Engineering Business Management. My passion for software
          development started at a young age when I began customizing my Android phone with
          custom ROMs. During my time at Microverse, I had the opportunity to
          collaborate globally on
          coding projects through pair programming.
          {showFullText ? (
            <>
              <br />
              <br />
              I have spent 1,300+ hours mastering my software
              engineering fundamentals through collaboration. I
              built 30+ projects while becoming proficient in Algorithms &
              Data Structures, and a range of technologies.
              <br />
              <br />
              I take pride in my achievements, including a third-place finish in
              the 6th Arab Open Championship for Robotics. I also hold an honors
              degree in Electrical Engineering and a master’s degree from Warwick University, UK.
              <br />
              <br />
              I share my knowledge through programming tutorials on my
              YouTube channel and am proficient in Arabic and English.
              Currently, I’m also learning Turkish.
              <br />
              <br />
              I’m also passionate about various personal interests and hobbies.
              In my free time, I enjoy playing video games like Rocket League and
              Call of Duty, as well as indulging my love for watching anime.
              <br />
              <br />
              For job opportunities or collaborations, please feel free to reach out
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
        <DropdownMenu title="Languages" items={['JavaScript', 'Ruby', 'Python', 'Swift']} isOpen={isOpen1} toggleDropdown={toggleDropdown1} />
        <DropdownMenu title="Frameworks" items={['React', 'Ruby on Rails', 'NodeJS', 'PostgreSQL', 'MongoDB']} isOpen={isOpen2} toggleDropdown={toggleDropdown2} />
        <DropdownMenu title="Tools" items={['Git', 'GitHub', 'VS Code', 'Chrome Dev Tools']} isOpen={isOpen3} toggleDropdown={toggleDropdown3} />
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
