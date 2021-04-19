import React, { Component } from "react";

class EmailInput extends Component {
    state = { email: this.props.email }; // single owner - this comp
  
    render() {
      return <input onChange={this.handleChange} value={this.state.email} />;
    }
  
    handleChange = event => {
      this.setState({ email: event.target.value });
    };
  
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //   // This will erase any local state updates!
    //   // Do not do this.
    //   this.setState({ email: nextProps.email });
    // }
  }

  export default EmailInput;