import React, { Component } from 'react';

type State = {
  row0: Array<string>;
  row1: Array<string>;
  row2: Array<string>;
  isToggle: boolean;
};

type Props = {};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      row0: ['-', '-', '-'],
      row1: ['-', '-', '-'],
      row2: ['-', '-', '-'],
      isToggle: true
    };
  }

  render() {
    return <div className='App'>hello world hello again!</div>;
  }
}

export default App;
