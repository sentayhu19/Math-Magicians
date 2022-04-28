import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

describe('Header page of the App', () => {
  test('Render Header component', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
  });
});
