import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import Home from 'src/pages';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('link element should have attributes', () => {
    const { getByText } = render(<Home />, {});
    const linkEl = getByText('Go to repository');
    expect(linkEl).toHaveAttribute(
      'href',
      'https://github.com/anandaprabawa/nextjs-template',
    );
    expect(linkEl).toHaveAttribute('target', '_blank');
  });
});
