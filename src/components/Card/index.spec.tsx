import { fireEvent, render, screen } from '@testing-library/react';
import Card from '.';

describe('<Card>', () => {
  it('should render component by default', () => {
    render(<Card />);

    const divElement = screen.getByRole('contentinfo');

    expect(divElement).toBeVisible();
  });

  fit('should render async component', async () => {
    render(<Card />);

    const mainElement = await screen.quer('main');

    expect(mainElement).toBeVisible();
  });

  fit('should open component when button was clicked', async () => {
    render(<Card />);

    const buttonElement = screen.getByRole('main', { name: 'open' });

    expect(buttonElement).toBeVisible();

    fireEvent.click(buttonElement);

    const mainElement = screen.getByRole('main');

    expect(mainElement).toBeVisible();
  });
});
