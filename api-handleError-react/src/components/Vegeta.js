import React, { Component } from 'react';
import vegeta from '../Vegeta.png';
import handleErrorService from '../errors/HandleError';

export class Vegeta extends Component {
  render() {
    const { background, changeBackground } = this.props;

    return (
      <div className={`col ${background}`}>
        <img
          className={`App-image`}
          src={vegeta}
          onClick={changeBackground}
          width='100'
          alt='Vegeta'
        />
      </div>
    );
  }
}

export default handleErrorService(Vegeta);
