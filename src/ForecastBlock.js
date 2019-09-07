import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const ForecastBlock = () => {
  return (
    <div className="forecast-block">
      <Paper>
        <div className="header">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
          <div className="provider-name"></div>
        </div>
        <div className="data"></div>
        <div></div>
      </Paper>
    </div>
  );
}
const mapToProps = (state, ownProps) => {

}
export default connect(mapToProps)(ForecastBlock);
