import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
  <Li className="m-6 p-4 flex flex-col bg-white gap-3">
    <div>
      <img src={project.image} className="w-full h-52 rounded-lg" alt={project.name} />
    </div>
    <h2 className="text-logoColor4">{project.name}</h2>
    <div>
      <span className="text-logoColor2 font-semibold">{project.type[0]}</span>
      <ion-icon name="ellipse" />
      <span className="text-projectCardText font-semibold">{project.type[1]}</span>
      <ion-icon name="ellipse" />
      <span className="text-projectCardText font-semibold">{project.type[2]}</span>
    </div>
    <p>{project.description}</p>
    <div className="flex gap-2 items-center flex-wrap">
      <span className="bg-logoColor6 px-4 py-1 rounded-lg text-sm text-logoColor font-medium tracking-wide">
        {project.technology[0]}
      </span>
      <span className="bg-logoColor6 px-4 py-1 rounded-lg text-sm text-logoColor font-medium tracking-wide">
        {project.technology[1]}
      </span>
      <span className="bg-logoColor6 px-4 py-1 rounded-lg text-sm text-logoColor font-medium tracking-wide">
        {project.technology[2]}
      </span>
    </div>
    <button type="button" className="w-fit p-4 rounded-lg my-5 border-2 border-logoColor2 tracking-wide text-logoColor2">See project</button>
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
