import { render, screen, fireEvent } from '@testing-library/react';
import Example from './page';

describe('Example component', () => {
  it('should render Example with hello message', () => {
    render(<Example />);
  });
  it('should change message on button click', () => {
    render(<Example />);

    const buttonElement = screen.getByText(/change message/i);
    const messageElement = screen.getByText(/message test/i);

    expect(messageElement).toBeInTheDocument();

    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    const updateMessageElement = screen.getByText(/new message/i);

    expect(updateMessageElement).toBeInTheDocument();

    const oldMessage = screen.queryByText(/message test/i);

    expect(oldMessage).not.toBeInTheDocument();
  });
});
