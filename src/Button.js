import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

const ButtonComp = ({ handleClick, providerName, isPressed }) => {
  return (

    <Button size="small" color="secondary"
      onClick={() => handleClick(providerName)}

      variant={isPressed ? 'contained' : 'outlined'}>{providerName}</Button>

  );
}

const mapToProps = (state, ownProps) => {
  return {
    searchRequest: state.searchRequest,
    providerName: ownProps.providerName,
    isPressed: ownProps.isPressed
  }
}

export default connect(mapToProps, { sendRequest, handleClick })(ButtonComp);


function handleClick(providerName) {
  return {
    type: `BUTTON_CLICK`,
    providerName
  }
}

export function sendRequest(location, providerName) {
  return {
    type: `SEND_REQUEST`,
    providerName, location
  }
}