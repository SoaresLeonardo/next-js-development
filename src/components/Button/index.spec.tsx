/* eslint-disable react/no-unescaped-entities */
import { render } from '@testing-library/react';
import Button from '.';
describe('Button', () => {
  it('should render', () => {
    const { getByText, getByRole } = render(<Button>button</Button>);

    const buttonElement = getByRole('button');
    const buttonTextElement = getByText('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it(`should render 'Carregando...' text when isLoading was passed`, () => {
    const { getByText } = render(<Button isLoading>button</Button>);

    const isLoadingtext = getByText('Loading');

    expect(isLoadingtext).toBeInTheDocument();
  });

  it('should render the button width backgroundColor green by default', () => {
    const { getByRole } = render(<Button color="green">button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toHaveStyle({
      backgroundColor: 'green'
    });
  });

  it('should render the button width backgroundColor red by default', () => {
    const { getByRole } = render(<Button color="red">button</Button>);

    const buttonElement = getByRole('button');

    expect(buttonElement).toHaveStyle({
      backgroundColor: 'red'
    });
  });
});
