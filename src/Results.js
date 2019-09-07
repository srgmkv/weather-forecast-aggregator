import React from 'react';
import ForecastBlock from './ForecastBlock'
import { providerList } from './providersList'
import { connect } from 'react-redux';

const Results = ({ state }) => {

   return (
    <div className="results">

    </div>
  );
}

const mapToProps = (state) => {
  return { state: state }
}

export default connect(mapToProps)(Results);
