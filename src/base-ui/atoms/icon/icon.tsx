import React from 'react';

import { BaseIcon, BaseIconProps } from '@watheia/base-ui.atoms.icon-base';

const iconSetPrefix = 'bitcon';

export type IconProps = BaseIconProps;

/**
 * Placeholder for an icon, from Bit.dev's icon font.
 *
 * @name Icon
 * @example
 * // Embed icon at the document root:
 * <EvaIconFont query="sdfj4k2d"/>
 *
 * // Then use icon anywhere in the document:
 * <Icon of="spinner"/>
 */
export function Icon({ className, of: iconName, ...rest }: IconProps) {
  return (
    <BaseIcon
      of={`${iconSetPrefix}-${iconName}`}
      className={className}
      data-testid="watheia.base-ui/atoms/icon"
      {...rest}
    />
  );
}
