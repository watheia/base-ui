import React from 'react';
import clsx from 'clsx';
import { Icon } from '@watheia/base-ui.atoms.icon';

import * as styles from './x-button.module.scss';

export type XButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function XButton(props: XButtonProps) {
  return (
    <button {...props} className={clsx(styles.xButton, props.className)}>
      <Icon of="x-close" />
    </button>
  );
}
