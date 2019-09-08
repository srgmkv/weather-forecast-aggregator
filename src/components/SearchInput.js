import React from 'react'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'

const changeInput = (ev) => {
  return {
    type: 'CHANGE_INPUT',
    inputvalue: ev.target.value
  }
}

const SearchInput = ({ inputValue, changeInput }) => {
  return (
    <TextField
      id="outlined-with-placeholder"
      label="With placeholder"
      placeholder="Placeholder"
      margin="normal"
      variant="outlined"
      onChange={changeInput}
      value={inputValue}
    />
  );
}
const mapToProps = (state) => ({ inputValue: state.searchRequest })

export default connect(mapToProps, { changeInput })(SearchInput)

