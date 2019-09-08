import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from '../view-components/Loader'
import { showLoader } from '../actions'

class LoaderWrapper extends Component {

  componentDidMount() {
    const { providerName, dataIsloading, showLoader } = this.props
    setTimeout(() => {
      if (dataIsloading) {
        showLoader(providerName)
      }
    }, 500);
  }

  render() {
    const { providerName } = this.props;

    //const showLoaderStatus = 
    return (
      loading && <Loader />
    );
  }
}

const mapToState = (state, ownProps) => {
  return {
    dataIsloading: ownProps.loading
  }
}

export default connect(mapToState, { showLoader })(LoaderWrapper);