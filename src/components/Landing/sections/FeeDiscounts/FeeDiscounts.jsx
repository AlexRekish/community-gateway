import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FeeDiscounts.scss';

export default class FeeDiscounts extends Component {
  state = { ownNEC: null };

  validate = evt => {
    let key = evt.keyCode || evt.which;
    key = String.fromCharCode(key);
    const regex = /[0-9]|\./;

    if (!regex.test(key)) {
      evt.returnValue = false;
      if (evt.preventDefault) evt.preventDefault();
    }
  };

  calcReceive = evt => {
    this.setState({
      ownNEC: evt.target.value,
    });
  };

  render() {
    const { ownNEC } = this.state;

    return (
      <section className="landing__section">
        <p className="landing__section-content">
          Ethfinex Trustless is the most liquid and advanced decentralized exchange.
          <br />
          <br />
          The value of Nectar will now be tied to the success of its decentralized exchange
          products, of which Ethfinex Trustless is the first and largest.
          <br />
          <br />
          As a consequence holding Nectar will entitle traders to fee discounts based
          <br />
        </p>
        <br />
        <div className="fee-discounts__calculator-content">
          <div className="fee-discounts__calculator">
            <div className="fee-discounts__input-content">
              <label htmlFor="own" className="fee-discounts__label">
                Own
              </label>
              <span className="fee-discounts__input-nec right">
                <input
                  type="text"
                  id="own"
                  className="fee-discounts__input"
                  onChange={this.calcReceive}
                  onKeyPress={this.validate}
                />
              </span>
            </div>
            <div className="fee-discounts__arrows">
              <img src="/images/icon-arrows.svg" alt="" />
            </div>
            <div className="fee-discounts__input-content">
              <label htmlFor="discount" className="fee-discounts__label">
                Receive 20% Fee discount ON
              </label>
              <span
                className="fee-discounts__input-percent fee-discounts__receive-usd right"
                id="discount"
              >
                <p className={'fee-discount__receive-text'}>{ownNEC * 100}</p>
              </span>
              <p className="fee-discounts__receive-label-bottom">30-day Trading volume</p>
            </div>
          </div>
          <a href="/" className="fee-discounts__link">
            View fee calculation table
          </a>
        </div>
        <br />
        <p className="landing__section-content">Start trading on Ethfinex Trustless</p>
        <a href="/" className="new-listings__link trading">
          Start Trading
        </a>
      </section>
    );
  }
}
