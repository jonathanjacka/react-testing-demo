import { render, screen } from '@testing-library/react';

import Options from '../Options';

test('Displays image for each scoop from the server', () => {
  render(<Options optionType='scoops'/>);

  //find images
  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(3);

  //confirm alt text of images
  const expectedAltText = ['Chocolate', 'Vanilla', 'Strawberry'];
  const actualAltText = scoopImages.map((element) => element.alt);
  expect(actualAltText).toEqual(expectedAltText);

})