import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      seconds: 0,
    }
  }

  startClock = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.handleSecond, 1000)
  }

  handleSecond = () => {
    if (this.state.seconds !== 0) {
      this.setState({ seconds: this.state.seconds - 1 })
    } else {
      clearInterval(this.interval);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let seconds;
    if (this.state.value.charCodeAt(0) === 43 || this.state.value.charCodeAt(0) === 45) {
      seconds = this.state.value.slice(1);
    } else {
      seconds = this.state.value;
    }
    this.setState({ seconds, value: "" }, this.startClock);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="App">
        Seconds Countdown Clock
        <form id="form" onSubmit={this.handleSubmit}asdfasdf>
          <input 
            autoComplete="off"
            placeholder="enter seconds" 
            value={this.state.value} 
            onChange={this.handleChange}
            id="seconds-input"
            type="number"
          />
          <input type="submit" value="start" />
        </form>
        <div id="countdown">{this.state.seconds}</div>
      </div>
    );
  }
}

export default App;
