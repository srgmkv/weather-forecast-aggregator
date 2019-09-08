import React from 'react';
import Button from '@material-ui/core/Button';

const ProviderButton = ({ handleClick, providerName, isPressed }) => {
  return (
    <Button size="small" color="secondary"
      onClick={handleClick}
      variant={isPressed ? 'contained' : 'outlined'}>{providerName}</Button>
  );
}

export default ProviderButton;

