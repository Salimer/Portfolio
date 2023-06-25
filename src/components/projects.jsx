import styled from 'styled-components';
import ProjectCard from './projectCard';
import bookstore from '../assets/projects/bookstore.png';
import commentdish from '../assets/projects/commentDish.png';

const projects = [
  {
    id: 1,
    name: 'Bookstore',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'BookStore is a website that stores books names, authors, genre, and the user’s progress on reading. Implementing this project to learn how to use React and Redux in the context of a real application.',
    technology: ['React', 'Redux', 'Style-Components'],
    image: bookstore,
    link: 'https://github.com/Salimer/Bookstore',
  },
  {
    id: 2,
    name: 'COMMENTDISH-project',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'Collaborative development for the ultimate food sharing and commenting platform. Join us in building a vibrant community hub for exploring, liking, and discussing meals. Let’s connect the world through the love of food!',
    technology: ['HTML', 'CSS', 'JS'],
    image: commentdish,
    link: 'https://github.com/Salimer/COMMENTDISH-project',
  },
];

const Projects = () => (
  <Section id="projects" className="py-28">
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;

const Section = styled.section``;
