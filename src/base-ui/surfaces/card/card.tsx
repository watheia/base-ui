import React from 'react';
import classNames from 'clsx';
import * as styles from './card.module.scss';
import {
  elevationClass,
  ElevationHeight,
} from '@watheia/base-ui.css-components.elevation';
import {
  roundnessClass,
  Roundness,
} from '@watheia/base-ui.css-components.roundness';
import { backgrounds } from '@watheia/base-ui.surfaces.background';

export type CardProps = {
  /**
   * Controls the shadow cast by the card, to generate a "stacking" effects.
   * For example, a modal floating over elements may have a 'high' elevation
   */
  elevation?: ElevationHeight;
  /** Controls the border radius of the card */
  roundness?: Roundness;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A wrapper resembling a physical card, grouping elements and improve readability.
 * @example
 * <Card elevation="medium">
 * 	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </Card>
 */
export function Card({
  className,
  elevation = 'low',
  roundness = 'normal',
  ...rest
}: CardProps) {
  return (
    <div
      data-testid="watheia.base-ui/surfaces/card"
      className={classNames(
        styles.card,
        backgrounds.layer,
        elevationClass[elevation],
        roundnessClass[roundness],
        className
      )}
      {...rest}
    />
  );
}

Card.defaultProps = {
  elevation: 'low',
  roundness: 'normal',
};
