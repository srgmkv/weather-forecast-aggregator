import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

const ButtonComp = ({ searchRequest, providerName, sendRequest }) => {
  return (

    <Button size="small" color="secondary"
      onClick={() => sendRequest(searchRequest, providerName)}

      variant="outlined">{providerName}</Button>

  );
}

const mapToProps = (state, ownProps) => {
  return {
    searchRequest: state.searchRequest,
    providerName:ownProps.providerName
  }
}

export default connect(mapToProps, { sendRequest })(ButtonComp);




export function sendRequest(location, providerName) {
  return {
    type: `SEND_REQUEST`,
    payload: { providerName, location }
  }
}