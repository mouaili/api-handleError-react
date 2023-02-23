import React, { Component } from 'react';
import goku from '../Goku.png';
import handleErrorService from '../errors/HandleError';

class Goku extends Component {
  render() {
    const { background, changeBackground } = this.props;

    return (
      <div className={`col ${background}`}>
        <img
          className={`App-image`}
          src={goku}
          onClick={changeBackground}
          width='80'
          alt='Goku'
        />
      </div>
    );
  }
}

export default handleErrorService(Goku);
