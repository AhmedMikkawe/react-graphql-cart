import React from "react";
class CurrencyChangerDropDown extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dropdown-curreny-currences">
        <a href="#" onClick={this.props.handler}>
          Link 1
        </a>
        <a href="#" onClick={this.props.handler}>
          Link 2
        </a>
        <a href="#" onClick={this.props.handler}>
          Link 3
        </a>
      </div>
    );
  }
}
export default CurrencyChangerDropDown;
