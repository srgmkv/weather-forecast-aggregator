import React from 'react'
import ProviderForecastBlock from './ProviderForecastBlock'
import { connect } from 'react-redux'
import Loader from '../view-components/Loader'

//Контейнер рендерит блок, где отображуются все вызванные провайдеры
const Results = ({ providersData }) => {

  const results = providersData.map((item, ind) => {
    if (item.showloader) {
      return <Loader key={ind}/>
    }

    return item.dataLoaded !== null || item.error ?
      <ProviderForecastBlock
        key={ind}
        providerName={item.providerName}
        loading={item.loading}
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

export default connect(mapToProps)(Results)
