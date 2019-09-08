export const actions = {
  BUTTON_CLICK: `BUTTON_CLICK`,
  SHOW_LOADER: 'SHOW_LOADER',
  DATA_LOADED: 'DATA_LOADED',
  API_ERRORED: 'API_ERRORED',
  SEND_REQUEST: 'SEND_REQUEST',
  CHANGE_INPUT: 'CHANGE_INPUT',
}

export const handleClick = (providerName) => {
  return {
    type: actions.BUTTON_CLICK,
    providerName
  }
}

export const showLoader = (providerName) => {
  return {
    type: actions.SHOW_LOADER,
    providerName
  }
}


