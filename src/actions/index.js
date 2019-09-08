export const actions = {
  buttonClick: `BUTTON_CLICK`,
  showLoader: 'SHOW_LOADER'
}

export const handleClick = (providerName) => {
  return {
    type: actions.buttonClick,
    providerName
  }
}

export const showLoader = (providerName) => {
  return {
    type: actions.showLoader,
    providerName
  }
}


