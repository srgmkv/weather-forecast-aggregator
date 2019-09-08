import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loader = () => {

  return (
    <div className={"loader"}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  );
}

export default Loader;