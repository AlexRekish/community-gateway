import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './BuyAndBurn.scss';

export default class BuyAndBurn extends Component {
  state = {
    res: { TotalUSDValue: 0 },
  };

  componentDidMount() {
    this.getUSD();
  }

  getUSD = async () => {
    try {
      await fetch(
        'https://cors-anywhere.herokuapp.com/https://efx-trustless-data.herokuapp.com/api/v1/last24HoursVolume',
        {
          method: 'GET',
          mode: 'cors',
        }
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            res: data,
          });
        });
    } catch (e) {
      console.log('Error ', e);
    }
  };

  numberWithSpace = number => {
    return number
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  render() {
    const { res } = this.state;
    const widthProgressBar = (res?.TotalUSDValue * 100) / 3000000 || 0;

    return (
      <section className="landing__section">
        <p className="landing__section-content section-margin">
          <span className="bold-text">10%</span> of all revenues earned on trading volumes above{' '}
          <span className="bold-text">10</span> million dollars during a 24 hour period will be used
          to buy NEC.
          <br />
        </p>
        <br />
        <div className="buy-and-burn__progress-bar-content">
          <div className="buy-and-burn__progress-bar-title">
            <div className="buy-and-burn__progress-bar-title-up">
              <span className="buy-and-burn__title-left">Current 24h trading volume</span>
              <span className="buy-and-burn__amount-left">
                {Boolean(res) && this.numberWithSpace(res.TotalUSDValue)} USD
              </span>
            </div>
            <div className="buy-and-burn__progress-bar-title-up">
              <span className="buy-and-burn__title-right">Until Buy & Burn</span>
              <span className="buy-and-burn__amount-right">3 000 000 USD</span>
            </div>
          </div>
          <div className={'progress-bar'}>
            <div className={'current-progress'} style={{ width: widthProgressBar + '%' }}></div>
          </div>
        </div>
        <br />
        <br />
        <p className="landing__section-content">
          This will be operated using a smart-contract auction similar to that developed and
          deployed by the Melon Protocol.
        </p>
        <br />
        <br />
        <Link to="/" className="fee-discounts__link">
          Find out more
        </Link>
      </section>
    );
  }
}
