#### Агрегатор прогнозов погоды

Для запуска приложения на локальном сервере в режиме разработки  склонируйте репозиторий  и выполните команды:  
##### `npm i`  
##### `npm start`  

Приложение расширяемо. Для этого нужно:
* в `src/providersListApi.js` добавить 
спецификацию API провайдера
* в `sagas/dataMapper.js` реализовать функцию для нормализации полученных данных от провайдера

\* 10 дневный прогноз доступен не для всех провайдеров

Приложение будет доступно в браузере по адресу  
 [http://localhost:3000](http://localhost:3000) 

 Демо здесь: [Click]( https://srgmkv.github.io/weather-forecast-aggregator/ )