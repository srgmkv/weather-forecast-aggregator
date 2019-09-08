import React from 'react';
import ProviderButton from './ProviderButton';

import { connect } from 'react-redux'

const ButtonPanel = ({ providersData }) => {

  const buttons = providersData.map((provider, ind) => {
    const { providerName, isButtonPressed } = provider
    return <ProviderButton key={ind} providerName={providerName} isPressed={isButtonPressed} />

  })

  return (
    <div className="button-panel">
      {buttons}
    </div>
  );
}

const mapToProps = state => ({ providersData: state.providersData })

export default connect(mapToProps)(ButtonPanel)

