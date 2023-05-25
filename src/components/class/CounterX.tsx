import { Component } from "react";

type CounterXProps = {
  message: string;
};

type CounterXState = {
  count: number;
};

export class CounterX extends Component<CounterXProps, CounterXState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default CounterX;
