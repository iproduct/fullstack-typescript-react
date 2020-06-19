import React from 'react';
import { render } from '@testing-library/react';
import CommentsApp from './CommentsApp';

test('renders learn react link', () => {
  const { getByText } = render(<CommentsApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
