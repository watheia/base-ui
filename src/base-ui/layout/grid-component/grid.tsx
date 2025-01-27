import React, { PureComponent } from 'react';
import classNames from 'clsx';
import * as styles from './grid.module.scss';

import {
  colGrid,
  colGridL,
  colGridLg,
  colGridMd,
  colGridSm,
  colGridXl,
  colGridXs,
} from './grid-template';

export type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridProps = {
  /**
   * default column count (1-12)
   */
  col?: ColCount;
  /**
   * column count at extremely small devices
   */
  colXs?: ColCount;
  /**
   * column count at mobile screens
   */
  colSm?: ColCount;
  /**
   * column count at medium devices
   */
  colMd?: ColCount;
  /**
   * column count at tablets
   */
  colL?: ColCount;
  /**
   * default column count at laptops
   */
  colLg?: ColCount;
  /**
   * default column count at desktop
   */
  colXl?: ColCount;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A responsive css-grid wrapper.
 * Use the `col` properties to set column count in each resolution.
 */

export class Grid extends PureComponent<GridProps> {
  render() {
    const { className, col, colL, colLg, colMd, colSm, colXl, colXs, ...rest } =
      this.props;

    const classes = [className, styles.gridContainer];

    //yup, it's dirty, but it does exactly what it is supposed to do.
    // don't abuse it

    if (col !== undefined) classes.push(colGrid[col]);
    if (colL !== undefined) classes.push(colGridL[colL]);
    if (colLg !== undefined) classes.push(colGridLg[colLg]);
    if (colMd !== undefined) classes.push(colGridMd[colMd]);
    if (colSm !== undefined) classes.push(colGridSm[colSm]);
    if (colXl !== undefined) classes.push(colGridXl[colXl]);
    if (colXs !== undefined) classes.push(colGridXs[colXs]);

    return (
      <div
        data-testid="teambit.base-ui/layout/grid-component"
        {...rest}
        className={classNames(...classes)}
      />
    );
  }
}
