import React from 'react';
import { Button } from './button';

export const CallToActionButton = ({ ...rest }) => {
  return (
    <Button importance="cta" style={{ width: 120 }} {...rest}>
      Submit
    </Button>
  );
};

export const MainButton = () => {
  return (
    <Button importance="ghost" style={{ width: 120 }}>
      Update
    </Button>
  );
};

export const LightButton = ({ ...rest }) => {
  return (
    <LightTheme>
      <Button style={{ width: 120 }} {...rest}>
        learn more
      </Button>
    </LightTheme>
  );
};

export const CallToActionLoading = () => {
  return (
    <LightTheme>
      <Button importance="cta" loading style={{ width: 120 }}>
        Submit
      </Button>
    </LightTheme>
  );
};

export const Loading = () => {
  return (
    <LightTheme>
      <Button importance="ghost" loading style={{ width: 120 }}>
        Update
      </Button>
    </LightTheme>
  );
};

export const LightButtonLoading = () => {
  return (
    <LightTheme>
      <Button loading style={{ width: 120 }}>
        Learn more
      </Button>
    </LightTheme>
  );
};

export const CallToActionButtonDisabled = ({ ...rest }) => {
  return (
    <LightTheme>
      <Button importance="cta" style={{ width: 120 }} {...rest} disabled>
        Submit
      </Button>
    </LightTheme>
  );
};

export const MainButtonDisabled = () => {
  return (
    <LightTheme>
      <Button importance="ghost" style={{ width: 120 }} disabled>
        Update
      </Button>
    </LightTheme>
  );
};

export const LightButtonDisabled = ({ ...rest }) => {
  return (
    <LightTheme>
      <Button style={{ width: 120 }} {...rest} disabled>
        learn more
      </Button>
    </LightTheme>
  );
};
