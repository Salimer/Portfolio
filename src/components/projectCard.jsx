import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
  <Li className="m-6 p-4 flex flex-col bg-white gap-3">
    <img src={project.image} className="w-full h-56 rounded-lg" alt={project.name} />
    <h2>{project.name}</h2>
    <div>
      <span>{project.type[0]}</span>
      <ion-icon name="ellipse" />
      <span>{project.type[1]}</span>
      <ion-icon name="ellipse" />
      <span>{project.type[2]}</span>
    </div>
    <p>{project.description}</p>
    <div>
      <span>{project.technology[0]}</span>
      <span>{project.technology[1]}</span>
      <span>{project.technology[2]}</span>
    </div>
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
    type: PropTypes.arrayOf(PropTypes.string).isRequired,
    technology: PropTypes.arrayOf(PropTypes.string).isRequired,
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

    ion-icon {
        font-size: 0.7rem;
        margin: 0 0.5rem;
        color: #c1c7d0;
    }
`;
