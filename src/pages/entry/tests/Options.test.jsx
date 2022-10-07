import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('Displays image for each scoop from the server', async () => {
  render(<Options optionType='scoops'/>);

  //find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(3);

  //confirm alt text of images
  const expectedAltText = ['Chocolate scoop', 'Vanilla scoop', 'Strawberry scoop'];
  const actualAltText = scoopImages.map((element) => element.alt);
  expect(actualAltText).toEqual(expectedAltText);

})

test('Displays topping for each scoop from the server', async () => {
  render(<Options optionType='toppings'/>);

  //find images
  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i }); 
  expect(toppingImages).toHaveLength(3);

  //confirm images
  const expectedAltText = ['Cherries topping', 'M&Ms topping', 'Hot fudge topping'];
  const actualAltText = toppingImages.map(element => element.alt);
  expect(actualAltText).toEqual(expectedAltText);
})