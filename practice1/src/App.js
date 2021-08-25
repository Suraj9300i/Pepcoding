import React from "react";
import "./App.css";
import Card from "./Card";

class App extends React.Component {
  state = {
    first: 1,
    second: 1,
  };

  inc1 = () => {
    this.setState({
      first: this.state.first + 1,
    });
  };
  inc2 = () => {
    this.setState({
      second: this.state.second + 1,
    });
  };
  dec2 = () => {
    this.setState({
      second: this.state.second - 1,
    });
  };
  dec1 = () => {
    this.setState({
      first: this.state.first - 1,
    });
  };

  render = () => {
    return (
      <div>
        <h1>Practice Test: 1</h1>
        <div className="Cards">
          <Card
            value={this.state.first}
            increment={this.inc2}
            decrement={this.dec1}
          />
          <Card
            value={this.state.second}
            increment={this.inc1}
            decrement={this.dec2}
          />
        </div>
      </div>
    );
  };
}

export default App;
