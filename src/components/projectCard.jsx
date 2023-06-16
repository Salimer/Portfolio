import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
  <Li className="m-6 p-4 flex flex-col bg-white gap-3">
    <img src={project.image} className="w-3 h-3" alt={project.name} />
    <h2>{project.name}</h2>
    <p>{project.description}</p>
  </Li>
);

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const Li = styled.li`
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
        transform: scale(1.05);
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0.5rem 0;
    }
    p {
        font-size: 1rem;
        font-weight: 400;
        margin: 0.5rem 0;
    }
`;
