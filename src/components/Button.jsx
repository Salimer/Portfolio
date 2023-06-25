import PropTypes from 'prop-types';

const Button = ({ children, button, handleClick }) => (
  <button type={button ? 'button' : 'submit'} className="w-fit p-4 rounded-lg my-5 border-2 border-logoColor2 tracking-wide text-logoColor2 bg-white" onClick={(e) => { handleClick(e); }}>
    {children}
  </button>
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
