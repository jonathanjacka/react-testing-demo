import React, { useState } from 'react'
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

function SummaryForm() {

  const [ termsAndConditionsChecked, setTermsAndConditionsChecked ] = useState(false);

  const popOver = (
    <Popover id="popover-basic">
      <Popover.Body>
        You must agree to our terms and conditions to confirm your order
      </Popover.Body>
    </Popover>
  )

  const checkboxLabel = ( 
    <span>
      Agree to 
      <OverlayTrigger placement='right' overlay={popOver}>
        <span style={{color: 'blue'}}> Terms and Conditions</span>
      </OverlayTrigger>
    </span> 
  );

  const handleTermsAndConditions = (event) => {
    setTermsAndConditionsChecked(event.target.checked);
  }

  return (
      <Form>
        <Form.Group controlId='termsAndConditions'>
          <Form.Check 
            type='checkbox'
            checked={termsAndConditionsChecked}
            onChange={handleTermsAndConditions}
            label={checkboxLabel}
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!termsAndConditionsChecked}>
          Submit Order
        </Button>
      </Form>
  )
}

export default SummaryForm
