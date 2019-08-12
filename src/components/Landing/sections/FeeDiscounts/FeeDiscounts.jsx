import React from 'react';
import { Link } from 'react-router-dom';

import './FeeDiscounts.scss';

export default function FeeDiscounts(props) {
  const validate = evt => {
    let theEvent = evt || window.event;
    let key;
    if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  return (
    <section className="landing__section">
      <p className="landing__section-content">
        Ethfinex Trustless is the most liquid and advanced decentralized exchange.
        <br />
        The value of Nectar will now be tied to the success of its decentralized exchange products,
        of which Ethfinex Trustless is the first and largest.
        <br />
        As a consequence holding Nectar will entitle traders to fee discounts based
      </p>
      <br />
      <div className="fee-discounts__calculator-content">
        <div className="fee-discounts__calculator">
          <div className="fee-discounts__input-content">
            <label htmlFor="own" className="fee-discounts__label">
              Own
            </label>
            <span className="fee-discounts__input-nec right">
              <input type="text" id="own" className="fee-discounts__input" onKeyPress={validate} />
            </span>
          </div>
          <div className="fee-discounts__arrows">
            <img src="/images/icon-arrows.svg" alt="" />
          </div>
          <div className="fee-discounts__input-content">
            <label htmlFor="discount" className="fee-discounts__label">
              Receive fee discount
            </label>
            <span className="fee-discounts__input-percent right">
              <input
                type="text"
                id="discount"
                className="fee-discounts__input"
                onKeyPress={validate}
              />
            </span>
          </div>
        </div>
        <Link to="/" className="fee-discounts__link ">
          View fee calculation table
        </Link>
      </div>
      <br />
      <p className="landing__section-content">Start trading on Ethfinex Trustless</p>
      <Link to="/" className="new-listings__link trading">
        Start Trading
      </Link>
    </section>
  );
}
