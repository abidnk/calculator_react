import React, { Component } from "react";

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: "0",
      operator: null,
      previousValue: null,
      waitingForOperand: false,
    };
  }

  handleDigitClick = (digit) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      });
    }
  };

  handleOperatorClick = (nextOperator) => {
    const { displayValue, operator, previousValue } = this.state;
    const inputValue = parseFloat(displayValue);

    if (operator && previousValue !== null) {
      const result = this.calculate(previousValue, inputValue, operator);
      this.setState({
        displayValue: String(result),
        previousValue: result,
        waitingForOperand: true,
        operator: nextOperator,
      });
    } else {
      this.setState({
        previousValue: inputValue,
        waitingForOperand: true,
        operator: nextOperator,
      });
    }
  };

  handleEqualsClick = () => {
    const { displayValue, operator, previousValue } = this.state;
    const inputValue = parseFloat(displayValue);

    if (operator && previousValue !== null) {
      const result = this.calculate(previousValue, inputValue, operator);
      this.setState({
        displayValue: String(result),
        previousValue: null,
        waitingForOperand: true,
        operator: null,
      });
    }
  };

  handleClearClick = () => {
    this.setState({
      displayValue: "0",
      operator: null,
      previousValue: null,
      waitingForOperand: false,
    });
  };

  calculate = (prevValue, nextValue, op) => {
    switch (op) {
      case "+":
        return prevValue + nextValue;
      case "-":
        return prevValue - nextValue;
      case "*":
        return prevValue * nextValue;
      case "/":
        return prevValue / nextValue;
      default:
        return nextValue;
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">{this.state.displayValue}</div>
        <div className="calculator-buttons">
          <button onClick={() => this.handleDigitClick(7)}>7</button>
          <button onClick={() => this.handleDigitClick(8)}>8</button>
          <button onClick={() => this.handleDigitClick(9)}>9</button>
          <button onClick={() => this.handleOperatorClick("+")}>+</button>
          <button onClick={() => this.handleDigitClick(4)}>4</button>
          <button onClick={() => this.handleDigitClick(5)}>5</button>
          <button onClick={() => this.handleDigitClick(6)}>6</button>
          <button onClick={() => this.handleOperatorClick("-")}>-</button>
          <button onClick={() => this.handleDigitClick(1)}>1</button>
          <button onClick={() => this.handleDigitClick(2)}>2</button>
          <button onClick={() => this.handleDigitClick(3)}>3</button>
          <button onClick={() => this.handleOperatorClick("*")}>*</button>
          <button onClick={() => this.handleDigitClick(0)}>0</button>
          <button onClick={() => this.handleOperatorClick(".")}>.</button>
          <button onClick={this.handleEqualsClick}>=</button>
          <button onClick={this.handleClearClick}>C</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
