import React from "react";
class CurrencyChangerDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }
  onCurrencyChange(e) {
    this.props.onCurrencyChange(e.target.dataset.currencylabel);
    e.preventDefault();
  }
  render() {
    return (
      <div className="dropdown-curreny-currences">
        {this.props.currencies.map(function (currency, index) {
          return (
            <a
              key={index}
              href="#"
              onClick={this.onCurrencyChange}
              data-currencylabel={currency.label}
            >
              {currency.label} {currency.symbol}
            </a>
          );
        }, this)}
      </div>
    );
  }
}
export default CurrencyChangerDropDown;
