import React, { Component } from 'react';
import frieza from '../Frieza.webp';
import handleErrorService from '../errors/HandleError';

class Frieza extends Component {
  render() {
    const { background, changeBackground } = this.props;

    return (
      <div className={`col ${background}`}>
        <img
          className={`App-image`}
          src={frieza}
          onClick={changeBackground}
          width='135'
          alt='Frieza'
        />
      </div>
    );
  }
}

export default handleErrorService(Frieza);
