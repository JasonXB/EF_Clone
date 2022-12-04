import React, { Component } from 'react';

// Assigning types for the props object & the state object
interface PropsObj {
  children: React.ReactNode;
  generic: boolean; // if you want a generic error page, set this to true and no other props are needed
  errorNumber?: number;
  text?: string;
  subtext?: string;
}
interface StateObj { hasError: boolean;  } // prettier-ignore

export default class ErrorBoundary extends React.Component<PropsObj, StateObj> {
  constructor(props: PropsObj) {
    super(props);
    this.state = { hasError: false }; // all state variables go here
  }
  componentDidCatch() {
    // When or if an error's caught, change this state KVP to true
    this.setState({ hasError: true });
  }
  render() {
    // If we do have an error, render the following
    if (this.state.hasError) {
      // Destructure props and decide what text to render based on their values
      // We have generic text, and the option for dynamic test set via props
      const errorMsg = this.props.generic ? 'Error Found!' : 'Error ' + this.props.errorNumber; // prettier-ignore
      const text = this.props.generic ? 'Oops, something went wrong.' : this.props.text; // prettier-ignore
      const subtext = this.props.generic ? "Refresh the page and try again." : this.props.subtext; // prettier-ignore
      return (
        <div className={`text-center py-[200px]`}>
          <div>
            <h1 className="text-primary-2 font-semibold">{errorMsg}</h1>

            <div className="flex flex-col justify-center items-center py-[30px]">
              <p className="text-2xl font-bold mb-2">{text}</p>
              <p className="text-2xl font-bold">{subtext}</p>
            </div>
          </div>
        </div>
      );
    }
    // If we have no errors, let what's nested inside the FallbackUI tags render
    return this.props.children;
  }
}
