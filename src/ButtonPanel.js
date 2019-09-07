import React from 'react';
import Button from './Button';

import { connect } from 'react-redux'



const ButtonPanel = ({ providersData }) => {

  const buttons = providersData.map((provider, ind) => {
    const { providerName, isButtonPressed } = provider
    return <Button key={ind} providerName={providerName} isPressed={isButtonPressed} />

  })

  return (
    <div className="button-panel">
      {buttons}
    </div>
  );
}

const mapToProps = state => ({ providersData: state.providersData })

export default connect(mapToProps)(ButtonPanel)

