import { takeEvery, call, put, delay } from "redux-saga/effects"
import axios from 'axios';
import providers from '../providersList';

export default function* watchInput() {
  yield takeEvery('SEND_REQUEST', handleSendRequest);
}

function* handleSendRequest(action) {
  const { payload: { providerName, location } } = action
 
const [provider] = providers.filter(item => item.providerName === providerName)

  const url = provider.getUrl(location)
  try {
    const dataFromApi = yield call(fetchForecast, url)
    console.log('dataFromApi', dataFromApi)

    yield put({ type: 'DATA_LOADED', payload: dataFromApi.data, providerName })

  } catch (error) {
    yield put({ type: 'API_ERRORED', payload: error, providerName })
  }
}


function fetchForecast(queryString) {
  return axios.get(`${queryString}`)
}



//вспомогательная ф-я, преобразующая полченные данные в нужный вид
function fetchedDataMapper(dataToMap) {
  const items = dataToMap.data.items
  return items
    .map((item) => ({
      id: item.id,
      url: item.html_url,
      name: item.full_name,
      stars: item.stargazers_count,
      watchers: item.watchers_count
    }))
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 10)
}