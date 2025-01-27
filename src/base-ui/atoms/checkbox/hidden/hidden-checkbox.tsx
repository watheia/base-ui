import React from 'react';
import clsx from 'clsx';
import styles from './hidden-checkbox.module.scss';

export type HiddenCheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

/** Hidden but interactive checkbox */
export function HiddenCheckbox({
  className,
  type = 'checkbox',
  ...rest
}: HiddenCheckboxProps) {
  return (
    <input
      {...rest}
      type={type}
      className={clsx(className, styles.hidden)}
    />
  );
}
