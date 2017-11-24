import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from 'material-ui/RaisedButton';

import { fetchSpecificRate } from "../actions/index";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromValue: "USD",
      toValue: "BDT",
      rateFromValue: 0,
      convertedMoney: null
      // rateToValue: null
    };

    this.handleOptionFromChanged = this.handleOptionFromChanged.bind(this);
    this.handleOptionToChanged = this.handleOptionToChanged.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    // this.handleTo = this.handleTo.bind(this);
  }

  calculate() {
    // const from = this.state.fromValue;
    // const to = this.state.toValue;
    // const fromMoney = this.state.rateFromValue;
    // this.props.SpecificRate(from, to, fromMoney);
    this.setState({ convertedMoney: this.props.money.converted });
    console.log("output::", this.state.convertedMoney);
  }

  handleOptionFromChanged(e) {
    this.setState({ fromValue: e.target.value });
    this.setState({ convertedMoney: null });
    const from = e.target.value;
    const to = this.state.toValue;
    const money = this.state.rateFromValue;
    this.props.SpecificRate(from, to, money);
  }

  handleOptionToChanged(e) {
    this.setState({ toValue: e.target.value });
    this.setState({ convertedMoney: null });
    const from = this.state.fromValue;
    const to = e.target.value;
    const money = this.state.rateFromValue;
    this.props.SpecificRate(from, to, money);
  }

  // Code for real time change

  handleFrom(e) {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ rateFromValue: amount });
      this.setState({ convertedMoney: null });
      const from = this.state.fromValue;
      const to = this.state.toValue;
      const money = amount;
      this.props.SpecificRate(from, to, money);
      // this.setState({rateToValue: this.props.money.converted})
      // console.log('result is ', this.props.money.converted)
      // this.setState({convertedMoney: this.props.money.converted})
    }
  }

  // handleTo(e) {
  //   const amount = e.target.value;
  //   if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
  //     const from = this.state.toValue;
  //     const to = this.state.fromValue;
  //     const money = amount;
  //     this.props.SpecificRate(from, to, money);
  //     this.setState({rateFromValue: this.props.money.converted})
  //     this.setState({ rateToValue: amount });
  //   }
  // }

  // END

  renderCountriesOption() {
    const countries = this.props.countries;
    let result = "";
    for (var p in countries) {
      if (countries.hasOwnProperty(p)) {
        if (countries[p].hasOwnProperty("currencySymbol")) {
          const name = countries[p].currencyName;
          const id = countries[p].id;
          const symbol = countries[p].currencySymbol;
          result += `<option value="${id}"> ${name} (code: ${id}; sign: ${
            symbol
          })</option>\n`;
        } else {
          const name = countries[p].currencyName;
          const id = countries[p].id;
          result += `<option value="${id}">${name} (code: ${id})</option>\n`;
        }
      }
    }
    return result;
  }

  render() {
    
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Input</td>
              <td>From this currency</td>
              <td>To this currency</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="number"
                  placeholder="From this currency"
                  value={this.state.rateFromValue}
                  onChange={this.handleFrom}
                  //{/* onChange={(e) => this.setState({rateFromValue: e.target.value})} */}
                />
              </td>
              <td>
                <select
                  id="from"
                  dangerouslySetInnerHTML={{
                    __html: this.renderCountriesOption()
                  }}
                  onChange={this.handleOptionFromChanged}
                  value={this.state.fromValue}
                />
              </td>
              <td>
                <select
                  id="from"
                  dangerouslySetInnerHTML={{
                    __html: this.renderCountriesOption()
                  }}
                  value={this.state.toValue}
                  onChange={this.handleOptionToChanged}
                />
              </td>
            </tr>
            <tr>
              <td>
                {/* Select Output currency: */}
                {/* <input
                  type="number"
                  placeholder="To this currency"
                  value={this.state.rateToValue}
                  onChange={this.handleTo}
                  onChange={(e) => this.setState({rateToValue: e.target.value})}
                /> */}
              </td>
              <td>
                <RaisedButton primary={true} className="submit-button" onClick={this.calculate}>
                  Submit
                </RaisedButton>
              </td>
            </tr>
            {/* <tr>
              <td colSpan={2}>
                
              </td>
            </tr> */}
          </tbody>
        </table>
        <div className="output">
          {this.state.convertedMoney !== "" && (
            <h1>
              {this.state.rateFromValue}{' '}{this.state.fromValue}
              {' '}={' '}
              {this.state.convertedMoney}{' '}{this.state.toValue}
            </h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    money: state.rate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SpecificRate: (from, to, money) => {
      dispatch(fetchSpecificRate(from, to, money));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Box);
