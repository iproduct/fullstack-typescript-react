import React from 'react';
import PropTypes from 'prop-types';

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  static propTypes = {
    compiler: PropTypes.string.isRequired,
    framework: PropTypes.string.isRequired,
};
  render() {
    return (
      <div>
        <h1>
          Hello from {this.props.compiler} and {this.props.framework}!!!
        </h1>
      </div>
    );
  }
}
