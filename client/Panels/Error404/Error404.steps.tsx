/*
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */
import { Given, When, Then, Fusion } from 'jest-cucumber-fusion';
import { render, RenderResult } from '@testing-library/react';
import { Error404 } from '.';
import React, { ReactElement } from 'react';

let renderResult: RenderResult;
let component: ReactElement;

Given('a Error404 component', () => {
  component = <Error404 />;
});

When('it is rendered', () => {
  renderResult = render(component);
});

Then('it should display text', () => {
  const { getByText } = renderResult;
  expect(getByText('Error 404')).toBeInTheDocument();
});

Fusion('Error404.feature');
