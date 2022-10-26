import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event';


test('Checkbox is unchecked by default', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'Agree to Terms and Conditions'});
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
})

test('Checking checkbox enables button', () => {  
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'Agree to Terms and Conditions'});
  const button = screen.getByRole('button', { name: 'Submit Order'});

  expect(button).toBeDisabled();
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('UNchecking checkbox AGAIN disables button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'Agree to Terms and Conditions'});
  const button = screen.getByRole('button', { name: 'Submit Order'});

  expect(button).toBeDisabled();
  userEvent.click(checkbox);
  expect(button).toBeEnabled();
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

test('pop-up responds to hover', async () => {
  render(<SummaryForm />);
  //pop over starts hidden
  const noPopUp = screen.queryByText(/you must agree to our terms and conditions to confirm your order/i);
  //expect(noPopUp).toBeNull();
  expect(noPopUp).not.toBeInTheDocument();

  //popover appears upon moveover of checkbox label
  const termsAndConditions = screen.getByText(/Terms and Conditions/i);
  userEvent.hover(termsAndConditions)

  const popUp = screen.getByText(/you must agree to our terms and conditions to confirm your order/i);
  expect(popUp).toBeInTheDocument();

  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);

  //https://testing-library.com/docs/guide-disappearance
  await waitForElementToBeRemoved( () => screen.queryByText(/you must agree to our terms and conditions to confirm your order/i));
})

/**
 * Fixing the not wrapped in act() issue in testting:
 * https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
 */
