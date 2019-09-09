import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import './ProviderForecastView.scss'

const ProviderForecastBlock = ({ providerName, daysButtons, dataByDayCondition }) => {

  return (
    <div className="provider-data-block">
      <Paper>
        <div className="header">
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            {daysButtons}
          </ButtonGroup>
          <div className="provider-name">{providerName}</div>
        </div>
        <div className="forecast-block">{dataByDayCondition || 'Something went wrong'}</div>
      </Paper>
    </div>
  )
}

export default ProviderForecastBlock;

