import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

function SummaryForm() {

  const [ termsAndConditionsChecked, setTermsAndConditionsChecked ] = useState(false);

  const checkboxLabel = ( <span>Agree to <span style={{color: 'blue'}}>Terms and Conditions</span></span> );

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
