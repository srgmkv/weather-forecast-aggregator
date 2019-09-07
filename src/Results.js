import React from 'react';
import ForecastBlock from './ForecastBlock'
import { connect } from 'react-redux';

const Results = ({ providersData }) => {

  const results = providersData.map((item, ind) => {
    return item.dataLoaded !== null || item.error ?
      <ForecastBlock key={ind} providerName={item.providerName}
        data={item.error ? item.errorMessage.message : item.dataLoaded}
      /> : false
  })


  return (
    <div className="results">
      {results}
    </div>
  );
}

const mapToProps = (state) => {
  return { providersData: state.providersData }
}

export default connect(mapToProps)(Results);
