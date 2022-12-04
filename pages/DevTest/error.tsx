import React from 'react';
import CauseError from '../../src/components/errorPages/CauseError';
// import ErrorBoundary from '../../src/components/errorPages/ErrorBoundary';
export default function error() {
  return (
    <div>
      <h1>ERROR INCOMING</h1>
      {/* Component throws an error on mount (should trigger error boundary) */}
      <CauseError />
    </div>
  );
}
