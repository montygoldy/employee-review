import React, { Component } from "react";
import InputField from "../Reusable/FormElements/InputField";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      hello: ""
    };
  }

  onChange = e => {
    const { name, value } = this.state;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="container">
        <form action="">
          <InputField
            name="Hello"
            type="text"
            placeholder="hello"
            onChange={this.onChange}
            value={this.state.hello}
          />
        </form>
      </div>
    );
  }
}

export default Register;
