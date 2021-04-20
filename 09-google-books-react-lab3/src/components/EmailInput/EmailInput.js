import React, { Component, Fragment } from 'react';

class EmailInput extends Component {
    state = { email: this.props.email };

    render() {
        return (
            <Fragment>
                <input onChange={this.handleChange} value={this.state.email} />
                <p>{this.state.email}</p>
            </Fragment>
        );
    }

    handleChange = event => {
        this.setState({ email: event.target.value });
    };

    componentWillReceiveProps(nextProps) {
        // This will erase any local state updates!
        // Do not do this.
        this.setState({ email: nextProps.email });
    }
}

export default EmailInput;