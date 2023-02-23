import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

const handleErrorService = WrappedComponent => {
  class HandleClickError extends Component {
    state = {
      background: '',
    };

    handleAddBackground = () => {
      if (WrappedComponent.name === 'Frieza') {
        this.setState({ background: 'bg bg-danger' });
      } else {
        this.setState({ background: 'bg bg-success' });
      }

      console.log(WrappedComponent.name);
    };

    render() {
      if (this.state.background === 'bg bg-danger') {
        throw new Error();
      }

      return (
        <WrappedComponent
          changeBackground={this.handleAddBackground}
          background={this.state.background}
        />
      );
    }
  }

  return HandleClickError;
};

export default handleErrorService;
