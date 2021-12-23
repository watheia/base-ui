import React from 'react';
import { TooltipDrawer } from './tooltip-drawer';

export const ForcedOpen = () => (
  <div style={{ padding: '11px 11px 80px', maxWidth: 100 }}>
    <TooltipDrawer
      placeholder="placeholder"
      open={true} // force open
    >
      tooltip menu
    </TooltipDrawer>
  </div>
);
