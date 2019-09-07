import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

class ForecastBlock extends Component {
  render() {
    const { providerName, data } = this.props
    const obtainedData = data.map(item => {
      //const {date, temp, pressure, wind, desc, humidity} = item
      return (
        <div className="weather-indicators">
          <div>date: {item.date}</div>
          <div>T: {item.temp}</div>
          <div>P: {item.pressure}</div>
          <div>W: {item.wind}</div>
          <div>H: {item.humidity}</div>
          <div>Desc: {item.desc}</div>
        </div>
      )
    })
    return (
      <div className="forecast-block">
        <Paper>
          <div className="header">
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button variant="contained">1-Day</Button>
              <Button>5-Days</Button>
              <Button>10-Days</Button>
            </ButtonGroup>
            <div className="provider-name">{providerName}</div>
          </div>
          <div className="data">{obtainedData}</div>
        </Paper>
      </div>
    );
  }
}

const mapToProps = (state, ownProps) => {
  return {
    providerName: ownProps.providerName,
    data: ownProps.data
  }
}


export default connect(mapToProps)(ForecastBlock);
