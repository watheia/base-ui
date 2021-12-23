import React from 'react';
import { IconFont } from '@watheia/theme.fonts.icon-font';
import { Icon } from './icon';

const iconList = [
  'spinner',
  'team-avatar',
  'solo-avatar',
  'arrow-in-a-circle',
  'x-thick',
  'logout',
  'lightbulb',
  'video',
  'arrow_right',
  'thin-arrow-up',
  'thin-arrow-down',
  'heartfull',
  'heartstroke',
  'information-sign',
  'Skeleton-Lobby',
  'image',
  'note-Full',
  'weight',
  'duplicate-july',
  'floppy',
  'arrow-down',
  'arrow-up',
  'billing-checkmark',
  'leftarrow',
  'right-arrow',
  'right_arrow',
  'lock1',
  'note',
  'plus',
  'public',
  'collaboration_icn',
  'compCI',
  'discovery',
  'experience',
  'extend',
  'publish',
  'sync',
  'use',
  'calendar',
  'hooray',
  'undo',
  'reduce',
  'expand',
  'add-plus',
  'save',
  'components',
  'info',
  'link',
  'settings',
  'edit',
  'downloads',
  'snap',
  'view-horizontal',
  'view-vertical',
  'close',
  'bit',
  'npm',
  'yarn',
  'refresh',
  'check-mark',
  'fat-arrow-down',
  'lock',
  'magnifying',
  'text',
  'credit',
  'heart',
  'license',
  'phone',
  'world',
  'org',
  'collection',
  'home',
  'users',
  'email',
  'slack',
  'github-logo',
  'twitter-logo',
  'versioning',
  'reusable',
  'workspace',
  'goodbye',
];

export const IconExamples = () => (
  <>
    <IconFont />
    <div style={{ maxWidth: '300px', lineHeight: '1.61' }}>
      {iconList.map((x) => (
        <span key={x}>
          {' '}
          <Icon of={x} />{' '}
        </span>
      ))}
    </div>
  </>
);