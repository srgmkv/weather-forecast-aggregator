import { takeEvery, all, call, put, select, delay } from "redux-saga/effects"
import axios from 'axios'
import providers from '../providersList'
import dataMapper from './dataMapper'
import {actions} from '../actions'

const getProviderData = state => state.providersData
const getQueryString = state => state.searchRequest

export default function* watchClick() {
  yield all([takeEvery(actions.BUTTON_CLICK, handleSendRequest),
  takeEvery(actions.BUTTON_CLICK, loaderHandler)])

}

function* loaderHandler(action) {
  const { providerName } = action
  yield delay(500)
  const providersData = yield select(getProviderData)
  const [currentProvider] = providersData
    .filter(item => item.providerName === providerName)

  if (currentProvider.loading) {
    yield put({ type: actions.SHOW_LOADER, providerName })
  }
}

function* handleSendRequest(action) {
  const { providerName } = action
  const [provider] = providers.filter(item => item.providerName === providerName)
  const location = yield select(getQueryString)
  const url = provider.getUrl(location)
  const providersData = yield select(getProviderData)
  const [currentProvider] = providersData
    .filter(item => item.providerName === providerName)

  try {

    if (currentProvider.isButtonPressed) {
      yield put({ type: actions.SEND_REQUEST, providerName })
      const dataFromApi = yield call(fetchForecast, url)
      const dataMapped = dataMapper(dataFromApi.data, providerName)
      yield delay(1500);
      yield put({ type: actions.DATA_LOADED, payload: dataMapped, providerName })
    }
  } catch (error) {
    console.log('error when fetching data from API:', error)
    yield put({ type: actions.API_ERRORED, payload: error, providerName })
  }
}

function fetchForecast(queryString) {
  return axios.get(`${queryString}`)
}
