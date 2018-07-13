import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  name,
  placeholder,
  value,
  type,
  onChange,
  label,
  error
}) => {
  return (
    <React.Fragment>
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
          className={
            error
              ? "input-group__input input-group__input--inValid"
              : "input-group__input"
          }
          required="required"
        />
      </div>
      {error && <div className="invalid-feedback"> {error} </div>}
    </React.Fragment>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
  error: PropTypes.string
};

InputField.defaultProps = {
  type: "text",
  label: true
};

export default InputField;
