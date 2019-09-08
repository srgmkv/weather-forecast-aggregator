import providers from '../providersList';

const initProviderDataState = {
  dataLoaded: null,
  loading: false,
  showloader: false,
  error: false,
  errorMessage: null,
  isButtonPressed: false,
  providerName: null
}

const initState = {
  searchRequest: 'moscow',
  providersData: providers.map(provider => {
    const { providerName } = provider
    return {
      ...initProviderDataState, providerName
    }
  })
}

const reducer = (state = initState, action) => {

  const updateData = (dataToChange, click = true) => {

    return (state.providersData.map(i =>
      i.providerName === action.providerName ?
        {
          ...initProviderDataState,
          providerName: action.providerName,
          isButtonPressed: click === 'click' ? !i.isButtonPressed : true,
          ...dataToChange
        }
        : i))
  }

  switch (action.type) {
    case 'DATA_LOADED':
      return {
        ...state,
        providersData: updateData({ dataLoaded: action.payload })

      }

    case 'API_ERRORED':
      return {
        ...state,
        providersData: updateData({ error: true, errorMessage: action.payload })
      }

    case 'SEND_REQUEST':
      return {
        ...state,
        providersData: updateData({ loading: true })

      }

    case 'CHANGE_INPUT':
      return {
        ...state,
        searchRequest: action.inputvalue
      }

    case 'BUTTON_CLICK':
      return {
        ...state,
        providersData: updateData(null, 'click')
      }

    case 'SHOW_LOADER':
      return {
        ...state,
        providersData: updateData({ showloader: true, loading: true })
      }

    default:
      return state
  }
}

export default reducer