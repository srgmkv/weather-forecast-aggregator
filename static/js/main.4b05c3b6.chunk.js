(window["webpackJsonpw-agregator"]=window["webpackJsonpw-agregator"]||[]).push([[0],{63:function(e,t,r){e.exports=r(94)},92:function(e,t,r){},93:function(e,t,r){},94:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(10),o=r.n(c),i=r(19),s=r(22),u=r(18),d={WeatherBit:{providerName:"WeatherBit",hostName:"http://api.weatherbit.io/v2.0/forecast/daily",apiKey:"ea37e393970247b18d43d2091aa7b95e",getUrl:function(e){return"".concat(this.hostName,"?city=").concat(e,"&key=").concat(this.apiKey)}},OpenWeather:{providerName:"OpenWeather",hostName:"https://api.openweathermap.org/data/2.5/forecast",apiKey:"2b0c757f5810cdb1eb3a945f283be600",getUrl:function(e){return"".concat(this.hostName,"?q=").concat(e,"&appid=").concat(this.apiKey)}},WW_Online:{providerName:"WW_Online",hostName:"http://api.worldweatheronline.com/premium/v1/weather.ashx",apiKey:"f87c5c2e9e064353a1180848190709",getUrl:function(e){return"".concat(this.hostName,"?q=").concat(e,"&key=").concat(this.apiKey,"&format=json&num_of_days=10")}}},l=d,p={};!function(){var e;for(e in d)p[e]=d[e].providerName}();var m={BUTTON_CLICK:"BUTTON_CLICK",SHOW_LOADER:"SHOW_LOADER",DATA_LOADED:"DATA_LOADED",API_ERRORED:"API_ERRORED",SEND_REQUEST:"SEND_REQUEST",CHANGE_INPUT:"CHANGE_INPUT"};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){Object(u.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={dataLoaded:null,loading:!1,showloader:!1,error:!1,errorMessage:null,isButtonPressed:!1,providerName:null},E={searchRequest:"moscow",providersData:Object.keys(l).map(function(e){return f({},h,{providerName:e})})},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=function(r){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.providersData.map(function(e){return e.providerName===t.providerName?f({},h,{providerName:t.providerName,isButtonPressed:"click"!==a||!e.isButtonPressed},r):e})};switch(t.type){case m.DATA_LOADED:return f({},e,{providersData:r({dataLoaded:t.payload})});case m.API_ERRORED:return f({},e,{providersData:r({error:!0,errorMessage:t.payload})});case m.SEND_REQUEST:return f({},e,{providersData:r({loading:!0})});case m.CHANGE_INPUT:return f({},e,{searchRequest:t.inputvalue});case m.BUTTON_CLICK:return f({},e,{providersData:r(null,"click")});case m.SHOW_LOADER:return f({},e,{providersData:r({showloader:!0,loading:!0})});default:return e}},y=r(54),b=r(58),N=r(40),D=r(30),w=r.n(D),g=r(16),j=r(55),A=r.n(j);var _=function(e,t){switch(t){case p.WeatherBit:return function(e){return e.data.slice(0,10).map(function(e){return{date:e.datetime,temp:Math.round(e.temp),pressure:Math.round(e.pres),wind:e.wind_spd.toFixed(1),desc:e.weather.description,humidity:e.rh}})}(e);case p.OpenWeather:return function(e){return e.list.filter(function(e){return e.dt_txt.includes("15:00:00")}).slice(0,10).map(function(e){return{date:e.dt_txt.substr(0,10),temp:Math.round(e.main.temp-273),pressure:Math.round(e.main.pressure),wind:e.wind.speed.toFixed(1),desc:e.weather[0].description,humidity:e.main.humidity}})}(e);case p.WW_Online:return function(e){return e.data.weather.map(function(e){return{date:e.date,temp:Math.round(e.avgtempC),pressure:e.hourly[4].pressure,wind:(e.hourly[4].windspeedKmph/3.6).toFixed(1),desc:e.hourly[4].weatherDesc[0].value,humidity:e.hourly[4].humidity}})}(e);default:return}};var k=w.a.mark(P),C=w.a.mark(S),T=w.a.mark(B),R=function(e){return e.providersData},x=function(e){return e.searchRequest};function P(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.f)(m.BUTTON_CLICK,B),Object(g.f)(m.BUTTON_CLICK,S)]);case 2:case"end":return e.stop()}},k)}function S(e){var t,r,a,n;return w.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.providerName,c.next=3,Object(g.c)(1e3);case 3:return c.next=5,Object(g.e)(R);case 5:if(r=c.sent,a=r.filter(function(e){return e.providerName===t}),n=Object(N.a)(a,1),!n[0].loading){c.next=10;break}return c.next=10,Object(g.d)({type:m.SHOW_LOADER,providerName:t});case 10:case"end":return c.stop()}},C)}function B(e){var t,r,a,n,c,o,i,s,u;return w.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.providerName,d.next=3,Object(g.e)(x);case 3:return r=d.sent,a=l[t].getUrl(r),d.next=7,Object(g.e)(R);case 7:if(n=d.sent,c=n.filter(function(e){return e.providerName===t}),o=Object(N.a)(c,1),i=o[0],d.prev=9,!i.isButtonPressed){d.next=21;break}return d.next=13,Object(g.d)({type:m.SEND_REQUEST,providerName:t});case 13:return d.next=15,Object(g.b)(I,a);case 15:return s=d.sent,u=_(s.data,t),d.next=19,Object(g.c)(2e3);case 19:return d.next=21,Object(g.d)({type:m.DATA_LOADED,payload:u,providerName:t});case 21:d.next=28;break;case 23:return d.prev=23,d.t0=d.catch(9),console.log("error when fetching data from API:",d.t0),d.next=28,Object(g.d)({type:m.API_ERRORED,payload:d.t0,providerName:t});case 28:case"end":return d.stop()}},T,null,[[9,23]])}function I(e){return A.a.get("".concat(e))}r(91);var L=r(132),W=function(e){var t=e.handleClick,r=e.providerName,a=e.isPressed;return n.a.createElement(L.a,{size:"small",color:"secondary",onClick:t,variant:a?"contained":"outlined"},r)},U=Object(i.b)(function(e){return{providersData:e.providersData}},{handleClick:function(e){return{type:m.BUTTON_CLICK,providerName:e}}})(function(e){var t=e.providersData,r=e.handleClick,a=t.map(function(e,t){var a=e.providerName,c=e.isButtonPressed;return n.a.createElement(W,{key:t,providerName:a,isPressed:c,handleClick:function(){return r(a)}})});return n.a.createElement("div",{className:"button-panel"},a)}),K=r(37),H=r(27),M=r(56),G=r(57),q=r(59),F=function(e){var t=e.item,r=e.day,a=e.month;return n.a.createElement("div",{className:"weather-indicators"},n.a.createElement("div",{className:"date"},r," ",a,"  "),n.a.createElement("div",{className:"temp"},t.temp,"\xb0C"),n.a.createElement("div",{className:"press"},n.a.createElement("span",null,"P, hpa:")," ",t.pressure),n.a.createElement("div",{className:"wind"},n.a.createElement("span",null,"W, m/s:"),"  ",t.wind),n.a.createElement("div",{className:"hum"},n.a.createElement("span",null,"H, %:"),"  ",t.humidity),n.a.createElement("div",{className:"desc"},t.desc))},J=r(128),Q=r(127),z=(r(92),function(e){var t=e.providerName,r=e.daysButtons,a=e.dataByDayCondition;return n.a.createElement("div",{className:"provider-data-block"},n.a.createElement(Q.a,null,n.a.createElement("div",{className:"header"},n.a.createElement(J.a,{color:"primary","aria-label":"outlined primary button group"},r),n.a.createElement("div",{className:"provider-name"},t)),n.a.createElement("div",{className:"forecast-block"},a||"Something went wrong")))}),V=function(e){function t(){var e,r;Object(K.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(r=Object(M.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(n)))).state={"1-Day":!0,"5-Days":!1,"10-Days":!1},r.clickHandler=function(e){if(!r.state[e]){var t;for(t in r.state)r.setState(Object(u.a)({},t,!1));r.setState(Object(u.a)({},e,!0))}},r}return Object(q.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.providerName,a=t.data,c=function(){var t;for(t in e.state)if(e.state[t])return parseInt(t.match(/\d+/))}(),o=Array.isArray(a)&&a.slice(0,c).map(function(e,t){var r=new Date(e.date).getDate(),a=new Date(e.date).getMonth();return n.a.createElement(F,{key:t,item:e,day:r<10?"0".concat(r):r,month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a]})}),i=Object.keys(this.state).map(function(t,r){return n.a.createElement(L.a,{size:"small",key:r,variant:e.state[t]?"contained":"outlined",onClick:function(){return e.clickHandler(t)}},t)});return n.a.createElement(z,{providerName:r,daysButtons:i,dataByDayCondition:o||a})}}]),t}(a.Component),X=Object(i.b)(function(e,t){return{providerName:t.providerName,data:t.data}})(V),Y=r(129),Z=function(){return n.a.createElement("div",{className:"loader"},n.a.createElement(Y.a,null),n.a.createElement("br",null),n.a.createElement(Y.a,{color:"secondary"}))},$=Object(i.b)(function(e){return{providersData:e.providersData}})(function(e){var t=e.providersData.map(function(e,t){return e.showloader?n.a.createElement(Z,{key:t}):!(null===e.dataLoaded&&!e.error)&&n.a.createElement(X,{key:t,providerName:e.providerName,loading:e.loading,data:e.error?e.errorMessage.message:e.dataLoaded})});return n.a.createElement("div",{className:"results"},t)}),ee=r(131),te=r(130),re=Object(te.a)(function(e){return{dense:{marginTop:"15px"}}}),ae=Object(i.b)(function(e){return{inputValue:e.searchRequest}},{changeInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"toEmpty";return{type:"CHANGE_INPUT",inputvalue:"toEmpty"===e?"":e.target.value}}})(function(e){var t=e.inputValue,r=e.changeInput,a=re();return n.a.createElement("div",{className:"header"},n.a.createElement(ee.a,{id:"outlined",label:"Location",placeholder:"Type location",className:a.dense,margin:"dense",variant:"outlined",onChange:r,onClick:function(){return r("toEmpty")},value:t}),n.a.createElement("div",{className:"caption"},"WEATHER FORECAST AGGREGATOR"))}),ne=(r(93),function(){return n.a.createElement("div",{className:"App"},n.a.createElement(ae,null),n.a.createElement(U,null),n.a.createElement($,null))}),ce=Object(b.a)(),oe=Object(s.createStore)(O,Object(y.composeWithDevTools)(Object(s.applyMiddleware)(ce)));ce.run(P),o.a.render(n.a.createElement(i.a,{store:oe},n.a.createElement(ne,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.4b05c3b6.chunk.js.map