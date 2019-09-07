import providers from '../providersList';

const initProviderDataState = {
  dataLoaded: null,
  loading: false,
  error: false,
  errorMessage: '',
  isButtonPressed: false
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

  const updateData = data => (state.providersData.map(i =>
    i.providerName === action.providerName ? data : i))

  switch (action.type) {
    case 'DATA_LOADED':
      const providerUpdData = {
        ...initProviderDataState,
        dataLoaded: action.payload,
        providerName: action.providerName,
        isButtonPressed: true
      }
      return {
        ...state,
        providersData: updateData(providerUpdData)

      }

    case 'API_ERRORED':
      const erroredData = {
        ...initProviderDataState,
        error: true,
        errorMessage: action.payload,
        providerName: action.providerName,
        isButtonPressed: true
      }
      return {
        ...state,
        providersData: updateData(erroredData)

      }

    case 'SEND_REQUEST':
        return {
          ...state,
          providersData: state.providersData.map(item => {
            if (item.providerName === action.providerName) {
              return {
                ...initProviderDataState,
                providerName: action.providerName,
                isButtonPressed: item.isButtonPressed,
                loading: true
              }
            }
            return item
  
          })
        }

    case 'CHANGE_INPUT':
      return {
        ...state,
        searchRequest: action.inputvalue
      }

    case 'BUTTON_CLICK':
      return {
        ...state,
        providersData: state.providersData.map(item => {
          if (item.providerName === action.providerName) {
            return {
              ...initProviderDataState,
              providerName: action.providerName,
              isButtonPressed: !item.isButtonPressed
            }
          }
          return item

        })
      }

    default:
      return state
  }
}

export default reducer