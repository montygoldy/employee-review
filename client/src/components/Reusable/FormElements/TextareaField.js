import React from "react";
import PropTypes from "prop-types";

const TextareaField = ({ name, placeholder, value, onChange, label }) => {
  return (
    <div className="input-group">
      {label && (
        <div className="input-group__label">
          <label>{name}</label>
        </div>
      )}
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="input-group__textarea"
        required="required"
      >
        {" "}
      </textarea>
    </div>
  );
};

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool
};

TextareaField.defaultProps = {
  label: true
};

export default TextareaField;
