import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    console.log(values);
  };

  getInitialValues() {
    return {
      preference: "spaces",
      newsletter: true
    };
  }

  render() {
    return (
      <RegisterForm
        onSubmit={this.submit}
        initialValues={this.getInitialValues()}
      />
    );
  }
}

export default RegisterFormContainer;
