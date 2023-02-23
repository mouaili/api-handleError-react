import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='col bg-danger text-white'>
          Oups, Une erreur s'est produite...
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;