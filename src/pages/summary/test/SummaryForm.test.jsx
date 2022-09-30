import { screen, render, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";


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
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();


});

test('UNchecking checkbox AGAIN disables button', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'Agree to Terms and Conditions'});
  const button = screen.getByRole('button', { name: 'Submit Order'});

  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});

