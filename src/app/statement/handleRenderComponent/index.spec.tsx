import { render, screen } from '@testing-library/react';
import { ComponentProps, handleRenderComponent } from '.';

describe('handleRenderComponent', () => {
  it('should render admin', () => {
    render(handleRenderComponent('admin'));

    expect(screen.getByText('Admin')).toBeVisible();
  });

  it('should render user', () => {
    render(handleRenderComponent('user'));

    expect(screen.getByText('User')).toBeVisible;
  });

  it('should render nothing when trying passed invalid params', () => {
    const { container } = render(
      handleRenderComponent('string' as ComponentProps)
    );

    expect(container).toBeEmptyDOMElement();
  });
});
