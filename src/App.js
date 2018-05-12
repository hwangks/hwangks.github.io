import React, { Component } from 'react';
import Nav from './components/Nav';
import IconBox from './components/IconBox';

class App extends Component {
  state = {
    about: false,
    skills: false,
    projects: false,
    interests: false,
    contact: false,
    hovered: ''
  };

  onSelect = group => {
    this.setState(prev => ({ [group]: !prev[group] }));
  };

  onHoverStart = group => {
    this.setState(() => ({ hovered: group }));
  };

  onHoverEnd = () => {
    this.setState(() => ({ hovered: '' }));
  };

  render() {
    return (
      <div className="App">
        <Nav
          currState={this.state}
          onSelect={this.onSelect}
          onHoverStart={this.onHoverStart}
          onHoverEnd={this.onHoverEnd}
        />
        <IconBox currState={this.state} />
      </div>
    );
  }
}

export default App;
