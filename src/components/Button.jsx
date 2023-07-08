import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ children, button, handleClick }) => (
  <BigButton type={button ? 'button' : 'submit'} className="w-fit p-4 rounded-lg my-5 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white" onClick={(e) => { handleClick(e); }}>
    {children}
  </BigButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  button: false,
};
export default Button;

const BigButton = styled.button`
transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

&:hover {
  background-color: #6936f5;
  color: #fff;
}
`;
