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
  state: ITemperature = { temp: 0, property: "" };

  constructor(props) {
    super(props);
    this.state = { temp: 15, property: this.getStateOfH2O(15) };
  }

  onButtonClickPlusOne = () => {
    const newTemp = this.state.temp + 1;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  onButtonClickPlusTen = () => {
    const newTemp = this.state.temp + 10;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  onButtonClickMinusOne = () => {
    const newTemp = this.state.temp - 1;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  onButtonClickMinusTen = () => {
    const newTemp = this.state.temp - 10;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  getStateOfH2O(temp: Number): String {
    let stateOfWater = "gas";

    if (temp < 0) {
      stateOfWater = "solid";
    } else if (0 <= temp && temp < 100) {
      stateOfWater = "liquid";
    }

    return stateOfWater;
  }

  render() {
    return (
      <div style={styles}>
        <h2>
          温度: {this.state.temp}, 状態: {this.state.property}
        </h2>
        <h2>
          操作:
          <button onClick={this.onButtonClickPlusOne}>+1</button>
          <button onClick={this.onButtonClickPlusTen}>+10</button>
          <button onClick={this.onButtonClickMinusTen}>-10</button>
          <button onClick={this.onButtonClickMinusOne}>-1</button>
        </h2>
      </div>
    );
  }
}

render(<H2O />, document.getElementById("root"));
