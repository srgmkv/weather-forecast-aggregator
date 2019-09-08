import React from 'react'
import ProviderButton from '../view-components/ProviderButton'
import { handleClick } from '../actions'
import { connect } from 'react-redux'

//Компонент-контейнер, рендерит список кнопок погодных провайлеров
const ButtonPanel = ({ providersData, handleClick }) => {

  const buttons = providersData.map((provider, ind) => {
    const { providerName, isButtonPressed } = provider

    return <ProviderButton
      key={ind}
      providerName={providerName}
      isPressed={isButtonPressed}
      handleClick={() => handleClick(providerName)}
    />
  })

  return (
    <div className="button-panel">
      {buttons}
    </div>
  )
}

const mapToProps = state => ({ providersData: state.providersData })

export default connect(mapToProps, { handleClick })(ButtonPanel)

