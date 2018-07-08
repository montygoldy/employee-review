import React from "react";
import PropTypes from "prop-types";

const TextareaField = ({
  name,
  placeholder,
  value,
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
        <textarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={
            error
              ? "input-group__textarea input-group__textarea--inValid"
              : "input-group__textarea"
          }
          required="required"
        >
          {" "}
        </textarea>
      </div>
      {error && <div className="invalid-feedback"> {error} </div>}
    </React.Fragment>
  );
};

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.bool,
  error: PropTypes.string
};

TextareaField.defaultProps = {
  label: true
};

export default TextareaField;
