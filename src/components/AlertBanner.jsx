import React from 'react';
import { Alert } from 'react-bootstrap';

function AlertBanner( { message, variant } ) {
  return (
<Alert variant={variant}>{message}</Alert>
  )
}

AlertBanner.defaultProps = {
  message: 'An error occured, please try again later',
  variant: 'danger'
}

export default AlertBanner
