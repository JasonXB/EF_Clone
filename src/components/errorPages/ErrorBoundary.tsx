import React from 'react';

interface PropsObj { children: React.ReactNode; } // prettier-ignore
interface StateObj { hasError: boolean;  } // prettier-ignore

class ErrorBoundary extends React.Component<PropsObj, StateObj> {
  constructor(props: PropsObj) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Render component
    return this.props.children;
  }
}

export default ErrorBoundary;
