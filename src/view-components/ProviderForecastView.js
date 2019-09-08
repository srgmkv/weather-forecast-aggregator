import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';

const ProviderForecastBlock = ({ providerName, daysButtons, dataByDayCondition }) => {

  return (
    <div className="forecast-block">
      <Paper>
        <div className="header">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            {daysButtons}
          </ButtonGroup>
          <div className="provider-name">{providerName}</div>
        </div>
        <div className="data">{dataByDayCondition || 'Something went wrong'}</div>
      </Paper>
    </div>
  )
}

export default ProviderForecastBlock;

