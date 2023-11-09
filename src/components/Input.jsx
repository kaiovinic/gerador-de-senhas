import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      <input
        type="number"
        id="passowordSize"
        min="4"
        value={props.passowordSize}
        onChange={(e) => props.setPasswordSize(+e.target.value)}
      />
    </div>
  );
};

Input.propTypes = {
  passowordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};
export default Input;
