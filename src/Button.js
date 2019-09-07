import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

const ButtonComp = ({ searchRequest, providerId, name, sendRequest }) => {
  return (

    <Button size="small" color="secondary"
      onClick={() => sendRequest(searchRequest, providerId)}

      variant="outlined">{name}</Button>

  );
}

const mapToProps = (state, ownProps) => {
  return {
    searchRequest: state.searchRequest,
    providerId: ownProps.providerId,
    name:ownProps.name
  }
}

export default connect(mapToProps, { sendRequest })(ButtonComp);




export function sendRequest(location, providerId) {
  return {
    type: `SEND_REQUEST`,
    request: { providerId, location }
  }
}