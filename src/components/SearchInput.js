import React from 'react'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const changeInput = (ev = 'toEmpty') => {
  return {
    type: 'CHANGE_INPUT',
    inputvalue: ev === 'toEmpty' ? '' : ev.target.value
  }
}

const useStyles = makeStyles(theme => ({
  dense: {
    marginTop: '15px',
  }
}));

const SearchInput = ({ inputValue, changeInput }) => {
  const classes = useStyles();
  return (
    <div className="header">
      <TextField
        id="outlined"
        label="Location"
        placeholder="Type location"
        className={classes.dense}
        margin="dense"
        variant="outlined"
        onChange={changeInput}
        onClick={() => changeInput('toEmpty')}
        value={inputValue}
      />
      <div className="caption">WEATHER FORECAST AGGREGATOR</div>
    </div>
  );
}
const mapToProps = (state) => ({ inputValue: state.searchRequest })

export default connect(mapToProps, { changeInput })(SearchInput)

