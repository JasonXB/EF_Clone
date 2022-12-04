import React, { Component } from 'react';

class Users extends Component {
  constructor(props: {}) {
    super(props); // need for "this" keyword usage
    this.state = { showUsers: true, hasError: false };
    //! ERROR 1: We create an error as soon as this component runs
    //! IRL, an error would occur due to a botched API call or something, but the outcome's the same regardless
    throw new Error('I crashed!');
  }
  //~ ----------------------------------------------
  throwAnError() {
    //! ERROR 2:
    //! We rig the toggle button handler to throw an error on purpose
    try {
      throw new Error("Shouldn't have pressed that, bucko");
    } catch (error) {
      this.setState({ hasError: true });
    }
  }
  //~ ----------------------------------------------
  render() {
    return (
      <div>
        <h1>I will throw an error using onClick</h1>
        <button onClick={this.throwAnError.bind(this)}>
          #2: Throw a deliberate error
        </button>
      </div>
    );
  }
}
export default Users;
