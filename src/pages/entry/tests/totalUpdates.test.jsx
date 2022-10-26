import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Options from '../Options';
import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

test('Update scoop subtotal when scoops change', async () => {
  //const user = userEvent.setup();
  render(<Options optionType='scoops'/>, { wrapper: OrderDetailsProvider});

  //total starts at 0
  const scoopsSubTotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubTotal).toHaveTextContent('0.00');

  //update vanilla scoops to 1 and check total - won't populate until we get response from server
  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla'});
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, '1'); //spec requires a string
  expect(scoopsSubTotal).toHaveTextContent('2.00');

  //update chocolate scoops to 2 to check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, '2');
  expect(scoopsSubTotal).toHaveTextContent('6.00');

});