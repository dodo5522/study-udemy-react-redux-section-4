import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import "./water.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

interface ITemperature {
  temp: Number;
  property: String;
}

class H2O extends React.Component {
  state: ITemperature = {
    temp: 0,
    property: ""
  };

  constructor(props) {
    super(props);
    this.state = { temp: 15, property: this.getStateOfH2O(15) };
  }

  private onButtonClickPlusOne = () => {
    const newTemp = this.state.temp + 1;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  private onButtonClickPlusTen = () => {
    const newTemp = this.state.temp + 10;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  private onButtonClickMinusOne = () => {
    const newTemp = this.state.temp - 1;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  private onButtonClickMinusTen = () => {
    const newTemp = this.state.temp - 10;
    this.setState({
      temp: newTemp,
      property: this.getStateOfH2O(newTemp)
    });
  };

  private getStateOfH2O(temp: Number): String {
    let stateOfWater = "gas";

    if (temp < 0) {
      stateOfWater = "solid";
    } else if (0 <= temp && temp < 100) {
      stateOfWater = "liquid";
    }

    return stateOfWater;
  }

  private render() {
    return (
      <div style={styles}>
        <h2 className={this.getStateOfH2O(this.state.temp)}>
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
