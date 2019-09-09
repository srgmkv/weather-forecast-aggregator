import providers from '../providersList';
import {actions} from '../actions'

const initProviderDataState = { //инит-стейт провайдера
  dataLoaded: null,
  loading: false,
  showloader: false,
  error: false,
  errorMessage: null,
  isButtonPressed: false,
  providerName: null
}

const initState = { // инит-стейт всего стора
  searchRequest: 'moscow',
  providersData: Object.keys(providers).map(providerName => {
    return {
      ...initProviderDataState, providerName
    }
  })
}

const reducer = (state = initState, action) => {

  //ф-я формирует объект, исходя из типа менямых даннных,
  //и передает его в редьюсер для нужного экшена для смены стейта.
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
    case actions.DATA_LOADED:
      return {
        ...state,
        providersData: updateData({ dataLoaded: action.payload })

      }

    case actions.API_ERRORED:
      return {
        ...state,
        providersData: updateData({ error: true, errorMessage: action.payload })
      }

    case actions.SEND_REQUEST:
      return {
        ...state,
        providersData: updateData({ loading: true })

      }

    case actions.CHANGE_INPUT:
      return {
        ...state,
        searchRequest: action.inputvalue
      }

    case actions.BUTTON_CLICK:
      return {
        ...state,
        providersData: updateData(null, 'click')
      }

    case actions.SHOW_LOADER:
      return {
        ...state,
        providersData: updateData({ showloader: true, loading: true })
      }

    default:
      return state
  }
}

export default reducer