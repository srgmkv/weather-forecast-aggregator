import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import DayForecast from '../view-components/DayForecast'
import ProviderForecastView from '../view-components/ProviderForecastView'

class ProviderForecastBlock extends Component {
  state = {
    '1-Day': true,
    '5-Days': false,
    '10-Days': false,
  }

  clickHandler = (objKey) => { //переключаем активную кнопку (1-5-10 дней)
    if (!this.state[objKey]) {
      for (let prop in this.state) {
        this.setState({ [prop]: false })
      }
      this.setState({ [objKey]: true })
    }
  }

  render() {
    const { providerName, data } = this.props;

    const indexToSlice = (() => { //берем цифру дней из ключа кнопки в стейте
      for (let prop in this.state) {
        if (this.state[prop]) return parseInt(prop.match(/\d+/))
      }
    })();

    //генерация блоков для 1-5-10дн прогноза
    const dataByDayCondition = Array.isArray(data) && data
      .slice(0, indexToSlice)
      .map((item, ind) => {
        return (
          <DayForecast key={ind} item={item} />
        )
      })

    //генерация кнопок для 1-5-10дн прогноза
    const daysButtons = Object.keys(this.state).map((key, ind) => {
      return <Button
        key={ind}
        variant={this.state[key] ? 'contained' : 'outlined'}
        onClick={() => this.clickHandler(key)}
      >{key}</Button>
    })

    return (
      <ProviderForecastView
        providerName={providerName}
        daysButtons={daysButtons}
        dataByDayCondition={dataByDayCondition}
      />
    );
  }
}

const mapToProps = (state, ownProps) => {
  return {
    providerName: ownProps.providerName,
    data: ownProps.data
  }
}

export default connect(mapToProps)(ProviderForecastBlock)
