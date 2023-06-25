import styled from 'styled-components';
import ProjectCard from './projectCard';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    type: ['CANOPY', 'Front End Dev', '2015'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://picsum.photos/200/300',
    link: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Project 2',
    type: ['CANOPY', 'Back End Dev', '2015'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    technology: ['HTML', 'CSS', 'JS'],
    image: 'https://picsum.photos/200/300',
    link: 'https://picsum.photos/200/300',
  },
];

const Projects = () => (
  <Section>
    <h1>Projects</h1>
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  </Section>
);

export default Projects;

const Section = styled.section``;
