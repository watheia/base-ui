import React from 'react';
import { PossibleSizes } from '@watheia/base-ui.theme.sizes';
import { Paragraph } from './paragraph';

export const Pelement = () => (
  <Paragraph element="p">p element</Paragraph>
);

export const PelementWithDifferentSize = () => (
  <Paragraph size={PossibleSizes.xl}>p element with xl size</Paragraph>
);

export const DivElement = () => (
  <Paragraph element="div">div element</Paragraph>
);

export const SpanElement = () => (
  <Paragraph element="span">span element</Paragraph>
);
