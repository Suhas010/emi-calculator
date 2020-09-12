import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table ', () => {
  it('should render successfully', () => {
    const { container } = render(<Table data={[]} />);
    expect(container).toMatchSnapshot();
  });
});
