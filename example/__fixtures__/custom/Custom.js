/* @flow */
/* eslint-disable jsx-a11y/accessible-emoji */

import * as React from 'react';
import { styled } from 'linaria/react';

const Container = styled.div`
  padding: 24px;
  font-size: 24px;
`;

export default class Custom extends React.Component<{}> {
  render() {
    return <Container>🌹 🌻 🌷 🌿 🌵 🌾 🌼⁣</Container>;
  }
}

export const meta = {
  title: 'Custom 🎉',
  description: 'Custom React Component',
  link: 'custom-component',
};
