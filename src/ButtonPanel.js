import React from 'react';
import Button from './Button';
import providers from './providersList'



const ButtonPanel = () => {

  const buttons = providers.map(provider => {
    const { providerName } = provider
    return <Button providerName={providerName}/>

  })

  return (
    <div className="button-panel">
      {buttons}
    </div>
  );
}


export default ButtonPanel

