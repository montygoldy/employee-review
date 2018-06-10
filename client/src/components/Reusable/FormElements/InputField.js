import React from "react";
import PropTypes from "prop-types";

const InputField = ({ name, placeholder, value, type, onChange, label }) => {
  return (
    <div className="input-group">
      {label && (
        <div className="input-group__label">
          <label>{name}</label>
        </div>
      )}
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="input-group__input"
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;
