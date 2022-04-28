import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../quotes';

describe('Quote page of the App', () => {
  test('Builds the snapchot of the Quote component safely', () => {
    const rend = renderer.create(<Quote />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Quote component', () => {
    render(<Quote />);
  });
});
