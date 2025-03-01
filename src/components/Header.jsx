import PropTypes from "prop-types";

function Header({ text }) {
  return (
    <>
      <h1>{text}</h1>
    </>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired, // Indica que text debe ser un string y obligatorio
};

export default Header;
