import styled from 'styled-components';
import ProjectCard from './projectCard';
import bookstore from '../assets/projects/bookstore.png';
import commentdish from '../assets/projects/commentdish.png';
import spaceHub from '../assets/projects/spaceHub.png';
import RLCS from '../assets/projects/RLCS.png';
import mathmagicians from '../assets/projects/mathmagicians.png';
import leaderboard from '../assets/projects/leaderboard.png';
import todo from '../assets/projects/todo.png';

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
  {
    id: 3,
    name: 'Space-Travelers-Hub',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'Space-Travelers-Hub is a web application for a company that provides commercial and scientific space travel services. Implementing React/Redux, the application will allow users to book rockets and join selected space missions.',
    technology: ['React', 'Redux', 'Style-Components', 'React-Testing-Library', 'React/Bootstrap'],
    image: spaceHub,
    link: 'https://github.com/Salimer/Space-Travelers-Hub',
  },
  {
    id: 4,
    name: 'RLCS-event-template',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'RLCS event webpage is a project to market, sell tickets and more about a hypotetical event of Rocket League. This project is adaptable for other topics! Built with HTML, CSS and JavaScript.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    image: RLCS,
    link: 'https://github.com/Salimer/RLCS-event-template',
  },
  {
    id: 5,
    name: 'Math-magicians',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations, and read a random quote. By building this application, I improve my skills in using React.',
    technology: ['React', 'SCSS'],
    image: mathmagicians,
    link: 'https://github.com/Salimer/Math-magicians',
  },
  {
    id: 6,
    name: 'Leaderboard-project',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    technology: ['HTML', 'JavaScript', 'SCSS'],
    image: leaderboard,
    link: 'https://github.com/Salimer/Leaderboard-project',
  },
  {
    id: 7,
    name: 'To-Do-List',
    type: ['SALIMER', 'Front End Dev', '2023'],
    description: 'To-Do List is a project to showcase daily tasks arrangement with the help of webpack.',
    technology: ['HTML', 'JavaScript', 'SCSS', 'Webpack'],
    image: todo,
    link: 'https://github.com/Salimer/To-Do-List',
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
