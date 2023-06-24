import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button type="button" className="w-fit p-4 rounded-lg my-5 border-2 border-logoColor2 tracking-wide text-logoColor2">
    {children}
  </button>
);
export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
