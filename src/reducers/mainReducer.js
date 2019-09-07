import providers from '../providersList';

const initState = {
  searchRequest: ''
}
const initProviderDataState = {
  dataLoaded: [],
  loading: false,
  error: false,
  errorMessage: '',
  isButtonPressed: false
}

providers.forEach(provider => {
  initState[provider.providerName] = initProviderDataState
})

const reducer = (state = initState, action) => {
  console.log('action.providerName', action.providerName)
  console.log('state', state)
  switch (action.type) {

    case 'DATA_LOADED':
      const providerData = {
        ...initProviderDataState,
        dataLoaded: action.payload,
        isButtonPressed: true
      }
      return {
        ...state,
        [action.providerName]: providerData

      }

    case 'API_ERRORED':
      const erroredData = {
        ...initProviderDataState,
        error: true,
        errorMessage:action.payload ,
        isButtonPressed: true
      }
      return {
        ...state,
        [action.providerName]: erroredData

      }

    case 'SEND_REQUEST':
      return {
        ...state,
        [action.payload.providerName]: { ...initProviderDataState, loading: true }

      }

    case 'CHANGE_INPUT':
      return {
        ...state,
        searchRequest: action.inputvalue
      }

    default:
      return state
  }
}

export default reducer