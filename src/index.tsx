import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

interface ITemperature {
  temp: Number;
}

class H2O extends React.Component {
  state: ITemperature = { temp: 0 };

  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
    this.state = { temp: 15 };
  }

  onButtonClickPlusOne = () => {
    this.setState({temp: this.state.temp + 1;});
  };

  onButtonClickPlusTen = () => {
    this.setState({temp: this.state.temp + 10});
  };

  onButtonClickMinusOne = () => {
    this.setState({temp: this.state.temp - 1});
  };

  onButtonClickMinusTen = () => {
    this.setState({temp: this.state.temp - 10});
  };

  render() {
    return (
      <div style={styles}>
        <h2>温度: {this.state.temp}</h2>
        <button onClick={this.onButtonClickPlusOne}>+1</button>
        <button onClick={this.onButtonClickPlusTen}>+10</button>
        <button onClick={this.onButtonClickMinusTen}>-10</button>
        <button onClick={this.onButtonClickMinusOne}>-1</button>
      </div>
    );
  }
}

render(<H2O />, document.getElementById("root"));
