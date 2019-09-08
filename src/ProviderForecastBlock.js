import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import DayForecast from './DayForecast';

class ForecastBlock extends Component {
  state = {
    '1-Day': true,
    '5-Days': false,
    '10-Days': false,
  }

  clickHandler = (objKey) => {
    if (!this.state[objKey]) {
      for (let prop in this.state) {
        this.setState({ [prop]: false })
      }
      this.setState({ [objKey]: true })
    }
  }

  render() {
    const { providerName, data, loading } = this.props;
    const indexToSlice = (() => {
      for (let prop in this.state) {
        if (this.state[prop]) return parseInt(prop.match(/\d+/))
      }
    })();
    
    const obtainedData = Array.isArray(data) && data.slice(0, indexToSlice).map((item, ind) => {
      return (
        <DayForecast key={ind} item={item} />
      )
    })

    const daysButtons = Object.keys(this.state).map((key, ind) => {
      return <Button
        key={ind}
        variant={this.state[key] ? 'contained' : 'outlined'}
        onClick={() => this.clickHandler(key)}
      >{key}</Button>
    })



    return (
      <div className="forecast-block">
        <Paper>
          <div className="header">
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              {daysButtons}
            </ButtonGroup>
            <div className="provider-name">{providerName}</div>
          </div>
          <div className="data">{obtainedData || data}</div>
        </Paper>
      </div>
    );
  }
}

const mapToProps = (state, ownProps) => {
  return {
    loading: state.loading,
    providerName: ownProps.providerName,
    data: ownProps.data
  }
}


export default connect(mapToProps)(ForecastBlock);
