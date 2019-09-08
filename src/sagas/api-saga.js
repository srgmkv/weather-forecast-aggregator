import { takeEvery, call, put, select, delay } from "redux-saga/effects"
import axios from 'axios';
import providers from '../providersList';
import dataMapper from './dataMapper'

const getProviderData = state => state.providersData;
const getQueryString = state => state.searchRequest;

export default function* watchInput() {
  yield takeEvery('BUTTON_CLICK', handleSendRequest);
}

function* handleSendRequest(action) {
  const { providerName } = action
  const [provider] = providers.filter(item => item.providerName === providerName)
  const location = yield select(getQueryString);
  const url = provider.getUrl(location);
  const providersData = yield select(getProviderData);
  const [currentProvider] = providersData
    .filter(item => item.providerName === providerName);

  try {
    if (currentProvider.isButtonPressed) {
      yield put({ type: 'SEND_REQUEST', providerName });
      const dataFromApi = yield call(fetchForecast, url);
      const dataMapped = dataMapper(dataFromApi.data, providerName);
      yield delay(1500);
      yield put({ type: 'DATA_LOADED', payload: dataMapped, providerName });
    }
  } catch (error) {
    yield put({ type: 'API_ERRORED', payload: error, providerName });
  }
}

function fetchForecast(queryString) {
  return axios.get(`${queryString}`);
}
