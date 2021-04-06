import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        return (
            <h2>
                Welcome from {this.props.framework} and {this.props.language}!
            </h2>
        );
    }
}
