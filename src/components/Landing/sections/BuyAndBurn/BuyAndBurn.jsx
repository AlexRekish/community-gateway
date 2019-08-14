import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { geTotalUSD } from '../../../../actions/getTotalUSDValue';

import './BuyAndBurn.scss';

class BuyAndBurn extends Component {
  componentDidMount() {
    this.props.geTotalUSD();
  }

  numberWithSpace = number => {
    return number
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  render() {
    const { response } = this.props;

    return (
      <section className="landing__section">
        <p className="landing__section-content">
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
                {Boolean(response) && this.numberWithSpace(response.TotalUSDValue)} USD
              </span>
            </div>
            <div className="buy-and-burn__progress-bar-title-up">
              <span className="buy-and-burn__title-right">Until Buy & Burn</span>
              <span className="buy-and-burn__amount-right">3 000 000 USD</span>
            </div>
          </div>
          <progress
            max={3000000}
            value={Boolean(response) && response.TotalUSDValue}
            className="buy-and-burn__progress-bar"
          ></progress>
        </div>
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

const mapStateToProps = state => {
  const { response } = state.totalUSD;
  return { response };
};

const mapDispatchToProps = dispatch => {
  return {
    geTotalUSD: () => {
      dispatch(geTotalUSD());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyAndBurn);
