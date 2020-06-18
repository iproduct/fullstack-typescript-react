import React, { Component } from 'react';

interface Props {}
interface State {}

export default class Color extends Component<Props, State> {
  state = { color: 'red' };

  render() {
    return (
      <section>
        <h1>Color</h1>
        <h3>Name</h3> <p>{this.state.color || 'white'}</p>
        <h3>Hex</h3>
        <p>
          {(() => {
            switch (this.state.color) {
              case 'red':
                return '#FF0000';
              case 'green':
                return '#00FF00';
              default:
                return '#FFFFFF';
            }
          })()}
        </p>
      </section>
    );
  }
}
