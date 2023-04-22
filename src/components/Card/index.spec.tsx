import { render, screen, within } from '@testing-library/react';
import Card from '.';

describe('<Card>', () => {
  it('should render component by default', () => {
    render(<Card />);

    const divElement = screen.getByRole('contentinfo');

    expect(divElement).toBeVisible();
    expect(within(divElement).getByRole('heading')).toBeVisible();
  });
});
