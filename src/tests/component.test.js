import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from '../components/Navbar';
import Quotes from '../components/Quotes';

describe('testing components', () => {
  test('testing navbar', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(getByText('Math Magicians')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<nav
  class="navbar"
>
  <div
    class="nav-items"
  >
    <h1>
      Math Magicians
    </h1>
    <ul
      class="list-items"
    >
      <li>
        <a
          class="menu-item"
          href="/"
        >
          Home
        </a>
      </li>
      <li>
        <a
          class="menu-item"
          href="/CalcuPage"
        >
          Calculator
        </a>
      </li>
      <li>
        <a
          class="menu-item"
          href="/quotes"
        >
          Quotes
        </a>
      </li>
    </ul>
  </div>
</nav>
`);
  });
  test('testing qoutes page', () => {
    const { container, getByText } = render(
      <MemoryRouter>
        <Quotes />
      </MemoryRouter>,
    );
    expect(getByText('Mwape 2022')).toBeInTheDocument();
    expect(container.lastChild).toMatchInlineSnapshot(`
<div>
  <p
    class="text"
  >
    Mathematics is not about numbers, equations, computations or algorithms: it is about understanding
  </p>
  <footer>
    <p>
      Mwape 2022
    </p>
  </footer>
</div>
`);
  });
});
