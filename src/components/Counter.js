import { Component } from 'react';

class Counter extends Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // binding inside structure
    // this.increment = this.increment.bind(this);
  }

  // increment(){
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   })
  // }


  // arrow functions have direct access to this keywords
  // arrow functions are recommended for class based functions
  increment = () => {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  decrement(){
    this.setState({
      counter: this.state.counter - 1,
    })
  }


  render(){
    return (
    <div>
      <h3>Count value is: {this.state.counter}</h3>
      {/* then do it like this: */}
      <button onClick={this.increment}>Increment</button>
      {/*  */}
      <button onClick={()=> this.decrement()}>Decrement</button>
    </div>
    );
  }
}

export default Counter;
